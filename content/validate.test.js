/**
 * Tests for the validation harness itself.
 *
 *   npm test --prefix content       # or: node --test content/validate.test.js
 *
 * Not `node --test content/` — Node resolves the bare directory as a module,
 * reports one failed test and exits 1 without running anything.
 *
 * The harness guards recipes-expansion.js; nothing guarded the harness. Every
 * test here works by mutating a deep clone of the real corpus and asserting the
 * gate reacts — a rule nobody can trip is not a rule.
 */

import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { validate, words, slugify, collisions } from "./validate.js";
import { EXPANSION_RECIPES, toSiteShape } from "./recipes-expansion.js";

const clone = () => structuredClone(EXPANSION_RECIPES);
const all = (r) => [...r.p0, ...r.p1, ...r.p2].join("\n");

// ------------------------------------------------------------ baseline
test("the real corpus passes clean", () => {
  const r = validate(EXPANSION_RECIPES);
  assert.equal(r.p0.length, 0, `P0s: ${r.p0.join(" | ")}`);
  assert.equal(r.p1.length, 0, `P1s: ${r.p1.join(" | ")}`);
  assert.equal(r.p2.length, 0, `P2s: ${r.p2.join(" | ")}`);
});

test("the corpus is 32 recipes across the three regions", () => {
  assert.equal(EXPANSION_RECIPES.length, 32);
  const per = (region) => EXPANSION_RECIPES.filter((r) => r.region === region).length;
  assert.equal(per("Scotland"), 12);
  assert.equal(per("Wales"), 10);
  assert.equal(per("Northern Ireland"), 10);
});

// ------------------------------------------------------------ helpers
test("words() counts whitespace-separated tokens", () => {
  assert.equal(words("one two three"), 3);
  assert.equal(words("  padded   out  "), 2);
  assert.equal(words(""), 0);
  assert.equal(words(undefined), 0);
});

test("slugify() matches the slug convention the image paths depend on", () => {
  assert.equal(slugify("Bangers & Mash"), "bangers-and-mash");
  assert.equal(slugify("Cullen Skink"), "cullen-skink");
});

// ------------------------------------------------- the gate actually bites
test("a duplicate slug is a P0", () => {
  const r = clone();
  r[1].slug = r[0].slug;
  assert.match(all(validate(r)), /duplicate slugs/);
});

test("an emptied region x category cell is a P0", () => {
  const r = clone().filter((x) => !(x.region === "Wales" && x.category === "Breakfast"));
  assert.match(validate(r).p0.join("\n"), /Wales x Breakfast is EMPTY/);
});

test("a missing required field is a P0", () => {
  const r = clone();
  delete r[0].story;
  assert.match(validate(r).p0.join("\n"), /missing required field: story/);
});

test("ratingCount — fabricated crowd data — is a P0", () => {
  const r = clone();
  r[0].ratingCount = 127;
  assert.match(validate(r).p0.join("\n"), /fabricated crowd data/);
});

test("an unrecognised region is a P0", () => {
  const r = clone();
  r[0].region = "Cornwall";
  assert.match(validate(r).p0.join("\n"), /region not recognised/);
});

// -------------------------------- GATE-10: numbers must actually be numbers
test("GATE-10: a string-typed prepMinutes is caught", () => {
  const r = clone();
  r[0].prepMinutes = "20";
  assert.match(all(validate(r)), /prepMinutes is string/);
});

test("GATE-10: a string-typed rating no longer skips the band check", () => {
  const r = clone();
  r[0].editorialRating = "9.9";
  const out = all(validate(r));
  assert.match(out, /editorialRating is string/);
});

test("GATE-10: a pre-formatted time string is caught", () => {
  // INTEGRATION.md warns the site may store `"55 min"`; the adapter's worked
  // example produces exactly this.
  const r = clone();
  r[0].prepMinutes = "55 min";
  assert.match(all(validate(r)), /prepMinutes is string/);
});

test("GATE-10: the real corpus is numeric throughout", () => {
  for (const r of EXPANSION_RECIPES) {
    for (const f of ["prepMinutes", "cookMinutes", "serves", "editorialRating"]) {
      assert.equal(typeof r[f], "number", `${r.slug}.${f}`);
    }
  }
});

