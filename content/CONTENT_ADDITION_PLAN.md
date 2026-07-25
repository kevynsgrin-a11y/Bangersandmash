# Content Addition Plan — English Heritage Cookbook

**Prepared:** 2026-07-25 · **Status:** Phase 1 built, Phases 2–4 specified · **Standard:** audit-firm
protocol (`.claude/commands/site-audit.md`) — scores start at 60 and move only on cited evidence.

---

## 1. The diagnosis

The site calls itself a **British** heritage cookbook and ships a four-region filter — England,
Scotland, Wales, Northern Ireland. The content behind that promise does not exist.

| Region | Recipes | Share |
|---|---:|---:|
| England | 18 | 78% |
| Scotland + Wales + Northern Ireland **combined** | 5 | 22% |
| **Total** | **23** | |

*Source: build-job trajectory, step 176 — `listing-result-count` read "23 total recipes / 18 England"
after the last content round.*

Three of the four regions the navigation advertises are effectively empty. The last build round ended
with an explicit note that "Scotland, Wales, and Northern Ireland recipe batches" were the next
step — and then the job hit its credit limit and stopped.

**This is not a content-volume problem. It is a broken-promise problem.** A visitor who clicks
"Wales" on a site named for British heritage and lands on one or two recipes has been told the
product is a shell. Under the audit protocol that is a **P0 — the navigation makes a claim the
content cannot honour.**

### The category × region matrix

Seven categories × four regions = 28 cells a visitor can reach by filtering. England plausibly fills
its seven. The remaining 21 cells are served by five recipes, so **at least 16 filter combinations
return an empty or near-empty grid.**

Every one of those is a dead end reachable in two clicks from the homepage.

---

## 2. Prioritisation

Ranked by the audit protocol's severity ladder, not by what is easiest to write.

| Rank | Item | Severity | Why |
|---|---|---|---|
| 1 | Fill Scotland, Wales, Northern Ireland to full category coverage | **P0** | Navigation currently lies. Fixing this closes 16+ dead filter states. |
| 2 | Resolve the fabricated-ratings defect | **P0** | Every `rating`/`ratingCount` is an authored constant presented as crowd data. Violates the 100% accuracy rule. |
| 3 | Occasion collections (Burns Night, St David's Day, Christmas) | P1 | The single strongest seasonal-traffic lever a heritage cookbook has, and it is entirely absent. |
| 4 | Technique guides | P1 | Converts one-off recipe visits into repeat visits. Also the natural internal-link spine. |
| 5 | Region landing pages with real editorial | P2 | `/regions` exists but has nothing behind each region beyond a filter. |
| 6 | Ingredient glossary | P2 | Answers the questions a non-British cook actually has (neeps, caul fat, laverbread, dulse). |

---

## 3. Phase 1 — Regional completion **[BUILT]**

**32 new recipes**, taking the library from 23 to **55** and every region from broken to complete.

| Region | New | Total after | Categories covered |
|---|---:|---:|---|
| Scotland | 12 | ~14 | 7 / 7 |
| Wales | 10 | ~11 | 7 / 7 |
| Northern Ireland | 10 | ~11 | 7 / 7 |
| England | 0 | 18 | 7 / 7 |
| **Total** | **32** | **55** | **28 / 28 cells** |

Every region × category cell is filled. **No filter combination returns empty.**

### What was written

**Scotland (12)** — Cullen Skink · Scotch Broth · Haggis, Neeps & Tatties · Stovies · Scotch Pie ·
Forfar Bridie · Roast Leg of Lamb with Rowan Jelly · Cranachan · Clootie Dumpling · Scottish
Shortbread · Dundee Cake · Tattie Scones

**Wales (10)** — Cawl · Welsh Rarebit · Glamorgan Sausages · Welsh Oggie · Roast Welsh Lamb with
Honey and Rosemary · Welsh Cakes · Bara Brith · Monmouth Pudding · Faggots with Peas and Onion
Gravy · Anglesey Eggs

**Northern Ireland (10)** — Ulster Fry · Irish Stew · Champ · Boxty · Steak and Guinness Pie ·
Wheaten Bread · Fifteens · Roast Ham with Cider Glaze · Buttermilk and Apple Tart · Pea and Ham Soup

Dish selection was made on regional canon, not on search volume. Each region leads with its
genuinely defining dishes — the ones whose absence a reader from that nation would notice
immediately. Cawl is the Welsh national dish; an Ulster Fry is the one breakfast that is definitively
Northern Irish rather than pan-Irish; Cullen Skink names the Moray Firth village it came from.

### How it was produced

Six authoring agents ran in parallel, each given explicit dish assignments, the house voice
specification, and the 100% accuracy rule. Each batch then went through an **adversarial verification
agent** instructed to assume the writer was wrong until evidence said otherwise, auditing seven axes:

1. **Regional attribution** (P0) — including the traps: dishes that are pan-British, or Republic of
   Ireland rather than Northern Irish, or English with a regional name pinned on.
2. **Ingredient authenticity** (P0) — missing defining ingredients, and the specific betrayals that
   mark a fake: potato in a Forfar Bridie, yeast in soda bread, glacé cherries in a Dundee Cake.
3. **Quantity realism** (P0) — the dishes with real ratios (shortbread, pastry, meringue, soda bread)
   were checked against those ratios.
4. **Timing arithmetic** (P1) — prep and cook times honest for the method as written.
5. **Method completeness** (P1) — temperatures, rests and sensory cues present.
6. **Voice** (P1) — banned-word list enforced, British spelling, no sentence that could describe
   fifty other dishes.
7. **Schema** (P1) — field-level conformance.

The verifier returned the corrected set with defects fixed in place, plus a logged correction list.
See `VERIFICATION-LOG.md` for every defect found and what changed.

---

## 4. The ratings problem — read before shipping

The existing schema carries `rating` and `ratingCount` on every recipe. **There is no backend.** Every
one of those numbers is a constant somebody typed into `mockData.js`. A card reading "4.8 ★ (127
ratings)" is telling the visitor 127 people rated this dish. Nobody did.

