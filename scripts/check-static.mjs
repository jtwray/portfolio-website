import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = resolve(root, "index.html");
const caseStudyPath = resolve(root, "wamif.html");
const cssPath = resolve(root, "assets/css/portfolio.css");
const errors = [];

const requireFile = (path, label) => {
  if (!existsSync(path)) errors.push(`${label} is missing: ${path}`);
};

requireFile(htmlPath, "Entry document");
requireFile(caseStudyPath, "WAMIF case-study document");
requireFile(cssPath, "Primary stylesheet");

if (errors.length === 0) {
  const html = readFileSync(htmlPath, "utf8");
  const caseStudyHtml = readFileSync(caseStudyPath, "utf8");
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
    ...html.matchAll(
      /<meta\b[^>]*(?:property|name)=["'](?:og:image|twitter:image)["'][^>]*content=["']([^"']+)["']/gi,
    ),
    ...css.matchAll(/url\(["']?([^"')]+)["']?\)/g),
  ].map((match) => match[1]);
  const localReferences = references.filter(
    (reference) =>
      !reference.startsWith("#") &&
      !reference.startsWith("//") &&
      !/^(?:https?:|mailto:|tel:|data:)/i.test(reference),
  );
  const missingAssets = [
    ...new Set(
      localReferences.filter((reference) => {
        const cleanPath = reference.split(/[?#]/, 1)[0];
        const assetPath = cleanPath.startsWith("/")
          ? resolve(root, "public", cleanPath.slice(1))
          : resolve(root, cleanPath);
        return !existsSync(assetPath);
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
    [/property=["']og:title["']/i, "Open Graph title"],
    [/property=["']og:description["']/i, "Open Graph description"],
    [/property=["']og:image["']/i, "Open Graph image"],
    [/name=["']twitter:card["']/i, "Twitter card metadata"],
    [/rel=["']icon["']/i, "site icon"],
  ];
  requiredPatterns.forEach(([pattern, label]) => {
    if (!pattern.test(html)) errors.push(`Missing required ${label}`);
  });

  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) errors.push(`Expected exactly one h1; found ${h1Count}`);

  const caseStudyIds = [...caseStudyHtml.matchAll(/\sid=["']([^"']+)["']/g)].map(
    (match) => match[1],
  );
  const caseStudyFragments = [
    ...caseStudyHtml.matchAll(/\shref=["']#([^"']+)["']/g),
  ].map((match) => match[1]);
  const missingCaseStudyTargets = [
    ...new Set(caseStudyFragments.filter((id) => !caseStudyIds.includes(id))),
  ];
  if (missingCaseStudyTargets.length) {
    errors.push(
      `Missing WAMIF case-study link targets: ${missingCaseStudyTargets.join(", ")}`,
    );
  }
  const caseStudyH1Count = (caseStudyHtml.match(/<h1\b/gi) || []).length;
  if (caseStudyH1Count !== 1) {
    errors.push(`Expected exactly one WAMIF case-study h1; found ${caseStudyH1Count}`);
  }
  if (!/href=["']wamif\.html["']/i.test(html)) {
    errors.push("Homepage does not link to the WAMIF case study");
  }
  if (!/href=["']https:\/\/wamif\.netlify\.app\//i.test(caseStudyHtml)) {
    errors.push("WAMIF case study is missing the verified live-demo link");
  }
  if (!/href=["']https:\/\/github\.com\/jtwray\/wamifnextv2/i.test(caseStudyHtml)) {
    errors.push("WAMIF case study is missing the verified source link");
  }
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
  console.log("- the WAMIF case study has valid anchors and verified demo/source paths");
  console.log("- a qualified mail contact includes a subject");
}
