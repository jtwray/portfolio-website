# Roadmap

This is the lightweight work queue. Keep only one implementation slice in progress unless assignments are genuinely independent.

## Now

### Slice 1: Establish a trustworthy baseline

- [x] Owner confirms hiring managers and prospective clients as co-primary audiences.
- [x] Owner confirms `codex/experience-system-history` as the intended successor to `master`.
- [x] Record local-only development and `https://tuckerwray.com` as the incumbent benchmark.
- [x] Confirm dual-path qualified contact and defer audience priority until a concrete conflict appears.
- [x] Map files referenced by the production page and files emitted by Vite.
- [x] Classify duplicate and legacy directories as required, archival, or removable.
- [x] Propose cleanup separately; do not delete files without approval.
- [x] Defer hosting selection until the candidate earns promotion over the incumbent.

Acceptance criteria:

- Canonical source files and release branch are documented.
- Every referenced local asset exists and is included in the release as needed.
- Legacy-file recommendations include evidence and recovery implications.
- `npm run build` passes.
- A slice-completion scorecard states how the work affects the candidate-versus-incumbent decision.

### Slice 2: Experience and accessibility baseline

- [x] Review the rendered site at narrow mobile, tablet, laptop, and wide desktop sizes.
- [x] Exercise navigation, project links, system-map controls, and contact actions.
- [x] Review semantic structure, keyboard use, focus, contrast, motion, and accessible names.
- [x] Fix only approved release-blocking findings.

Acceptance criteria:

- Primary flows work with pointer and keyboard.
- No horizontal overflow or unreadable content at supported sizes.
- Material findings are fixed or explicitly accepted.
- `npm run build` passes after fixes.

### Slice 3: Repeatable release verification

- [x] Add automated checks appropriate to this static site.
- [x] Document local preview and smoke-test steps.
- [x] Create a release record for the candidate commit.

Acceptance criteria:

- One documented command runs the required automated checks.
- Internal anchors and required local assets are checked.
- The release record identifies commit, checks, manual evidence, risks, and rollback.

### Slice 4: Preview, merge, deploy, confirm

- [x] Decide whether the local candidate has earned a hosted preview.
- [x] Select hosting only after that decision.
- [x] Publish a preview of the release candidate.
- [x] Review the integrated diff and preview.
- [ ] Obtain owner approval to merge and deploy.
- [ ] Confirm the deployed commit and run the production smoke test.

Acceptance criteria:

- Preview and production results are recorded.
- The deployed version corresponds to the approved commit.
- Primary navigation, work, experience, and contact flows pass in production.

## Next

- [x] Strengthen project evidence, visual consistency, and direct demo/source discovery.
- [x] Improve metadata, social sharing, and discoverability without inventing a production origin.
- [x] Replace the legacy README with current contributor and release instructions.

### Slice: LightningJS platform-boundary and evidence remediation

Status: queued; implementation requires owner confirmation of the credential verification path and TMDB deployment architecture.

- [ ] Keep LightningJS Movies as selected work; do not remove it solely because its renderer is canvas/WebGL-oriented.
- [ ] Revise the project description to explain remote-first TV interaction and distinguish the browser-hosted preview from the target TV renderer.
- [ ] Add accurate platform tags for LightningJS, WebGL/canvas rendering, remote navigation, Samsung/Tizen, and TMDB integration.
- [ ] Change the destination label from “Live demo” to “Browser preview” if the deployed artifact is a browser adaptation rather than a device-certified TV build.
- [ ] Add a concise accessibility note: DOM screen-reader inspection is not representative; verify only target-platform focus, input, announcer, magnification, contrast, and text-scaling behavior that has actually been tested.
- [ ] Inspect the deployed bundle and network requests to determine whether the TMDB token is exposed client-side. Do not describe a client-visible key as secret; use a server-side proxy or public-key wording as appropriate.
- [ ] Add the owner-supplied credential name, issuer, date, credential ID, and stable verification URL. If verification requires a form and ID, label it as an ID-based verification path rather than a direct credential page.
- [ ] Describe the five-day training/capstone as learning context, not as a substitute for production experience.
- [ ] Re-run the hiring-manager, client, and technical-quality review after implementation.

Acceptance criteria:

- The LightningJS card accurately communicates its TV/WebGL platform boundary in one scan.
- The browser preview, source repository, and credential destinations are individually labeled and verified.
- No TMDB secret-management claim is published without evidence from the deployed artifact architecture.
- Accessibility language distinguishes verified behavior from platform assumptions.
- `npm run verify` passes and the exact draft deploy is smoke-tested.
- The reviewer confirms that LightningJS strengthens, rather than weakens, the candidate’s credibility.

## Later

- Consider analytics only after defining a measurement question and privacy policy.
- Consider richer interactions only when they improve the primary conversion goal.

### Slice: Curated Interaction Lab

- [x] Inventory the original source and public URL for each candidate experiment.
- [x] Select no more than three experiments that demonstrate distinct engineering ideas; begin with the locally supported 3D text carousel.
- [ ] Rebuild or polish selected experiments to match the portfolio's visual system.
- [ ] Replace copyrighted characters and unclear novelty framing with original, professional presentation.
- [ ] Add keyboard, touch, responsive, reduced-motion, and loading/failure behavior.
- [x] Present the initial experiment as a compact “Interaction Lab” after Experience and before Contact.
- [x] Keep experiments subordinate to primary project evidence and qualified-contact paths.

Candidate order:

1. Scrolling video-mask sticky hero.
2. Three-dimensional carousel/word interaction, after locating its source and public demo.
3. Redesigned spatial “popsicle” skills experiment.

Acceptance criteria:

- Every published experiment states the interaction or rendering question it explores.
- Every experiment works with pointer, keyboard, and touch where applicable.
- Reduced-motion mode remains complete and understandable without animation.
- No copyrighted character or unverified third-party asset is shipped.
- The section does not materially delay initial rendering or obscure Work, Experience, or Contact.
- Responsive, accessibility, production-build, and release-verification checks pass.

## Completed

- [x] Vite local-development and production-build workflow exists.
- [x] Production build passes on `codex/experience-system-history` during workflow setup.
- [x] Current branch, audience, local-only status, and incumbent benchmark are recorded.
- [x] Slice 1 source, build, legacy-tree, and incumbent findings are recorded.
- [x] Owner-approved legacy cleanup is isolated, recoverable through Git, and build-verified.
- [x] Slice 2 responsive, interaction, and accessibility findings are recorded and release blockers fixed.
- [x] Slice 3 provides one automated release gate, a production-preview checklist, and a candidate release record.
- [x] Selected work now uses verified WAMIF, LightningJS Movies, and Cellular Automata demos, repositories, and screenshots instead of generic project links.
- [x] Search and social metadata, branded preview artwork, and favicon are locally verified; canonical production URLs remain deferred until hosting.
- [x] The obsolete course-assignment README is replaced by the current product, evidence, development, verification, and release guide.
- [x] Integrated candidate `38bd72a` passes automated and production-preview verification and has earned an owner-reviewed hosted preview.
- [x] Standalone Netlify draft deploy `6a812d492db1afb97ffa3d00` publishes tested source commit `bd7fe0a` without modifying the incumbent production site.
- [x] Selected-work cards use a balanced evidence grid, consistent media framing, and a non-confidential enterprise-system visual.
- [x] WAMIF uses a four-state, keyboard-operable product story to demonstrate GEDCOM processing, mapping, event inspection, and connected-event exploration without autoplay media.
- [x] WAMIF has a standalone, multi-page case study covering the verified problem, data pipeline, engineering decisions, working-product evidence, and explicitly deferred product work.