Under the audit protocol's 100% accuracy rule — *"every user-facing number must trace to a formula or
a verifiable source"* — this is a **P0**, and it is the single most damaging thing on the site,
because it is the one defect that is actively dishonest rather than merely incomplete.

**I did not propagate it.** The 32 new recipes carry `editorialRating` — an explicit editors' score,
which a curated cookbook can legitimately publish — and no `ratingCount` at all.

Three ways to close it, in order of preference:

1. **Relabel to editorial.** Keep the stars, change the caption to "Editors' score". One copy change,
   the number becomes true, the visual stays. Also applies retroactively to the existing 23.
2. **Replace with editorial badges.** Drop numeric scores; use "Editor's Pick" on the `mostLoved` set.
   Cleanest, loses the star visual.
3. **Build real ratings.** Needs a backend the site does not have. Out of scope for a content round.

Do not ship the new recipes alongside the old fabricated counts without picking one — mixed honest and
dishonest data on the same grid is worse than either alone.

---

## 5. Editorial standards applied

**Voice.** Warm, editorial, magazine-grade British food writing — a well-edited heritage cookbook, not
a blog. British spelling throughout. Metric first, imperial in brackets. Banned: "delicious",
"tasty", "perfect for", "the ultimate", "game-changer", "elevate", "crowd-pleaser", "comfort food
classic", and any sentence that could describe fifty other dishes.

**Structure per recipe.** One 45–80 word story paragraph · 7–14 ingredients with real quantities and
units · 4–6 method steps carrying temperatures, times and sensory cues · one cook's note that adds
technique beyond the recipe body · 3–5 lowercase tags.

**Photography.** Every recipe carries a generation prompt written to the site's established style
directive — warm, moody, magazine lighting; burgundy and parchment palette; dish-accurate composition
with the correct vessel and garnish; shallow depth of field; no text, no hands, no branding. The
existing 23 images were produced under the same directive, so the expanded grid reads as one shoot.

**Provenance.** Every recipe carries an `authenticityNote` stating its regional basis and flagging any
detail the writer was less than certain about. This is the audit trail — flagged uncertainty is
professional, fabricated certainty is not.

