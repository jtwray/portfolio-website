import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = resolve(root, "index.html");
const cssPath = resolve(root, "assets/css/portfolio.css");
const errors = [];

const requireFile = (path, label) => {
  if (!existsSync(path)) errors.push(`${label} is missing: ${path}`);
};

requireFile(htmlPath, "Entry document");
requireFile(cssPath, "Primary stylesheet");

if (errors.length === 0) {
  const html = readFileSync(htmlPath, "utf8");
  const css = readFileSync(cssPath, "utf8");
  const ids = [...html.matchAll(/\sid=["']([^"']+)["']/g)].map(
    (match) => match[1],
  );
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  const fragments = [...html.matchAll(/\shref=["']#([^"']+)["']/g)].map(
    (match) => match[1],
  );

  if (duplicateIds.length) {
    errors.push(`Duplicate HTML IDs: ${duplicateIds.join(", ")}`);
  }

  const missingTargets = [...new Set(fragments.filter((id) => !ids.includes(id)))];
  if (missingTargets.length) {
    errors.push(`Missing internal-link targets: ${missingTargets.join(", ")}`);
  }

  const references = [
    ...html.matchAll(/\s(?:href|src)=["']([^"']+)["']/g),
    ...css.matchAll(/url\(["']?([^"')]+)["']?\)/g),
  ].map((match) => match[1]);
  const localReferences = references.filter(
    (reference) =>
      !reference.startsWith("#") &&
      !reference.startsWith("/") &&
      !/^(?:https?:|mailto:|tel:|data:)/i.test(reference),
  );
  const missingAssets = [
    ...new Set(
      localReferences.filter((reference) => {
        const cleanPath = reference.split(/[?#]/, 1)[0];
        return !existsSync(resolve(root, cleanPath));
      }),
    ),
  ];
  if (missingAssets.length) {
    errors.push(`Missing local assets: ${missingAssets.join(", ")}`);
  }

  const imagesWithoutAlt = [...html.matchAll(/<img\b[^>]*>/gi)]
    .map((match) => match[0])
    .filter((tag) => !/\salt=["'][^"']*["']/i.test(tag));
  if (imagesWithoutAlt.length) {
    errors.push(`${imagesWithoutAlt.length} image(s) are missing alt attributes`);
  }

  const requiredPatterns = [
    [/<html\b[^>]*\slang=["'][^"']+["']/i, "HTML language"],
    [/<meta\b[^>]*\bname=["']viewport["']/i, "viewport metadata"],
    [/<meta\b[^>]*\bname=["']description["']/i, "page description"],
    [/<main\b/i, "main landmark"],
    [/<h1\b/i, "primary heading"],
    [/href=["']mailto:[^"']+subject=/i, "qualified contact subject"],
  ];
  requiredPatterns.forEach(([pattern, label]) => {
    if (!pattern.test(html)) errors.push(`Missing required ${label}`);
  });

  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) errors.push(`Expected exactly one h1; found ${h1Count}`);
}

if (errors.length) {
  console.error("Static release checks failed:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log("Static release checks passed:");
  console.log("- required source files and local assets exist");
  console.log("- internal anchors resolve and HTML IDs are unique");
  console.log("- baseline metadata, landmarks, headings, and image alt text are present");
  console.log("- a qualified mail contact includes a subject");
}
