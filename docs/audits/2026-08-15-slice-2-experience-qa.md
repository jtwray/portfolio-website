# Slice 2 experience and accessibility audit

Status: complete

Date: 2026-08-15

Candidate branch: `codex/experience-system-history`

## Scope and method

The local Vite candidate was reviewed in the in-app browser at 375×812, 768×1024, 1024×768, 1440×900, and 1920×1080. The review covered responsive bounds, primary navigation, internal anchors, project and contact destinations, heading and landmark structure, native experience disclosures, system-map controls, keyboard focus, reduced-motion CSS, and browser console output.

The review verified link destinations without launching external sites or the operating system's mail client. Contrast was reviewed visually rather than measured with an automated contrast engine; automated accessibility testing remains part of Slice 3.

## Confirmed findings and fixes

### Mobile section navigation was unavailable

At widths below 850px, CSS set `.navlinks` to `display: none` and provided no replacement. Mobile visitors could not directly navigate to Work, Stack, Experience, or Contact.

Fixed by retaining the four compact navigation links in a horizontally safe row. At 375px all links are visible, the document has no horizontal overflow, and the fixed header remains one line tall.

### Tab semantics had an oversized keyboard sequence

The engineering-system control used `role="tablist"` and supported Left/Right Arrow selection, but all five tabs remained in the page's ordinary Tab sequence. The shared detail region also lacked an explicit tab-panel relationship.

Fixed with roving `tabindex`, stable tab IDs, `aria-controls`, `role="tabpanel"`, and a dynamically updated `aria-labelledby`. Keyboard retest confirmed Right Arrow moves focus and selection from UI to Application, updates the detail content, and leaves only the selected tab in the ordinary Tab sequence.

### Focus visibility and anchor positioning were inconsistent

The specialized system controls and experience summaries had focus styles, but ordinary links and buttons relied on browser defaults. Fixed-header anchor destinations also had no explicit offset.

Fixed with a consistent high-visibility `:focus-visible` treatment for links, buttons, and summaries, plus an 88px `scroll-margin-top` for ID targets.

## Verification results

- No horizontal document overflow at 375px, 768px, 1024px, 1440px, or 1920px.
- All four fixed-header navigation links remain visible at the narrowest viewport.
- One `h1` and a logical `h2`/`h3` hierarchy are present.
- Navigation, main content, sections, and footer use native landmarks and structure.
- Experience entries use keyboard-operable native `details` and `summary` elements.
- System-map tabs expose selected state and valid tab/panel relationships; node and quality controls remain ordinary named buttons.
- Every internal fragment link resolves to a present target.
- Both audience-specific contact actions use explicit `mailto:` subjects.
- Project and social links have non-empty accessible names and syntactically valid destinations.
- Reduced-motion styles disable smooth scrolling, reveal transitions, flow animation, detail-item animation, and node transitions.
- The browser console reported no warnings or errors during the local review.
- `npm run build` passes with Vite 7.3.6.
- `git diff --check` passes.

## Accepted limitations and follow-up

- WAMIF and the enterprise card intentionally route to Contact until publishable case-study or repository evidence is available.
- NurtureTrack and ERAE Rescue still route to the generic GitHub profile rather than specific proof. This remains the largest representative-work discovery weakness.
- Mail links were destination-checked but not launched, avoiding an external side effect.
- Automated accessibility, internal-anchor, and required-asset checks belong in Slice 3.
- A measured color-contrast audit should be included in Slice 3 rather than inferred solely from visual inspection.

## Candidate-versus-incumbent scorecard

- Responsive navigation: **candidate now stronger**. The candidate exposes every primary section at mobile through desktop sizes with no horizontal overflow.
- Keyboard and motion support: **candidate stronger**. Interactive controls have explicit keyboard behavior, visible focus, semantic state, and reduced-motion handling.
- Runtime reliability: **candidate stronger in local verification**. The candidate emitted no browser errors and built successfully; the incumbent previously logged JavaScript errors.
- Representative-work proof: **incumbent still stronger**. It exposes more specific demos and repositories, while several candidate cards still route to Contact or a generic GitHub profile.
- Contact reliability: **candidate simpler and lower risk**, with two explicit email paths; actual mail-client launch remains user/environment dependent.

Promotion recommendation: **continue toward a local release candidate, but do not replace the incumbent yet**. The responsive and accessibility baseline is credible. Slice 3 should automate release checks, and the next content slice should replace generic project destinations with specific evidence before a hosted-preview decision.
