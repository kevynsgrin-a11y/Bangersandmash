/**
 * Tests for the validation harness itself.
 *
 *   node --test content/
 *
 * The harness guards recipes-expansion.js; nothing guarded the harness. Every
 * test here works by mutating a deep clone of the real corpus and asserting the
 * gate reacts — a rule nobody can trip is not a rule.
 */

import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { validate, words, slugify } from "./validate.js";
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

test("ADAPTER: editorialRating survives the mapping without being altered", () => {
  const out = toSiteShape();
  EXPANSION_RECIPES.forEach((src, i) => {
    assert.equal(out[i].rating, src.editorialRating);
  });
});
