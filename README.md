# Tucker Wray portfolio

A static software-engineering portfolio for Tucker Wray. The site is designed for two primary audiences: engineering hiring managers evaluating technical judgment and prospective clients evaluating relevance and delivery credibility.

The current candidate is local-only. It must earn promotion over the incumbent at `https://tuckerwray.com`; this repository does not imply authorization to merge, host, or deploy it.

## Product scope

The portfolio presents:

- evidence-backed selected work with direct demos and source links;
- engineering breadth across interface, application, data, cloud, quality, and delivery;
- resume-supported professional experience;
- separate contact paths for employment opportunities and project inquiries.

The canonical product brief is [`PROJECT.md`](PROJECT.md). Current delivery state and planned slices live in [`ROADMAP.md`](ROADMAP.md).

## Technical shape

- Static HTML, CSS, and JavaScript
- Vite development server and production build
- No framework runtime, backend, database, analytics, or third-party tracking
- Deployable output generated in `dist/`

Canonical release source:

- `index.html` — document content and page behavior
- `assets/css/portfolio.css` — visual system and responsive behavior
- `assets/images/` — source-controlled interface and project artwork
- `public/` — files that must retain stable root-relative production paths
- `scripts/check-static.mjs` — dependency-free release integrity checks

## Local development

Use a current Node.js LTS release and install the locked dependency tree:

```powershell
npm ci
```

Start the development server:

```powershell
npm run dev
```

Open the local URL printed by Vite. Source changes update automatically.

## Verification

Run the complete automated release gate:

```powershell
npm run verify
```

This command checks required source and public files, local references, internal anchors, unique IDs, baseline semantics, metadata, image alternative text, social-preview assets, and the qualified email path. It then creates the production build.

Preview that exact build with:

```powershell
npm run preview
```

The required browser smoke test is documented in [`docs/RELEASE_WORKFLOW.md`](docs/RELEASE_WORKFLOW.md). A passing build alone is not proof that responsive layout, keyboard interaction, external evidence, or contact paths work.

## Evidence and editorial policy

Do not invent or infer professional history, metrics, ownership, client outcomes, or technology usage.

- Published-claim status and supporting sources live in [`docs/claims/CLAIM_REGISTER.md`](docs/claims/CLAIM_REGISTER.md).
- Employer claims should be checked against the resume and owner confirmation.
- Project cards should link to the strongest verified demo, source, or sanitized case study.
- Confidential work must remain appropriately generalized.
- Unverified projects may remain local or planned but should not be represented as public evidence.

## Git and delivery workflow

1. Read `PROJECT.md`, `ROADMAP.md`, `AGENTS.md`, and current Git state.
2. Select one outcome-oriented slice with explicit acceptance criteria and non-goals.
3. Implement on a short-lived branch or isolated worktree.
4. Review the integrated diff and run `npm run verify`.
5. Exercise affected behavior in the production preview.
6. Record remaining risks and candidate-versus-incumbent impact.
7. Commit a cohesive, reviewable change.
8. Obtain owner approval before merge, push, hosting changes, or deployment.

Repository-specific agent and review safeguards are defined in [`AGENTS.md`](AGENTS.md).

## Release states

- **Implemented** — code changed; review or verification may remain.
- **Verified** — acceptance criteria have supporting evidence and required checks pass.
- **Ready to ship** — the integrated candidate has passed production-preview review and has a complete release record.
- **Shipped** — the owner-approved commit is deployed and that exact production release passes smoke testing.

Use [`docs/releases/TEMPLATE.md`](docs/releases/TEMPLATE.md) for each candidate release. Hosting provider, public origin, canonical URL, and production rollback procedure remain deliberately unset until the owner approves a hosted preview.

## License

See [`LICENSE.txt`](LICENSE.txt).
