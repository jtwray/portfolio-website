# Portfolio claim register

Status: owner review in progress

Last reviewed: 2026-08-15

Use this register to keep published claims truthful, appropriately specific, and supportable without exposing confidential information.

Status meanings:

- `supported`: public or repository evidence supports the published wording.
- `owner-confirmed`: the owner confirms the claim from direct experience; public evidence may be unavailable.
- `generalize`: the underlying experience is valid but wording should avoid confidential or weakly supportable detail.
- `pending`: do not treat the wording as approved until the owner responds.
- `remove`: inaccurate, stale, or not useful enough to publish.

## Project claims

### Shelter Gaze / ShelterHub

Status: `remove`

Decision:

- Removed from selected work at the owner's request.
- The product framing is politically ambiguous and is not useful to the owner's career positioning.
- The public README's contributor presentation conflicts with the owner's recollection of sole implementation responsibility. Do not publish an authorship claim without resolving that discrepancy.
- Retain no public-facing description unless the owner later approves a neutral, technically focused case study.

Evidence:

- Public repository: `https://github.com/jtwray/Shelter-Gaze`
- Repository README describes ShelterHub as a platform connecting migrants in NYC with safe shelters.
- `package.json` supports React, Vite, Mapbox, MapLibre, and react-map-gl.
- README names James as one of five contributors, so the portfolio says “team-built” rather than implying sole authorship.

### WAMIF

Status: `supported by owner-confirmed local source`

Published claim:

> A React and Next.js application that parses GEDCOM genealogy files into connected people and events, then maps family movement across place and time.

Evidence:

- Current local project: `C:\Users\hp\Desktop\localprojects\cursorprojects\wamif`
- Contains a GEDCOM family-tree file and GEDCOM parser integration.
- Contains React/Next.js components, file-upload parsing, connected people/event data, map-state logic, and parser/upload tests.
- Uses Mapbox and graph-oriented people/event relationships.
- The public `jtwray/wamif` repository is not the current implementation and must not be linked from the card.

Correction made:

- Restored GEDCOM parsing, graph-data, React/Next.js, and Mapbox claims from the current local source.
- Replaced the incorrect public-repository link with the contact path until the current implementation has an approved public location.

### NurtureTrack

Status: `pending`

Current claims requiring owner confirmation:

- It is a practical toddler intake and medication tracking concept.
- It was designed around fast, clear interactions.
- Next.js was used.
- “UI systems” and “product thinking” accurately characterize the work.
- The project can be linked publicly; no matching `jtwray/NurtureTrack` repository was found.

Recommended evidence: repository, demo, screenshots, design notes, or an owner-confirmed confidential/generalized description.

### ERAE Rescue

Status: `pending`

Current claims requiring owner confirmation:

- Tucker performed domain repair, Google Workspace administration, DNS validation, email migration, and website recovery.
- “Consulting / systems” accurately describes the engagement.
- The client or organization name may be published.
- A public result, reference, or sanitized case study is available.

No matching public `jtwray` repository was found. That is not evidence against consulting work; owner confirmation is appropriate.

## Employment claims

Public search did not independently substantiate the employer-specific details below. These claims should be reviewed from direct experience, resume records, contracts, performance artifacts, or safely generalized wording.

### KForce / LexisNexis

Status: `resume-supported and owner-confirmed`; confidentiality confirmation remains prudent

Confirm each item:

- Title: Software Engineer II.
- Dates: Apr 2024–Jan 2025.
- KForce, LexisNexis, multi-tenant public-safety systems, React/React Native, TypeScript, .NET/C#, T-SQL/PostgreSQL, Java, ETL, AWS, production troubleshooting, and cross-team delivery are supported by the July 2026 software-engineer resume.
- The owner directly confirms Groovy, Cypress, Cucumber, webhook workflows, and the other published technologies as accurate. They are retained as owner-confirmed experience even where the selected resume omits them.
- Cross-team delivery wording remains because it communicates the work more clearly than an isolated tooling list.
- Owner should still confirm that employer/client naming and this specificity comply with confidentiality obligations.

### USPS Click-N-Ship v2

Status: `resume-supported and owner-confirmed`

Confirm each item:

- Title: React Developer at Expedite Technology Solutions (USPS).
- Dates: May 2022–Jan 2023.
- Click-N-Ship, shipping history, searchable tables, user preferences, payment integration, persistent columns, feature delivery, React, TypeScript, React Query, Styled Components, MSW, and PayPal SDK are resume-supported.
- The owner directly confirms GraphQL, Node.js, Azure, Jenkins, Cypress, and React Testing Library as accurate. They are retained as owner-confirmed experience even where the selected resume omits them.

### Healthcare provider-search modernization

Status: `resume-supported and owner-confirmed`

Confirm each item:

- Role: React / .NET Developer at The Health Plan, Jan–Nov 2021.
- React interfaces inside C#/.NET MVC applications, provider search, API-driven workflows, address validation, geolocation, Mapbox, AWS S3, and GCP are resume-supported.
- The owner confirms the broader published technology stack, including relational-data work.
- The portfolio now uses the resume-supported employer and dates.

### Lambda School / BloomTech mentorship

Status: `owner-confirmed and workload-modeled`

Confirm each item:

- Role: Team Lead / Technical Mentor / Practicum Product Lead.
- Dates: Sep 2019–Mar 2021.
- Six cohorts, each with 8–12 direct student mentees: 48–72 direct mentees.
- Each cohort contained three four-week units: nine learning weeks and three cross-functional sprint weeks per cohort.
- Learning weeks required approximately 5–10 reviewed pull requests per student per week.
- Conservative learning-week lower bound: `6 × 8 × 9 × 5 = 2,160` reviews.
- Conservative sprint lower bound: `6 × 8 × 3 × 1 = 144` reviews.
- Defensible combined lower bound: `2,304`; the portfolio rounds down to `2,300+ code reviews delivered`.
- Modeled upper bound using 12 students and 10 learning-week reviews: `6,696`, but this is not published because it is less conservative.
- Six cohorts × three final-week build sprints = 18 cross-functional build sprints.
- The portfolio publishes `48+ direct student mentees`, the conservative lower bound.
- Two four-month product-lead engagements.
- Dates and product-lead engagements remain resume-supported; workload counts use the owner's detailed cohort model.

Calculation caveat: pull requests are counted as delivered code reviews only where the owner was responsible for reviewing the direct mentee's required project or sprint pull request. Repeat reviews and reviews for students outside the direct subgroup are excluded from the published lower bound.

## Cross-cutting claims

Status: `pending`

Confirm that these phrases fairly summarize the reviewed evidence:

- “Things I've actually built.”
- “A mix of production engineering, product work, experiments, and real-world consulting.”
- “A history of shipping systems.”
- “Production work across public safety, shipping, healthcare, and engineering mentorship.”
- “04 environments / verified scope.”
- “frontend, backend, data & cloud.”

## Next owner review

Review the KForce / LexisNexis checklist first. For each bullet, answer `confirm`, `generalize`, `remove`, or provide corrected wording. After that, proceed through USPS, healthcare, mentorship, NurtureTrack, ERAE Rescue, and the cross-cutting claims.
