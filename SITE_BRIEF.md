# SITE_BRIEF — gastropub-table.preview.emergentagent.com

> **Provenance note.** Everything below was reconstructed from the Emergent build job
> `gastropub-table` (job_id `45d462fa-7fcf-4712-a1cb-bfab4383874b`) trajectory, not from
> observing the running site — this session's egress policy blocked the host. Lines marked
> **[VERIFIED]** are quoted from build-agent tool output. Lines marked **[UNKNOWN]** must be
> resolved at Phase 0 intake before any agent scores against them. Per the 100% accuracy rule,
> do not treat this file as observation.

## Identity
- **One job:** [VERIFIED] Give a home cook an accurate, regionally-grounded British recipe they can
  cook tonight — full ingredient list with quantities, numbered method, and a cook's note.
- **Audience & moment of need:** [UNKNOWN] Not stated anywhere in the build record. Infer at intake
  and state the assumption.
- **Design system:** [VERIFIED] No named system. Warm editorial/magazine treatment on a
  burgundy/parchment palette, driven by CSS custom properties (e.g. `--muted-ink`) over Tailwind,
  with shadcn/ui primitives (`@/components/ui/breadcrumb`, toast). Exact token hex values [UNKNOWN].
- **Signature element:** [VERIFIED] The photography. Every hero is a bespoke AI-generated plate shot
  produced under one style directive, so the grid reads as a single shoot rather than stock.

## Revenue configuration
- **Display ads:** [UNKNOWN] No ad network, client ID, or slot ever appears in the build record.
  Treat as *not configured* until intake proves otherwise — do not invent IDs.
- **Affiliate programs:** [UNKNOWN] None found in the build record.
- **Partnerships:** [UNKNOWN] None found.
- **Paid tier:** [UNKNOWN] None found. A recipe index of this size is a weak candidate for a paywall;
  rule the stream STRONG/WEAK/NONE at intake before anyone proposes one.

> Revenue-congruence warning: with all four streams unevidenced, this site may currently be
> **entirely unmonetized**. That is a finding to characterize, not a gap to plug reflexively.
> There is a newsletter capture band (`NewsletterBand.jsx`) but [UNKNOWN] whether it posts anywhere.

## Data & function
- **Data sources:** [VERIFIED] Frontend-only. All recipes are hardcoded in
  `/app/frontend/src/lib/mockData.js`. No backend, no API, no database. Every rating, `ratingCount`,
  prep/cook time and `mostLoved` flag is an authored constant — under the 100% accuracy rule, ratings
  presented as if crowd-sourced are a P0 candidate.
- **Content inventory:** [VERIFIED] 23 recipes total, 18 in England, across Sunday Roasts, Regional
  Classics, Pies & Pastries, Puddings & Desserts, Breakfast, Teatime, Soups & Stews. Scotland, Wales
  and Northern Ireland were planned but never built — verify whether their region filters render
  empty states or dead links.
- **Media:** [VERIFIED] Hero images are local JPEGs at `/app/frontend/public/generated/<slug>.jpg`,
  no external URLs. **Each file is 738–859 KB.** 23 unoptimized heroes on a listing grid is a
  concrete performance lead: check for `srcset`, lazy-loading, and modern formats.
- **Known interactive features:** [VERIFIED] serves adjuster that rescales ingredient quantities
  live; category / free-text search / difficulty / time-bucket filters; "Most Loved" homepage row;
  mobile ingredients accordion; predictive search in the navbar; toast notifications.
- **Build:** [UNKNOWN] Build command, output dir, and deploy target are not in the record. React +
  react-router-dom confirmed; bundler [UNKNOWN].

## Ground rules
- **Known competitors:** [UNKNOWN] None tracked. Any category score ≥85 needs a named benchmark, so
  pick competitors at intake (BBC Good Food and Delicious. are the obvious British-recipe yardsticks).
- **Do not touch:** [UNKNOWN] No do-not-touch list was ever established.
- **Deadlines / live events:** None known.

## Open defects carried in from the last build round

These are already on the record and should be treated as **pre-existing, unfixed**, not as new
discoveries. They came from a code-quality report fed into the job at step 179; the agent began the
fix and hit its credit limit at step 181.

1. **Half-finished refactor — highest-priority thing to confirm first.** At step 180 the agent wrote
   15 new extracted components (`RecipeBreadcrumb`, `RecipeHeader`, `RecipeHero`,
   `RecipeMobileAccordion`, `ServesAdjuster`, `IngredientList`, `ListingHeader`, and more) and then
   died **before** rewiring `Recipe.jsx`, `Listing.jsx`, or `Navbar.jsx` to import any of them.
   Expect 15 orphaned, unreferenced files and zero behavioural change. Confirm nothing is
   half-imported before auditing anything downstream.
2. **11 missing React hook dependencies** — `Recipe.jsx` (5), `Listing.jsx` (2), `Navbar.jsx` (2),
   `useFilteredRecipes.js` (1), `use-toast.js` (1). Stale-closure risk.
3. **Cyclomatic complexity 13** (threshold 10) in the anonymous function at `Listing.jsx:19`.
4. **12 functions over 50 lines**, worst first: `Recipe.jsx:22` (127 lines), `Listing.jsx:19` (106),
   `FilterBar.jsx:21` (103), `Navbar.jsx:9` (79), `Footer.jsx:4` (76), `Regions.jsx:45` (76),
   `About.jsx:30` (75), `IngredientsPanel.jsx:15` (70), `MobileDrawer.jsx:13` (69),
   `NewsletterBand.jsx:6` (58), `HeroSection.jsx:9` (57), `use-toast.js:40` (52).

Note the last build round self-certified **"100% pass, zero console errors, zero design issues,
zero UI bugs"** from its own testing agent while all of the above was open. Treat that certification
as unreliable and re-derive everything from live observation.

## Suggested Phase 0 coverage set

Once the host is reachable, these are the candidate representative pages — confirm against the real
nav before locking them in:

| Role | Candidate URL |
|---|---|
| Homepage / hero + Most Loved | `/` |
| Core-function page (filters, grid) | `/recipes` |
| Region-filtered listing | `/recipes?region=england` **[VERIFIED live in build]** |
| Content leaf (the namesake) | Bangers & Mash recipe page |
| Empty-state probe | a Scotland / Wales / N. Ireland region filter |
| Secondary content | `/regions`, `/about` |

There is no pricing or tier page to cover.
