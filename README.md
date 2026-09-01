# English Heritage Cookbook

British regional recipe site — England, Scotland, Wales, Northern Ireland.

> **This repository does not contain the site's source code.** The application lives at
> `/app/frontend/` inside the Emergent job `gastropub-table` and has never been pushed here. This
> repo currently holds the audit tooling and the content pipeline that feed it.

**Live:** https://gastropub-table.preview.emergentagent.com/

---

## What is in here

```
.claude/                      Site Audit Firm — /site-audit orchestrator + 11 specialists
SITE_BRIEF.md                 Reconstructed site brief; every line tagged [VERIFIED] or [UNKNOWN]
content/
  CONTENT_ADDITION_PLAN.md    The plan — gap analysis, phasing, editorial standards
  recipes-expansion.js        Phase 1: 32 new recipes, drop-in module
  IMAGE_PROMPTS.md            32 photography prompts, keyed by slug
  VERIFICATION-LOG.md         Every defect the adversarial pass found and fixed
  INTEGRATION.md              How to merge into mockData.js
  validate.js                 Validation harness — run before and after merging
```

## Content pipeline

```bash
node content/validate.js       # schema, voice, coverage matrix; exits non-zero on any P0
```

Phase 1 adds **32 recipes** across Scotland, Wales and Northern Ireland, taking the library from 23 to
55 and filling all 28 region × category filter cells. Start with `content/INTEGRATION.md` §1 — the
schema is inferred and must be reconciled against the real `mockData.js` before merging.

## Audit

The Site Audit Firm is installed in `.claude/` (source:
[LiveURL-AuditAgents](https://github.com/kevynsgrin-a11y/LiveURL-AuditAgents)).

```
/site-audit https://gastropub-table.preview.emergentagent.com/ critique
```

Use `critique` rather than `full` — Phase 3 needs a repo to edit, and the source is not here. The
critique phases produce paste-ready build prompts instead.

**Requires network egress to the preview host.** Sessions running under a restrictive network policy
get a 403 on CONNECT and cannot reach the site.

## Known open defects

Carried over from the last build round, which stopped mid-refactor when its credit limit hit:

- **15 orphaned components** written but never imported into `Recipe.jsx` / `Listing.jsx` / `Navbar.jsx`
- **11 missing React hook dependencies** across five files
- **Fabricated ratings** — every `rating` / `ratingCount` is an authored constant presented as crowd
  data, on a site with no backend. See `content/CONTENT_ADDITION_PLAN.md` §4.
- **Unoptimised imagery** — hero JPEGs run 738–859 KB each

Details and provenance in `SITE_BRIEF.md`.
