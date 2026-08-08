#!/usr/bin/env node
/**
 * Validation harness for the Phase 1 regional expansion.
 *
 *   node content/validate.js
 *
 * Checks the expansion module against the editorial standards in
 * CONTENT_ADDITION_PLAN.md §5 and the coverage contract in §3. Exits non-zero on
 * any P0. Run this before merging into mockData.js, and again after.
 */

import { EXPANSION_RECIPES } from "./recipes-expansion.js";

const CATEGORIES = [
  "Sunday Roasts",
  "Regional Classics",
  "Pies & Pastries",
  "Puddings & Desserts",
  "Breakfast",
  "Teatime",
  "Soups & Stews",
];
const REGIONS = ["Scotland", "Wales", "Northern Ireland"];
const DIFFICULTIES = ["Easy", "Intermediate", "Advanced"];

// Words banned by the house voice spec. Presence is a P1 — it means the voice
// drifted toward generic food-blog register.
const BANNED = [
  "delicious", "tasty", "yummy", "perfect for", "the ultimate", "game-changer",
  "game changer", "elevate", "crowd-pleaser", "crowd pleaser", "comfort food classic",
];

// American SPELLINGS. These are never correct in British copy, so they are
// flagged wherever they appear.
const SPELLINGS = [
  ["flavor", "flavour"], ["color", "colour"],
  ["caramelize", "caramelise"], ["carameliz", "caramelis"],
];

// American VOCABULARY. Unlike a spelling, a word can be the correct regional
// term — "scallion" is standard Ulster English, and Champ is definitionally a
// scallion dish. The corpus handles this properly by glossing it against the
// standard British term, both as a parenthetical ("spring onions (scallions in
// Ulster)") and as a definition ("scallion is the local word for spring
// onion"). So flag these only where the term appears in a sentence that does
// NOT also carry the British equivalent — which still catches the writer who
// reaches for the Americanism on its own.
const VOCABULARY = [
  ["broil", "grill"], ["skillet", "frying pan"],
  ["scallion", "spring onion"], ["confectioners sugar", "icing sugar"],
];

/** Split prose into sentences so a gloss is judged in its own context. */
const sentences = (s) => String(s || "").split(/(?<=[.!?])\s+/);

export const words = (s) => String(s || "").trim().split(/\s+/).filter(Boolean).length;
export const slugify = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * Slugs in `recipes` that already exist in the site's library.
 *
 * The duplicate-slug check inside validate() only sees this module, so it is
 * blind to the one collision the merge can actually introduce: a new slug that
 * matches one of the recipes already in mockData.js. A collision there does not
 * throw — it produces two cards competing for one /generated/<slug>.jpg and a
 * route that resolves to whichever object the filter happens to reach first.
 *
 *   collisions(existingSlugs, EXPANSION_RECIPES)  // -> [] when safe
 */
export function collisions(existingSlugs, recipes = []) {
  const existing = new Set(existingSlugs || []);
  return recipes.map((r) => r.slug).filter((s) => existing.has(s));
}

/**
 * Run every check against a recipe array and return the findings.
 *
 * Pure: no console output, no process.exit. The CLI block at the bottom of this
 * file renders the result. Split out so the harness itself can be tested — see
 * validate.test.js.
 */
