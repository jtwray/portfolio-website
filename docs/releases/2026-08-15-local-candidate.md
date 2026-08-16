# Release verification: 2026-08-15 local candidate

- Candidate branch: `codex/experience-system-history`
- Tested code commit: `600e805`
- Release-record commit: documentation-only successor to `600e805`
- Intended environment: local Vite production preview
- Preview URL used: `http://127.0.0.1:4173/`
- Production URL: not selected; deployment is intentionally deferred

## Included outcome

This candidate presents an evidence-calibrated software-engineering portfolio for hiring managers and prospective clients. It includes responsive section navigation, selected work, an interactive engineering-system explanation, professional experience, and separate role and project contact paths.

This release-verification slice adds a dependency-free static integrity check, a single automated release command, and a documented production-preview smoke test. It does not change product content, select hosting, merge the branch, or deploy the site.

## Automated evidence

- Dependency baseline: existing locked dependencies; no package was added.
- Command: `npm run verify`
- Static checks: passed for required source files, local asset references, internal anchors, unique IDs, HTML language, viewport and description metadata, main landmark, single primary heading, image alternative text, and a qualified email subject.
- Production build: passed with Vite 7.3.6.
- Build output: `dist/index.html` and one hashed CSS asset.
- Diff hygiene: `git diff --check` passed before the tested code commit.

## Manual evidence

- Responsive layouts: built preview checked at 375×812, 768×1024, 1024×768, 1440×900, and 1920×1080; no horizontal document overflow was detected.
- Navigation and anchors: all four fixed-header links remained visible at every checked width; every internal fragment resolved.
- Keyboard flow: Right Arrow moved focus and selected state from UI to Application, updated the shared panel relationship, and displayed the Application detail content.
- Semantic structure: the built preview exposed navigation, main and footer landmarks, one `h1`, ordered section headings, a named tablist, named buttons, native experience disclosures, and named contact links.
- Project and external links: destinations and accessible names were inspected; external destinations were not launched.
- Contact actions: both `mailto:` destinations were present with distinct role and project subjects; the operating-system mail client was not launched.
- Console/network errors: the Slice 2 development-server review reported no browser warnings or errors. The production preview loaded and operated without a visible failure; console capture was not repeated in this Slice 3 run.

## Review

- Reviewer: primary delivery agent, reviewing the integrated diff and built output against `PROJECT.md`, `ROADMAP.md`, and `AGENTS.md`.
- Findings fixed: missing repeatable integrity checks and missing production-preview/release instructions.
- Accepted limitation: the static checker is intentionally narrow and does not replace a browser accessibility engine, measured contrast audit, external link monitor, or visual-regression suite.
- Accepted limitation: WAMIF and enterprise work route to Contact; NurtureTrack and ERAE Rescue route to the general GitHub profile rather than project-specific evidence.
- Accepted limitation: local verification cannot prove production hosting, DNS, mail-client behavior, or the future deployed commit.

## Candidate versus incumbent

- First-screen positioning: **improved** — the candidate states a clearer engineering value proposition.
- Hiring-manager credibility: **improved but incomplete** — calibrated employment and mentorship claims are stronger; specific project proof still needs work.
- Prospective-client credibility: **improved but incomplete** — systems breadth and a dedicated project contact path are clear; public case-study outcomes remain limited.
- Representative-work discovery: **regressed** — the incumbent still exposes more specific demos and repositories.
- Qualified-contact path: **improved for clarity and runtime simplicity** — two explicit email subjects avoid dependence on the incumbent's previously erroring form bundle.
- Responsive behavior and accessibility: **improved** — five-width preview and keyboard checks pass, with semantic tab state and reduced-motion support established in Slice 2.
- Performance and reliability: **improved locally** — the candidate has a two-asset static build and a repeatable integrity gate.
- Accuracy and maintainability: **improved** — claims have an evidence register and release verification is now executable and documented.

Promotion recommendation: **ready for an owner-reviewed hosted preview, but not yet recommended to replace the incumbent**. Release mechanics and accessibility are credible enough to evaluate the real candidate. Specific project evidence remains the most important weakness to resolve or explicitly accept before production promotion.

## Deployment

- Deployed commit: none
- Deployment result: not attempted; owner approval and hosting selection are required
- Production smoke test: not applicable

## Rollback

The previous known-good code commit is `bacf9b0`. Before deployment, rollback means selecting that commit or reverting `600e805`; the only product-independent difference is the verification tooling and documentation. After a hosting provider is chosen, add its exact rollback procedure before production deployment. Never roll back production without confirming the target commit and owner intent.
