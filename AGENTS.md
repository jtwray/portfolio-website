# Agent Operating Policy

These instructions apply to all work in this repository.

## Authority and roles

- The owner is product owner and release authority.
- The primary agent is the delivery orchestrator.
- The orchestrator may delegate bounded work to an implementer, experience reviewer, and release verifier.
- Delegation is optional. Do not create agent work merely to fill roles.

## Required workflow

1. Read `PROJECT.md`, `ROADMAP.md`, and the current Git state.
2. Select one approved vertical slice.
3. State its outcome, acceptance criteria, non-goals, risks, and verification.
4. Ask the owner only about choices that materially affect product behavior, claims, UX, privacy, architecture, cost, cleanup, or release.
5. Implement on a short-lived outcome branch or isolated worktree.
6. Review the diff against the approved scope.
7. Run the relevant checks and production build.
8. Record remaining risks and release evidence.
9. Complete the candidate-versus-incumbent promotion scorecard.
10. Obtain explicit approval before destructive cleanup, merge, push, hosting setup, or production deployment.

## Delegation rules

- Use one orchestrator as the integrator and source of delivery state.
- Give every delegated task a concrete output, allowed scope, acceptance criteria, verification, and stopping condition.
- Do not let multiple agents edit `index.html` concurrently.
- Use separate branches/worktrees for concurrent writers.
- Prefer parallel work only when file ownership and interfaces are independent.
- A reviewer should begin from the brief, acceptance criteria, and diff rather than the implementer's rationale.
- The orchestrator must inspect returned work; agent self-report is not verification.
- Run integrated checks after combining any delegated changes.

## Repository safeguards

- Preserve unrelated user changes.
- Do not delete or relocate legacy/duplicate assets until their references are audited and the owner approves the exact targets.
- Do not rewrite the stack without an approved product or technical reason.
- Do not invent professional history, metrics, client claims, or project outcomes.
- Keep `main` releasable.
- Never force-push or use destructive Git recovery commands without explicit instruction.

## Verification baseline

At minimum for code changes:

- Inspect `git diff` and `git status`.
- Run `npm run build`.
- Verify the affected behavior in a running preview when behavior or appearance changes.
- Check relevant responsive, keyboard, and failure states.

Passing the build alone is not proof that the experience works.

## Promotion advice

- Treat `https://tuckerwray.com` as the incumbent product and the local branch as the candidate.
- At each completed slice, explain which promotion criteria improved, regressed, or remain untested.
- Use current observed evidence before making claims about the live incumbent.
- Separate objective findings (broken link, measured load, missing accessible name) from subjective judgment (stronger narrative, more distinctive presentation).
- Do not recommend replacement while a release-blocking regression remains.
- Hosting and deployment remain owner decisions even if the candidate earns a recommendation.

## Completion language

- `Implemented`: code changed, but review or verification may remain.
- `Verified`: acceptance criteria have evidence and checks pass.
- `Ready to ship`: integrated candidate is reviewed and has a release record.
- `Shipped`: the approved commit is deployed and production smoke-tested.