export function validate(recipes) {
  const p0 = [];
  const p1 = [];
  const p2 = [];
  const fail = (bucket, slug, msg) => bucket.push(`${slug || "(no slug)"} — ${msg}`);

  if (!Array.isArray(recipes)) {
    fail(p0, "(global)", "EXPANSION_RECIPES is not an array");
    return { p0, p1, p2, matrix: {}, fatal: true };
  }

// ---------------------------------------------------------------- per-recipe
for (const r of recipes) {
  const s = r.slug;

  for (const f of [
    "slug", "title", "region", "category", "difficulty", "prepMinutes",
    "cookMinutes", "serves", "tags", "story", "ingredients", "method",
    "cooksNote", "editorialRating", "imagePrompt", "authenticityNote",
    "image",
  ]) {
    if (r[f] === undefined || r[f] === null || r[f] === "") fail(p0, s, `missing required field: ${f}`);
  }

  // The hero is the site's signature element and resolves purely by slug. A
  // path that drifts from its slug 404s in the grid with no other symptom.
  if (r.image && s && r.image !== `/generated/${s}.jpg`) {
    fail(p0, s, `image path does not match slug (expected "/generated/${s}.jpg", got "${r.image}")`);
  }

  if (!REGIONS.includes(r.region)) fail(p0, s, `region not recognised: "${r.region}"`);
  if (!CATEGORIES.includes(r.category)) fail(p0, s, `category not in the seven: "${r.category}"`);
  if (!DIFFICULTIES.includes(r.difficulty)) fail(p1, s, `difficulty not recognised: "${r.difficulty}"`);

  // Fabricated crowd data must not reappear. This is the §4 defect.
  if ("ratingCount" in r) fail(p0, s, "carries ratingCount — fabricated crowd data, see plan §4");

  const ing = r.ingredients || [];
  if (ing.length < 7 || ing.length > 14) fail(p1, s, `ingredients out of range: ${ing.length} (want 7-14)`);
  ing.forEach((i, n) => {
    if (!i || typeof i !== "object") return fail(p0, s, `ingredient ${n} is not an object`);
    if (!i.item) fail(p0, s, `ingredient ${n} has no item`);
    if (i.quantity === undefined) fail(p1, s, `ingredient ${n} ("${i.item}") has no quantity`);
  });

  const m = r.method || [];
  if (m.length < 4 || m.length > 6) fail(p1, s, `method steps out of range: ${m.length} (want 4-6)`);
  m.forEach((step, n) => {
    if (words(step) < 12) fail(p1, s, `method step ${n + 1} is ${words(step)} words — too thin to follow`);
  });

  const sw = words(r.story);
  if (sw < 45 || sw > 80) fail(p1, s, `story is ${sw} words (want 45-80)`);

  if (words(r.cooksNote) < 10) fail(p1, s, "cooksNote is too short to carry a real tip");

  const ip = words(r.imagePrompt);
  if (ip < 55 || ip > 130) fail(p2, s, `imagePrompt is ${ip} words (want 55-130)`);

  const tags = r.tags || [];
  if (tags.length < 3 || tags.length > 5) fail(p2, s, `tags out of range: ${tags.length} (want 3-5)`);
  tags.forEach((t) => {
    if (t !== String(t).toLowerCase()) fail(p2, s, `tag not lowercase: "${t}"`);
  });

  // Numbers must be numbers. "20" > 0 is true and typeof "4.8" === "number" is
  // false, so a string-typed field slipped past the range checks below AND
  // skipped the rating band entirely. That is not hypothetical: INTEGRATION.md
  // warns the site may store times as strings, and the adapter's own worked
  // example (`prep: `${r.prepMinutes} min``) produces exactly that.
  for (const f of ["prepMinutes", "cookMinutes", "serves", "editorialRating"]) {
    if (r[f] !== undefined && typeof r[f] !== "number") {
      fail(p1, s, `${f} is ${typeof r[f]} "${r[f]}", not a number — range checks cannot run on it`);
    }
  }

  if (typeof r.editorialRating === "number") {
    if (r.editorialRating < 4.0 || r.editorialRating > 5.0) {
      fail(p1, s, `editorialRating out of band: ${r.editorialRating} (want 4.0-5.0)`);
    }
  }

  if (!(r.prepMinutes > 0)) fail(p1, s, `prepMinutes not positive: ${r.prepMinutes}`);
  if (!(r.cookMinutes >= 0)) fail(p1, s, `cookMinutes invalid: ${r.cookMinutes}`);
  if (!(r.serves > 0)) fail(p1, s, `serves not positive: ${r.serves}`);

  if (s && r.title && s !== slugify(r.title)) {
    fail(p2, s, `slug does not derive from title (expected "${slugify(r.title)}")`);
  }

  // Voice enforcement across every field a reader actually sees. authenticityNote
  // is the provenance audit trail the plan calls non-negotiable (§5) and is the
  // longest prose field on most recipes; leaving it out meant the house voice was
  // unenforced on roughly a third of the words that ship.
  const prose = [
    r.story,
    r.cooksNote,
    r.authenticityNote,
    r.title,
    ...(r.tags || []),
    ...(r.method || []),
    ...(r.ingredients || []).map((i) => (i && i.item) || ""),
  ].join(" ").toLowerCase();
  BANNED.forEach((b) => {
    if (prose.includes(b)) fail(p1, s, `banned phrase in prose: "${b}"`);
  });
  SPELLINGS.forEach(([bad, good]) => {
    if (prose.includes(bad)) fail(p1, s, `American spelling "${bad}" — use "${good}"`);
  });
  VOCABULARY.forEach(([bad, good]) => {
    const ungloss = sentences(prose).some((x) => x.includes(bad) && !x.includes(good));
    if (ungloss) fail(p1, s, `American term "${bad}" used without the British term "${good}"`);
  });
}

// ------------------------------------------------------------------ global
const slugs = recipes.map((r) => r.slug);
const dupes = slugs.filter((x, i) => slugs.indexOf(x) !== i);
if (dupes.length) fail(p0, "(global)", `duplicate slugs: ${[...new Set(dupes)].join(", ")}`);

// Check titles before slugs get blamed for them. Two recipes sharing a title
// cannot both derive their slug from it, so the per-recipe slug check fires and
// names the slug — and following that advice produces a duplicate slug and a
// broken image path. Report the actual cause instead.
const titles = recipes.map((r) => r.title);
const dupeTitles = titles.filter((x, i) => x && titles.indexOf(x) !== i);
if (dupeTitles.length) {
  fail(p0, "(global)", `duplicate titles: ${[...new Set(dupeTitles)].join(", ")} — rename the title, not the slug`);
}

// The coverage contract: every region x category cell must be non-empty, or a
// filter combination reachable in two clicks returns nothing.
const matrix = {};
for (const region of REGIONS) {
  matrix[region] = {};
  for (const cat of CATEGORIES) {
    matrix[region][cat] = recipes.filter(
      (r) => r.region === region && r.category === cat
    ).length;
  }
}

for (const region of REGIONS) {
  for (const cat of CATEGORIES) {
    if (!matrix[region][cat]) fail(p0, "(coverage)", `${region} x ${cat} is EMPTY — dead filter state`);
  }
}

  return { p0, p1, p2, matrix, fatal: false };
}