---

## 6. Phases 2–4 — specified, not built

### Phase 2 — Occasion collections (P1)

A heritage cookbook that ignores the calendar is leaving its best traffic on the table. Each
collection is a curated landing page over existing recipes plus 2–4 purpose-written additions.

| Collection | Date | Anchor content |
|---|---|---|
| Burns Night | 25 January | Haggis, neeps & tatties; cranachan; shortbread; Athol Brose *(new)* |
| St David's Day | 1 March | Cawl; Welsh cakes; bara brith; Welsh lamb |
| St Patrick's Day | 17 March | Irish stew; champ; boxty; wheaten bread |
| St George's Day | 23 April | Roast beef; Yorkshire pudding |
| Christmas | December | Christmas pudding *(new)* · mince pies *(new)* · roast goose *(new)* · trifle *(new)* |
| Bonfire Night | 5 November | Parkin *(new)* · bonfire toffee *(new)* · jacket potatoes |
| Harvest & Michaelmas | Sept–Oct | Blackberry and apple; damson; game |

**~12 new recipes.** These are date-anchored, so they need to exist *before* the date, not during it.

### Phase 3 — Technique guides (P1)

Recipes answer "what do I cook". Guides answer "how does this work", and they are what turns a
one-visit site into a bookmarked one. Each guide cross-links every recipe that uses it.

- Hot water crust pastry (Scotch pie, Melton Mowbray, raised pies)
- Suet pastry and steamed puddings (spotted dick, steak & kidney, clootie dumpling)
- Soda bread chemistry — why buttermilk, why no kneading (wheaten, farls, boxty)
- Shortcrust by hand (bridies, oggies, tarts)
- Roasting and resting British joints (all Sunday Roasts)
- Gravy from the roasting tin
- Curing and brining

### Phase 4 — Reference layer (P2)

- **Region landing pages** with real editorial: what defines the nation's cooking, its larder, its
  meal rhythms. Currently `/regions` is a filter with nothing behind it.
- **Ingredient glossary** — neeps, caul fat, laverbread, dulse, pinhead oatmeal, suet, black pudding,
  Caerphilly, Arbroath smokies. The questions a non-British cook actually has.
- **Seasonal larder calendar** — what is in season, linked to recipes.

---

## 7. Definition of done

Phase 1 ships when all of the following are true:

- [ ] 32 recipes merged into `mockData.js`, `listing-result-count` reads **55**
- [ ] Every region filter returns ≥10 recipes
- [ ] Every one of the 28 region × category cells returns ≥1 recipe
- [ ] 32 images generated from the supplied prompts, saved to `public/generated/<slug>.jpg`
- [ ] Images optimised — see the note below
- [ ] The ratings defect closed by one of the three routes in §4
- [ ] Homepage "Most Loved" row includes new regional entries
- [ ] Zero console errors, zero React key warnings on the expanded grid

**Image weight warning.** The existing 23 heroes are **738–859 KB each** — unoptimised JPEGs. Adding
32 more at that weight puts roughly **44 MB of imagery** behind a listing grid. Generate at the same
quality, then convert to WebP/AVIF with `srcset` and lazy-loading before shipping. Do not let this
round double an existing performance defect.

---

## 8. What could not be done in this environment, and why

Stated plainly so nobody mistakes a blocked item for a finished one.

| Item | Status | Reason |
|---|---|---|
| Recipe content (32) | **Done** | — |
| Image generation prompts (32) | **Done** | — |
| Actual image files | **Blocked** | Needs the Gemini image pipeline; this session has no network egress. |
| Merge into `mockData.js` | **Blocked** | The source lives at `/app/frontend/` inside the Emergent container, not in this repo. Delivered as a drop-in module plus integration instructions instead. |
| Verification against the live site | **Blocked** | Egress policy denies `gastropub-table.preview.emergentagent.com` (403 on CONNECT). |

Applying any of the blocked items inside Emergent also requires credits on that account, which is
currently exhausted.

See `INTEGRATION.md` for the merge procedure.
