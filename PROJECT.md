# Portfolio Project Brief

## Product

A personal software-engineering portfolio for Tucker Wray.

## Current product statement

The site presents Tucker as an engineer who builds complex systems that people can use. It currently includes selected work, technical breadth, professional experience, and contact links.

## Audience and conversion

- Co-primary audiences: engineering hiring managers and prospective clients.
- The experience must help hiring managers assess engineering judgment and help clients assess credibility, relevance, and ability to deliver.
- Until a more specific conversion is approved, the primary conversion is a qualified contact through the site's contact links.
- When the audiences need different evidence, preserve a clear shared narrative and make the evidence easy to scan rather than creating two disconnected sites.

## Product authority

The owner is the authority for audience, positioning, factual claims, project selection, visual direction, and publication. Agents must surface choices that materially affect these areas instead of silently deciding them.

## Known technical baseline

- Static HTML/CSS/JavaScript site built with Vite.
- `index.html` is the primary page.
- `assets/css/portfolio.css` is the primary stylesheet.
- `npm run build` produces the deployable `dist/` directory.
- The repository contains legacy and duplicated asset trees whose status is not yet established.
- `codex/experience-system-history` is the intended successor to the current `master` version, subject to verification and owner approval before merge.
- Development is local-only for now.
- The incumbent public portfolio is `https://tuckerwray.com`; the new version must earn promotion over it.

## Initial outcomes

1. Establish the canonical source and release branch.
2. Confirm that every production asset and interaction works.
3. Resolve release-blocking responsive and accessibility defects.
4. Add repeatable build and release verification.
5. Deploy a known commit and smoke-test that exact release.

## Promotion policy

Do not recommend replacing the incumbent portfolio merely because the new build is newer or more visually ambitious. At the end of each slice, report whether the candidate improved, regressed, or did not affect:

- clarity of Tucker's positioning within the first screen;
- credibility and evidence for hiring managers;
- credibility and relevance for prospective clients;
- ease of finding representative work;
- ease of initiating qualified contact;
- responsive behavior and accessibility;
- performance, reliability, and broken-link risk;
- factual accuracy and maintainability.

When comparison requires inspecting the live incumbent, use current evidence from `https://tuckerwray.com`. Distinguish observed facts from judgment. Recommend promotion only when no release-blocking regression remains and the candidate is meaningfully stronger on the highest-value criteria.

## Non-goals until explicitly approved

- A framework rewrite.
- A backend, CMS, authentication system, or database.
- New analytics or third-party tracking.
- Destructive removal of legacy files.
- Publishing unverified or inferred biographical claims.

## Decisions needed from the owner

- Whether engineering hiring managers or prospective clients should receive priority when their needs conflict.
- Whether qualified contact should remain the primary conversion after the first experience review.
- Hosting provider and production URL, when the candidate earns promotion.
- Which portfolio claims and projects are current and publicly supportable.

## Definition of ready

A slice is ready when its user outcome, acceptance criteria, non-goals, affected area, and verification method are explicit.

## Definition of done

A slice is done when its acceptance criteria are demonstrated, relevant checks pass, its diff is independently reviewed, and remaining risks are recorded.

## Definition of shipped

The intended commit is merged, that exact commit is deployed, and the production smoke test passes.