// --------------------------------------------------------------------- CLI
/** Render a result to stdout exactly as this harness always has. */
export function report(recipes, result) {
  const { p0, p1, p2, matrix } = result;
  const pad = (s, n) => String(s).padEnd(n);

  console.log("\nRegion x category coverage\n");
  console.log(pad("", 22) + REGIONS.map((r) => pad(r, 18)).join(""));
  for (const cat of CATEGORIES) {
    const row = REGIONS.map((r) => pad(matrix[r][cat] || "—", 18)).join("");
    console.log(pad(cat, 22) + row);
  }
  console.log(pad("TOTAL", 22) + REGIONS.map((r) =>
    pad(recipes.filter((x) => x.region === r).length, 18)
  ).join(""));

  const section = (name, arr) => {
    if (!arr.length) return;
    console.log(`\n${name} (${arr.length})`);
    arr.forEach((x) => console.log(`  - ${x}`));
  };

  console.log(`\n${recipes.length} recipes validated`);
  section("P0 — SHIP-BLOCKER", p0);
  section("P1 — MAJOR", p1);
  section("P2 — MINOR", p2);

  if (!p0.length && !p1.length && !p2.length) {
    console.log("\nClean — no findings.");
  }
  console.log(
    `\nVerdict: ${p0.length ? "FAIL" : p1.length ? "PASS WITH FINDINGS" : "PASS"} ` +
    `(P0 ${p0.length} · P1 ${p1.length} · P2 ${p2.length})\n`
  );
}

// Only run the CLI when invoked directly, so importing this file for tests is free
// of side effects.
if (import.meta.url === `file://${process.argv[1]}`) {
  const result = validate(EXPANSION_RECIPES);
  if (result.fatal) {
    console.error("FATAL: EXPANSION_RECIPES is not an array");
    process.exit(1);
  }
  report(EXPANSION_RECIPES, result);
  process.exit(result.p0.length ? 1 : 0);
}
