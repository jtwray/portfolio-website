# Slice 1 baseline audit

Status: complete pending one product confirmation

Date: 2026-08-15

Candidate branch: `codex/experience-system-history`

Workflow baseline commit: `761420f`

## Scope and method

This was a read-only product-code audit. It inspected Git state, HTML and CSS references, tracked-file hashes, Vite output, internal anchors, repository history, and the live incumbent at `https://tuckerwray.com`. No product code or legacy asset was changed or deleted.

## Canonical release path

The current candidate release is generated from:

- `index.html`
- `assets/css/portfolio.css`
- `package.json`
- `package-lock.json`

`index.html` contains the current JavaScript inline. It does not load a local JavaScript file or local image. `assets/css/portfolio.css` contains no `url(...)` references.

`npm run build` succeeds and emits only:

- `dist/index.html`
- `dist/assets/index-C10j8BF1.css` (hash varies when CSS changes)

All seven internal fragment links resolve to IDs present in the page.

## Repository classification

### Required for the current candidate

- `.gitignore`
- `index.html`
- `assets/css/portfolio.css`
- `package.json`
- `package-lock.json`
- `LICENSE.txt`
- `PROJECT.md`
- `ROADMAP.md`
- `AGENTS.md`
- `docs/`

`README.md` is tracked but describes the obsolete Lambda School assignment rather than the current repository workflow. Replace it in a later documentation change.

### Generated and intentionally ignored

- `node_modules/`
- `dist/`
- `.vite/`

### Legacy and unused by the current candidate

- `portfolio/` — 106 files, approximately 5.8 MB
- `images/` — 25 files, approximately 3.9 MB
- `images1/` — 27 files, approximately 3.9 MB
- `assets/fonts/`
- `assets/js/`
- `assets/sass/`
- `assets/css/font-awesome.min.css`
- `assets/css/main.css`
- `assets/css/noscript.css`

Hash comparison confirms extensive exact duplication across `portfolio/`, `images/`, `images1/`, nested `assets/js/js/`, and nested `assets/sass/sass/`. Examples include the template JavaScript, Sass component tree, fonts, README/license copies, and many images appearing two or three times with identical SHA-256 hashes.

## Cleanup execution

The owner approved the exact cleanup proposal. The legacy and unused targets listed above were removed in one dedicated cleanup change. `LICENSE.txt`, active product files, and workflow documentation were preserved. The obsolete root README remains for a separate replacement so cleanup stays mechanically reviewable.

Post-cleanup verification:

- 239 tracked files removed with no unrelated additions or modifications in the cleanup set.
- `index.html`, `assets/css/portfolio.css`, and `LICENSE.txt` remain present.
- `npm run build` passes and produces the same two-file release shape.
- Current source references still require no removed local asset.

Recovery implications:

- All proposed targets are tracked in Git and remain recoverable from the cleanup commit's parent or earlier history.
- The deletion commit can be reverted independently.
- Run the build, anchor/asset checks, and local browser smoke test before and after deletion; the outputs should be equivalent.
- Do not squash the cleanup into unrelated experience changes.

## Incumbent observations

The live incumbent loaded at `https://tuckerwray.com/` with the title beginning “J. Tucker Wray” and a broad technology-keyword list.

Observed strengths:

- It includes explicit biography and personal context.
- It provides five named projects with separate demo and GitHub links.
- It exposes a direct contact form.
- It includes concrete professional-development and mentorship claims.

Observed risks:

- The browser logged `parcelRequire is not defined` in both `projects.7f712d2e.js` and `processForm.258c8d54.js`.
- Because the second error is in the form-processing bundle, the contact form must be treated as unverified and potentially broken until exercised safely.
- Several time-sensitive claims appear stale, including “30 months” of experience and a “currently” statement about a 2024 program.
- The positioning is technology-list-heavy and does not immediately express the candidate's current engineering value as clearly as the local candidate headline.

Visual comparison remains untested in this audit because full-page capture did not complete. Do not treat DOM/content inspection as a full responsive or aesthetic review.

## Candidate-versus-incumbent scorecard

- First-screen positioning: **improved**. The candidate leads with “I build complicated things people can use,” a clearer value proposition than the incumbent's skills-first presentation.
- Hiring-manager credibility: **mixed**. The candidate presents stronger system-level experience, but most project cards currently link only to the GitHub profile instead of specific evidence.
- Prospective-client credibility: **mixed**. The candidate looks oriented toward delivery and usable systems, but lacks direct case-study proof and client-specific outcomes.
- Representative-work discovery: **regressed**. The incumbent exposes specific demo and repository links; the candidate mostly routes projects to a generic profile or Contact.
- Qualified-contact path: **likely improved for reliability, not fully verified**. The candidate uses a simple `mailto:` link; the incumbent provides a richer form but logs an error in its form bundle.
- Responsive behavior and accessibility: **untested**. This belongs to Slice 2.
- Performance and reliability: **provisionally improved**. The candidate build is only HTML and CSS and has no observed runtime dependency errors; browser-level local verification remains.
- Accuracy and maintainability: **improved structurally, mixed editorially**. The candidate source is much simpler, but claims still require owner validation and the repository contains substantial dead legacy material.

Promotion recommendation: **do not replace the incumbent yet**. The candidate has a materially stronger positioning direction and simpler runtime, but needs specific work evidence, responsive/accessibility review, owner validation of claims, and a complete contact-flow check before it earns promotion.

## Proposed Slice 2 priorities

1. Render and test the candidate across narrow mobile, tablet, laptop, and wide desktop viewports.
2. Test all keyboard interactions, focus states, reduced motion, landmarks, headings, and accessible names.
3. Validate every professional claim and replace generic project links with the strongest truthful demo, repository, or case-study evidence available.
4. Verify the `mailto:` contact behavior and decide whether it is sufficient for both audiences.
5. Fix release blockers only, then repeat the promotion scorecard.

## Owner checkpoints

1. Confirm whether qualified contact should remain the candidate's primary conversion.
2. Confirm which current professional and project claims can be published.
