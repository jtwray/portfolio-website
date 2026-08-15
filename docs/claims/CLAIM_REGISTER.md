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

Status: `supported`

Published claim:

> A team-built mapping experience designed to help migrants in New York City find nearby shelters and essential location information.

Evidence:

- Public repository: `https://github.com/jtwray/Shelter-Gaze`
- Repository README describes ShelterHub as a platform connecting migrants in NYC with safe shelters.
- `package.json` supports React, Vite, Mapbox, MapLibre, and react-map-gl.
- README names James as one of five contributors, so the portfolio says “team-built” rather than implying sole authorship.

Correction made:

- Replaced the inaccurate animal-shelter description.
- Removed unsupported Node/PostgreSQL tags.
- Added a direct repository link.

### WAMIF

Status: `supported`, deliberately narrow

Published claim:

> Watch Familial Migration Interface—an early exploration of how family migration could be made easier to follow visually.

Evidence:

- Public repository: `https://github.com/jtwray/wamif`
- README expands WAMIF as “Watch Familial Migration InterFace.”
- The repository does not currently provide code or documentation supporting GEDCOM, React, graph-data, or implemented mapping claims.

Correction made:

- Removed unsupported technology and implementation claims.
- Added a direct repository link.

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

Status: `pending`

Confirm each item:

- Title: Software Engineer II.
- Dates: 2024–2025.
- Context may be described as LexisNexis public-safety systems.
- Work covered multi-tenant web and mobile applications.
- React and React Native product development.
- ETL and webhook workflow support.
- Production fixes and regression testing.
- Cross-stack onboarding documentation.
- Technology exposure: TypeScript, C#/.NET, Java/Groovy, Node.js, PostgreSQL/T-SQL, AWS, Cypress, and Cucumber.
- Employer/client naming and this level of technical specificity do not violate confidentiality obligations.

### USPS Click-N-Ship v2

Status: `pending`

Confirm each item:

- Title: React Developer.
- Dates: 2022–2023.
- The product may be named publicly.
- Work included shipping history, multiple profiles, cart behavior, payments, persistent table columns, and feature-flagged delivery.
- Technology exposure: React, TypeScript, React Query, GraphQL, Node.js, Azure, Jenkins, Cypress, and React Testing Library.
- The current wording does not imply sole ownership of team-delivered capabilities.

### Healthcare provider-search modernization

Status: `pending`

Confirm each item:

- Work involved provider-search applications.
- React interfaces operated within existing .NET MVC systems.
- Work involved API-driven search and large provider datasets.
- Technology exposure: React, JavaScript, C#, .NET MVC, REST APIs, and relational data.
- Keeping the employer/client unnamed is intentional and sufficient for confidentiality.

### Lambda School / BloomTech mentorship

Status: `pending`

Confirm each item:

- Role can be described as Engineering Mentor.
- Dates: 2019–2020.
- 1,600+ one-on-one code reviews.
- 42+ junior developers mentored.
- 20+ team sprints supported.
- Two long-form Labs projects.
- “Lambda School / BloomTech” is the clearest historically accurate naming.

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