// ------------------------------- GATE-09: the gate must name the real cause
test("GATE-09: a duplicate title is reported as a duplicate title", () => {
  const r = clone();
  r[1].title = r[0].title;
  assert.match(validate(r).p0.join("\n"), /duplicate titles/);
});

test("GATE-09: obeying the slug message no longer trades one P2 for two P0s", () => {
  // Before: a duplicate title produced only "slug does not derive from title",
  // and following that instruction produced a duplicate slug plus a broken
  // image path. The cause is now named directly.
  const r = clone();
  r[1].title = r[0].title;
  const out = validate(r);
  assert.ok(
    out.p0.some((f) => /duplicate titles/.test(f)),
    "the real cause is reported"
  );
});

test("GATE-09: the real corpus has no duplicate titles", () => {
  const titles = EXPANSION_RECIPES.map((r) => r.title);
  assert.equal(new Set(titles).size, titles.length);
});

// --------------------------------------------- GATE-07: merge-time collisions
test("GATE-07: a slug already in the library is reported as a collision", () => {
  assert.deepEqual(collisions(["cullen-skink"], EXPANSION_RECIPES), ["cullen-skink"]);
});

test("GATE-07: no collision against a disjoint library", () => {
  assert.deepEqual(collisions(["bangers-and-mash", "toad-in-the-hole"], EXPANSION_RECIPES), []);
});

test("GATE-07: an empty or missing library is safe, not a crash", () => {
  assert.deepEqual(collisions([], EXPANSION_RECIPES), []);
  assert.deepEqual(collisions(undefined, EXPANSION_RECIPES), []);
  assert.deepEqual(collisions(["x"], undefined), []);
});

test("GATE-07: the in-module duplicate check cannot see a merge collision", () => {
  // This is the gap GATE-07 closes: validate() only sees this module, so a
  // collision with the existing library leaves it reporting clean.
  const withCollision = validate(EXPANSION_RECIPES);
  assert.equal(withCollision.p0.length, 0, "module alone is internally clean");
  assert.equal(collisions(["cullen-skink"], EXPANSION_RECIPES).length, 1);
});

// --------------------------------------------------------- GATE-03: images
test("GATE-03: a recipe with no image path is a P0", () => {
  const r = clone();
  delete r[0].image;
  assert.match(validate(r).p0.join("\n"), /missing required field: image/);
});

test("GATE-03: every hero image resolves at /generated/<slug>.jpg", () => {
  for (const r of EXPANSION_RECIPES) {
    assert.equal(r.image, `/generated/${r.slug}.jpg`, `${r.slug} image path drifted`);
  }
});

test("GATE-03: an image path that does not match its slug is a P0", () => {
  const r = clone();
  r[0].image = "/generated/wrong-name.jpg";
  assert.match(validate(r).p0.join("\n"), /image path does not match slug/);
});

test("GATE-03: stripping every image fails the gate, not passes it", () => {
  const r = clone().map((x) => {
    const { image, ...rest } = x;
    return rest;
  });
  assert.equal(validate(r).p0.length, 32);
});

// ------------------------------------------------- GATE-02: voice coverage
test("GATE-02: an American spelling in authenticityNote is caught", () => {
  const r = clone();
  r[0].authenticityNote += " The flavor is wonderful.";
  assert.match(all(validate(r)), /flavor/);
});

test("GATE-02: a banned phrase in authenticityNote is caught", () => {
  const r = clone();
  r[0].authenticityNote += " Truly the ultimate version.";
  assert.match(all(validate(r)), /the ultimate/);
});

test("GATE-02: a banned phrase in an ingredient item is caught", () => {
  const r = clone();
  r[0].ingredients[0].item = "delicious potatoes, peeled";
  assert.match(all(validate(r)), /delicious/);
});

test("GATE-02: a banned phrase in a title is caught", () => {
  const r = clone();
  r[0].title = "The Ultimate Tattie Scones";
  assert.match(all(validate(r)), /the ultimate/);
});

test("GATE-02: a banned phrase in a tag is caught", () => {
  const r = clone();
  r[0].tags = [...r[0].tags.slice(1), "crowd-pleaser"];
  assert.match(all(validate(r)), /crowd-pleaser/);
});

