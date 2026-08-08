# Integration Guide — merging the Phase 1 expansion

How to get the 32 new recipes into the running site. Read §1 first — it contains the one thing that
can waste your time.

---

## 1. The schema is INFERRED — reconcile it before you merge

**This is the highest-risk step. Do it first.**

I never had access to `mockData.js`. This session's egress policy blocks the Emergent host, and the
source was never pushed to this repo. The field names below were reconstructed from build-job
trajectory fragments — tool output quoting field names, filter behaviour, and the code-review report.

**Verified from the trajectory:**

- File is `/app/frontend/src/lib/mockData.js`
- The exported array is referenced as `RECIPES` (named in `useFilteredRecipes.js`'s dependency list)
- A `TIME_BUCKETS` constant exists alongside it, with a bucket labelled `"Over 2 hrs"`
- Field names appearing verbatim in build output: `prep`, `cook`, `serves`, `difficulty`, `rating`,
  `ratingCount`, `mostLoved`, plus tags, a story paragraph, ingredients, method, and cook's notes
- Images resolve to `/generated/<slug>.jpg` under `public/`
- `region` filters on values like `england` (from the live URL `/recipes?region=england`)
- Categories: Sunday Roasts · Regional Classics · Pies & Pastries · Puddings & Desserts · Breakfast ·
  Teatime · Soups & Stews
- Difficulties: Easy · Intermediate · Advanced

**Not verified — assume these differ:**

- Exact key spellings (`prep` vs `prepMinutes`, `cooksNote` vs `notes`, `story` vs `intro`)
- Whether times are integers, strings, or pre-formatted (`"55 min"`)
- Whether `region` is stored lowercase (`"scotland"`) or title case (`"Scotland"`)
- The ingredient object shape — I used `{quantity, unit, item}`; it may be a flat string array
- Whether `image` is a stored field or derived from `slug`

### Reconciliation procedure

```bash
# 1. Open the real file and read ONE existing recipe object in full.
#    That single object is the contract. Everything below adapts to it.
head -80 /app/frontend/src/lib/mockData.js
```

Then run the adapter in `recipes-expansion.js` (bottom of the file) with the real key names filled
in. It is a pure mapping function — change the right-hand side of each line to match, and it emits
objects in the site's exact shape. **Do not hand-edit 32 recipes.**

Sanity check before merging: `node -e "require('./recipes-expansion.js')"` should parse clean, and the
adapter output for one recipe should be diff-comparable against a real `mockData.js` entry.

---

## 2. Merge

```js
// mockData.js
import { toSiteShape } from "./recipes-expansion";

export const RECIPES = [
  ...EXISTING_RECIPES,
  ...toSiteShape(),
];
```

**Merge `toSiteShape()`, not `EXPANSION_RECIPES`.** The raw array carries the authoring schema —
`prepMinutes`, `cookMinutes`, `cooksNote`, `editorialRating`. The site reads `prep`, `cook`, `notes`
and `rating`. Spreading the raw array compiles and renders, and every one of the 32 new cards comes
up with no time, no cook's note and no rating, because the fields it looks for are not there under
those names. Reconcile the adapter against the real `mockData.js` first (§1) — that is what the
adapter is for.

Or paste the adapted objects directly into the existing array if the project avoids extra modules.
Either is fine; the module keeps the diff reviewable.

**Check after merge:**

- `listing-result-count` reads **55**
- `/recipes?region=scotland` → 12+ · `?region=wales` → 10+ · `?region=northern-ireland` → 10+
- Every category filter within each region returns ≥1
- No duplicate slugs **in the merged array**. Checking this module on its own
  cannot detect the collision the merge actually introduces — a new slug that
  matches one of the existing 23. Pass the real library's slugs in:

  ```bash
  node -e '
    import("./validate.js").then(async ({ collisions }) => {
      const { EXPANSION_RECIPES } = await import("./recipes-expansion.js");
      const existing = [/* paste the slugs already in mockData.js */];
      const hits = collisions(existing, EXPANSION_RECIPES);
      console.log(hits.length ? "COLLISION: " + hits.join(", ") : "OK");
    })'
  ```

  A collision does not throw. It leaves two cards competing for one
  `/generated/<slug>.jpg` and a recipe route that resolves to whichever object
  the filter reaches first — a silent failure that looks like nothing is wrong.

**Watch the region value.** If the site stores `region` lowercase-hyphenated, "Northern Ireland" must
become `northern-ireland` or all ten recipes vanish from the filter while still appearing in the
grid — a silent failure that looks like nothing is wrong.

---

## 3. Images

Every recipe carries an `imagePrompt` written to the site's established style directive. The existing
pipeline is `/app/scripts/generate_images.py` (Gemini "Nano Banana"), which already accepts
`--only <slug,slug,...>` and writes to `/app/frontend/public/generated/<slug>.jpg`.

```bash
python3 scripts/generate_images.py --only cullen-skink,scotch-broth,... --concurrency 4
```

Append the 32 prompts to that script's prompt map first — `IMAGE_PROMPTS.md` lists them keyed by
slug, ready to paste.

### Optimise before shipping — this matters

The existing 23 heroes are **738–859 KB each**. Thirty-two more at that weight is roughly **44 MB of
imagery** behind a listing grid, and it will dominate every performance metric the site has.

```bash
# generate at full quality, then:
for f in public/generated/*.jpg; do
  cwebp -q 82 "$f" -o "${f%.jpg}.webp"
done
```

Then serve with `srcset` and `loading="lazy"` on the listing grid. Hero images on recipe pages can
stay eager. Doing this for the new 32 and not the existing 23 leaves the problem half-fixed — do all
55 in one pass.

---

## 4. Ratings — decide before shipping

The new recipes carry `editorialRating` and **no `ratingCount`**, deliberately. The existing 23 carry
fabricated `rating` + `ratingCount` pairs that present authored constants as crowd data.

If you merge as-is without deciding, the grid shows some cards with review counts and some without,
which reads as broken rather than principled.

**Recommended:** relabel site-wide to "Editors' score", map `editorialRating` → `rating`, and drop
`ratingCount` from the card component. One copy change plus one deleted element, and every number on
the site becomes true. Full reasoning in `CONTENT_ADDITION_PLAN.md` §4.

---

## 5. Suggested order

1. Reconcile schema against the real `mockData.js` (§1)
2. Run the adapter, merge, confirm counts and filters (§2)
3. Make the ratings decision and apply it across all 55 (§4)
4. Generate the 32 images (§3)
5. Convert all 55 to WebP, add `srcset` + lazy-loading (§3)
6. Regression-test filters, Most Loved row, serves adjuster, mobile accordion

Steps 1–2 are the merge. Steps 3–5 are the ones that decide whether it looks professional.

---

## 6. While you are in there

Two defects from the last build round are still open and sit in the files this merge touches:

- **15 orphaned components.** The previous job wrote `RecipeBreadcrumb`, `RecipeHeader`, `RecipeHero`,
  `RecipeMobileAccordion`, `ServesAdjuster`, `IngredientList`, `ListingHeader` and more, then hit its
  credit limit before importing any of them. Either finish the extraction or delete the files —
  leaving them is dead weight that will confuse the next person.
- **11 missing React hook dependencies** — `Recipe.jsx` (5), `Listing.jsx` (2), `Navbar.jsx` (2),
  `useFilteredRecipes.js` (1), `use-toast.js` (1).

`useFilteredRecipes.js` is directly in the path of this change — it is what filters the array you are
about to more than double.
