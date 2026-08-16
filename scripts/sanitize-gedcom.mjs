import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const [, , inputArg, outputArg] = process.argv;
if (!inputArg || !outputArg) {
  console.error("Usage: node scripts/sanitize-gedcom.mjs <input.ged> <output.ged>");
  process.exit(1);
}

const inputPath = resolve(inputArg);
const outputPath = resolve(outputArg);
const source = await readFile(inputPath, "utf8");
const lines = source.split(/\r?\n/);
const names = new Map();
const places = new Map();
let nameIndex = 0;
let placeIndex = 0;
let recordIndex = 0;
let redactedLevel = null;

const valueOf = (line) => line.replace(/^\d+\s+(?:@[^@]+@\s+)?[A-Z0-9_]+\s*/, "");
const levelOf = (line) => Number.parseInt(line, 10);
const mapped = (map, value, prefix) => {
  if (!map.has(value)) map.set(value, `${prefix} ${map.size + 1}`);
  return map.get(value);
};

const shiftedDates = (value) =>
  value.replace(/\b(\d{4})\b/g, (_, year) => String(Number(year) - 500));

const output = [];
for (const line of lines) {
  if (!line.trim()) {
    output.push(line);
    continue;
  }
  const level = levelOf(line);
  if (redactedLevel !== null) {
    if (level > redactedLevel) continue;
    redactedLevel = null;
  }

  const match = line.match(/^(\d+)\s+((?:@[^@]+@\s+)?)([A-Z0-9_]+)(?:\s+(.*))?$/);
  if (!match) {
    output.push(line);
    continue;
  }
  const [, rawLevel, pointer, tag, rawValue = ""] = match;
  const prefix = `${rawLevel} ${pointer}${tag}`;
  let value = rawValue;

  if (tag === "INDI") {
    recordIndex += 1;
    value = rawValue;
  } else if (tag === "NAME") {
    value = mapped(names, rawValue, "Synthetic Person");
  } else if (tag === "GIVN") {
    value = mapped(names, rawValue, "Given");
  } else if (tag === "SURN") {
    value = mapped(names, rawValue, "Family");
  } else if (tag === "PLAC") {
    value = `${mapped(places, rawValue, "Place")}, Region ${places.size}`;
  } else if (["ADDR", "PHON", "WWW"].includes(tag)) {
    value = tag === "PHON" ? "000-000-0000" : "Synthetic value removed";
  } else if (["NOTE", "AUTH", "CORP", "PUBL", "TITL", "FILE", "PAGE"].includes(tag)) {
    value = "Synthetic source detail removed";
    redactedLevel = level;
  } else if (tag === "DATE") {
    value = shiftedDates(rawValue);
  } else if (/^_(?:USER|OID|APID|PID|TID|LKID|ORIG|CLON|META|ENV|TREE|TYPE|SREL|MREL|FREL|MSER|STYPE|PRIM|TOP|SIZE|HGHT|WDTH|LEFT|CROP|CREA|ENCR)$/.test(tag)) {
    value = "synthetic";
  }
  output.push(`${prefix}${value ? ` ${value}` : ""}`);
}

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, output.join("\n"), "utf8");
console.log(JSON.stringify({ input: inputPath, output: outputPath, lines: output.length, mappedNames: names.size, mappedPlaces: places.size, records: recordIndex }));