test("GATE-02: the fields the original check covered still bite", () => {
  for (const field of ["story", "cooksNote"]) {
    const r = clone();
    r[0][field] += " Simply delicious.";
    assert.match(all(validate(r)), /delicious/, `${field} should be covered`);
  }
});

// ---------------------------------------- GATE-06: Ulster is not American
test("GATE-06: American spellings are always caught", () => {
  for (const bad of ["flavor", "color", "caramelize"]) {
    const r = clone();
    r[0].story += ` The ${bad} is notable.`;
    assert.match(all(validate(r)), new RegExp(bad), `${bad} should be caught`);
  }
});

test("GATE-06: an American term used alone is caught", () => {
  const r = clone();
  r[0].story += " Fry it in a skillet until brown.";
  assert.match(all(validate(r)), /skillet/);
});

test("GATE-06: an American term glossed against the British one is not caught", () => {
  const r = clone();
  r[0].story += " Use spring onions (scallions in Ulster) here.";
  assert.equal(all(validate(r)).includes("scallion"), false);
});

test("GATE-06: champ keeps its Ulster gloss and still passes", () => {
  const champ = EXPANSION_RECIPES.find((x) => x.slug === "champ");
  assert.ok(champ, "champ recipe present");
  assert.match(champ.authenticityNote, /scallion is the local word for spring onion/);
  assert.match(
    champ.ingredients.map((i) => i.item).join(" "),
    /spring onions \(scallions in Ulster\)/
  );
});

// ------------------------------------------ GATE-04: message matches rule
test("GATE-04: the imagePrompt message states the band it enforces", () => {
  const src = readFileSync(
    fileURLToPath(new URL("./validate.js", import.meta.url)),
    "utf8"
  );
  const line = src.split("\n").find((l) => l.includes("imagePrompt is"));
  assert.ok(line, "imagePrompt message present");
  const enforced = src.match(/ip < (\d+) \|\| ip > (\d+)/);
  assert.ok(enforced, "imagePrompt band present");
  const [, lo, hi] = enforced;
  assert.match(
    line,
    new RegExp(`want ${lo}-${hi}`),
    `message must state the enforced band ${lo}-${hi}`
  );
});

// ---------------------------------------- ADAPTER: the untested merge path
test("ADAPTER: toSiteShape emits one object per source recipe", () => {
  assert.equal(toSiteShape().length, EXPANSION_RECIPES.length);
});

test("ADAPTER: toSiteShape never emits ratingCount", () => {
  assert.equal(toSiteShape().some((r) => "ratingCount" in r), false);
});

test("ADAPTER: toSiteShape preserves slug, title and image verbatim", () => {
  const out = toSiteShape();
  EXPANSION_RECIPES.forEach((src, i) => {
    assert.equal(out[i].slug, src.slug);
    assert.equal(out[i].title, src.title);
    assert.equal(out[i].image, src.image);
  });
});

test("ADAPTER-01: toSiteShape carries provenance through to the page", () => {
  const out = toSiteShape();
  EXPANSION_RECIPES.forEach((src, i) => {
    assert.equal(
      out[i].authenticityNote,
      src.authenticityNote,
      `${src.slug} lost its authenticityNote in the adapter`
    );
  });
});

test("ADAPTER-01: no prose field is silently dropped by the adapter", () => {
  // imagePrompt is a build input, not page content, so it is the only prose
  // field the adapter is entitled to drop.
  const src = new Set();
  EXPANSION_RECIPES.forEach((r) => Object.keys(r).forEach((k) => src.add(k)));
  const out = new Set();
  toSiteShape().forEach((r) => Object.keys(r).forEach((k) => out.add(k)));

  const renamed = { prepMinutes: "prep", cookMinutes: "cook", cooksNote: "notes", editorialRating: "rating" };
  const lost = [...src].filter(
    (k) => !out.has(k) && !(k in renamed) && k !== "imagePrompt"
  );
  assert.deepEqual(lost, [], `adapter drops: ${lost.join(", ")}`);
});

test("ADAPTER: editorialRating survives the mapping without being altered", () => {
  const out = toSiteShape();
  EXPANSION_RECIPES.forEach((src, i) => {
    assert.equal(out[i].rating, src.editorialRating);
  });
});
