# Local release workflow

The owner remains the release authority. These steps prepare and verify a candidate; they do not authorize merge, hosting, or deployment.

## Automated gate

From the repository root, install the locked dependencies once with `npm ci`, then run:

```powershell
npm run verify
```

The command checks required source files, referenced local assets, internal anchors, unique IDs, baseline document semantics, image alternative text, and the qualified email path. It then creates the production build in `dist/`. Any failed check exits non-zero.

## Local production preview

After the gate passes, start the built candidate:

```powershell
npm run preview
```

Open the local URL printed by Vite. Verify the built output rather than relying only on the development server.

## Manual smoke test

Test at narrow mobile, tablet, laptop, and wide desktop widths.

1. Confirm the first screen identifies Tucker as a software engineer and provides a path to representative work.
2. Follow Work, Stack, Experience, and Contact from the fixed navigation. Confirm each heading is visible below the header.
3. Open every experience disclosure with pointer and keyboard.
4. In the engineering-system control, use Tab to enter the selected tab and Left/Right Arrow to change layers. Confirm focus, selected state, and detail content move together.
5. Inspect each project destination. Do not claim a specific repository or case study unless the destination supports it.
6. Inspect both contact destinations and confirm the role and project subject lines differ. Launching the mail client is optional and environment-dependent.
7. Confirm focus indicators remain visible throughout a keyboard-only pass.
8. Confirm the page does not scroll horizontally and content remains readable at each width.
9. With reduced motion enabled, confirm reveal, flow, and detail animations do not run.
10. Confirm the browser console has no errors or warnings caused by the site.

Stop the preview with `Ctrl+C` when the review is complete.

## Release record

Copy `docs/releases/TEMPLATE.md` to a dated file. Record the tested code commit, automated command output, manual evidence, accepted risks, previous known-good commit, and rollback approach. A documentation-only release-record commit may follow the tested code commit; name both when that happens.

The candidate becomes **ready to ship** only after the integrated diff is reviewed, `npm run verify` passes, the production preview passes the smoke test, and the release record is complete. It becomes **shipped** only after the owner approves deployment and the exact deployed commit passes a production smoke test.
