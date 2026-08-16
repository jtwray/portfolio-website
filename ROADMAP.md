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

- [ ] Decide whether the local candidate has earned a hosted preview.
- [ ] Select hosting only after that decision.
- [ ] Publish a preview of the release candidate.
- [ ] Review the integrated diff and preview.
- [ ] Obtain owner approval to merge and deploy.
- [ ] Confirm the deployed commit and run the production smoke test.

Acceptance criteria:

- Preview and production results are recorded.
- The deployed version corresponds to the approved commit.
- Primary navigation, work, experience, and contact flows pass in production.

## Next

- Strengthen project case-study evidence and external links.
- Improve metadata, social sharing, and discoverability.
- Replace the legacy README with current contributor and release instructions.

## Later

- Consider analytics only after defining a measurement question and privacy policy.
- Consider richer interactions only when they improve the primary conversion goal.

## Completed

- [x] Vite local-development and production-build workflow exists.
- [x] Production build passes on `codex/experience-system-history` during workflow setup.
- [x] Current branch, audience, local-only status, and incumbent benchmark are recorded.
- [x] Slice 1 source, build, legacy-tree, and incumbent findings are recorded.
- [x] Owner-approved legacy cleanup is isolated, recoverable through Git, and build-verified.
- [x] Slice 2 responsive, interaction, and accessibility findings are recorded and release blockers fixed.
- [x] Slice 3 provides one automated release gate, a production-preview checklist, and a candidate release record.
