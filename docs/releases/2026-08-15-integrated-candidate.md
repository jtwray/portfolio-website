# Release verification: 2026-08-15 integrated candidate

- Candidate branch: `codex/experience-system-history`
- Tested code commit: `38bd72a`
- Netlify-configured preview commit: `bd7fe0a`
- Release-record commit: documentation-only successor to `38bd72a`
- Intended environment: local Vite production preview
- Preview URL used: `http://127.0.0.1:4176/`
- Production URL: not selected

## Included outcome

This integrated candidate combines the responsive and accessibility baseline with evidence-backed project work, resume-supported experience, calibrated mentorship metrics, dual contact paths, release automation, search/social metadata, branded preview artwork, and current repository instructions.

Selected work now provides direct evidence for WAMIF, LightningJS Movies, and Cellular Automata. The portfolio remains a static Vite build with no analytics, tracking, backend, or production-hosting dependency.

## Automated evidence

- Command: `npm run verify`
- Static integrity: passed for required source and public files, local references, internal anchors, unique IDs, baseline document semantics, image alternative text, social metadata, and qualified email subject.
- Production build: passed with Vite 7.3.6.
- Build output: HTML, hashed CSS/favicon/project images, and stable-root social-preview SVG/PNG.
- Social image: verified at exactly 1200×630 pixels.
- Diff hygiene: `git diff --check` passed before the tested code commit.

## Manual production-preview evidence

- Responsive layouts: checked at 375×812, 768×1024, 1024×768, 1440×900, and 1920×1080.
- Overflow: no horizontal document overflow at any checked width.
- Navigation: Work, Stack, Experience, and Contact remained visible at every checked width; all internal fragments resolved.
- Project media: all project images completed loading with non-zero intrinsic dimensions.
- Project evidence: WAMIF, LightningJS Movies, and Cellular Automata expose separate verified live-demo and public-source destinations.
- System control: Right Arrow moved focus and selected state from UI to Application; the shared panel label and content updated together.
- Experience disclosures: native disclosure state toggled successfully.
- Contact actions: role and project email destinations retained distinct subject lines.
- Metadata: Open Graph image, Twitter large-card metadata, favicon, and search description resolved in the production preview.
- Social artwork: the built PNG loaded successfully and matched the editable SVG composition.
- Console/network: no visible application failure occurred. Prior Slice 2 instrumentation reported no site console errors; console capture was not independently repeated by this browser surface.

## Review

- Reviewer: primary delivery agent reviewing the integrated build against `PROJECT.md`, `ROADMAP.md`, `AGENTS.md`, the claim register, and prior audits.
- Finding fixed during release review: raster social artwork exported at 1199×630 due a browser boundary; regenerated and reverified at the standard 1200×630 dimensions in `38bd72a`.
- Accepted limitation: canonical URL, `og:url`, and absolute social-image origin require a selected hosting origin.
- Accepted limitation: external deployments remain third-party availability dependencies and should be smoke-tested again immediately before preview review and production promotion.
- Accepted limitation: enterprise work remains appropriately generalized and routes to experience/contact rather than confidential source.
- Accepted limitation: measured color contrast and automated browser accessibility scanning are not yet part of `npm run verify`; manual semantic, keyboard, motion, and responsive checks have passed.
- Deferred work: Interaction Lab experiments remain a later slice and are not part of this candidate.

## Candidate versus incumbent

- First-screen positioning: **improved** — the candidate communicates a direct software-engineering value proposition rather than leading with a broad skills inventory.
- Hiring-manager credibility: **improved** — experience, mentorship scale, verified project source, demos, and engineering-system thinking are visible and evidence-calibrated.
- Prospective-client credibility: **improved** — delivery breadth and a dedicated project-inquiry path are clear, although public client case studies remain limited.
- Representative-work discovery: **improved from the previous candidate and now competitive with the incumbent** — three projects have direct demo/source actions and screenshots rather than generic profile links.
- Qualified-contact path: **improved for clarity and runtime simplicity** — separate role and project subjects avoid reliance on the incumbent's previously erroring form bundle.
- Responsive behavior and accessibility: **improved** — five-width layout, visible navigation, keyboard semantics, focus styles, native disclosures, and reduced-motion treatment have passed.
- Performance and reliability: **improved locally** — the candidate is a small static build with a repeatable integrity gate and no observed application failure.
- Accuracy and maintainability: **improved** — claims, evidence, workflow, verification, and release state are explicitly documented.

Promotion recommendation: **the candidate has earned an owner-reviewed hosted preview**. It is meaningfully stronger than the incumbent on positioning, accessibility, maintainability, evidence structure, and local reliability, with no known release-blocking regression. Do not replace production until a hosted preview is reviewed, its public-origin metadata is finalized, and the exact deployment passes the production smoke test.

## Deployment

- Hosting provider: Netlify
- Test site: `tucker-wray-portfolio-test-20260815`
- Site ID: `c43c3976-4827-40ed-8df5-c9e55a827732`
- Draft deploy ID: `6a812d492db1afb97ffa3d00`
- Draft deploy URL: `https://6a812d492db1afb97ffa3d00--tucker-wray-portfolio-test-20260815.netlify.app`
- Project-card polish commit: `a96efff`
- Current draft deploy ID: `6a8131d6139f4743a078bfd5`
- Current draft deploy URL: `https://6a8131d6139f4743a078bfd5--tucker-wray-portfolio-test-20260815.netlify.app`
- Netlify state: `ready`
- Deploy context: `deploy-preview`
- Deployed artifact source: locally verified `dist/` built from `a96efff`
- Deploy message: `Portfolio project-card polish a96efff`
- Production deployment: not attempted
- Incumbent production site and domain: unchanged

Hosted-preview smoke evidence:

- The current immutable draft returned HTTP 200 and contained the new enterprise and WAMIF card variants.
- Work, Stack, Experience, and Contact navigation remained visible at 375, 768, 1440, and 1920 pixels.
- No horizontal overflow occurred at any checked width.
- All project images loaded with non-zero intrinsic dimensions.
- All internal fragment targets resolved.
- Right Arrow moved system-tab focus, selected state, panel labeling, and content to Application.
- Project demo/source URLs and both qualified email subjects were present.
- The deployed social preview loaded at 1200×630.

Required next authority: owner review and explicit approval before merge or any production deployment.

## Rollback

- Previous integrated commit: `3cdfb16`
- Previous formal local release record: `c85c259`, testing code commit `600e805`
- Before deployment, rollback means reverting the selected change or checking out the explicitly approved known-good commit.
- After hosting selection, record the provider-specific rollback mechanism and verify the target commit before any production action.
