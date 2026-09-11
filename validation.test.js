import { test } from "node:test";
import assert from "node:assert";

import { validateEmail, validatePassword, validateAge } from "./validation.js";

test("validateEmail hyväksyy tavallisen sähköpostiosoitteen", () => {
  const result = validateEmail("opiskelija@example.com");

  assert.strictEqual(result, true);
});

test("validateEmail hylkää sähköpostin ilman @-merkkiä", () => {
  const result = validateEmail("opiskelija.example.com");

  assert.strictEqual(result, false);
});

// Tehtävä 1
test("validatePassword hylkää liian lyhyen salasanan", () => {
  const result = validatePassword("sala123");

  assert.strictEqual(result, false);
});

// Tehtävä 2
// Testataan että liian lyhyt salasana hylätään.
test("validatePassword hylkää liian lyhyen salasanan", () => {
  const result = validatePassword("sala123");

  assert.strictEqual(result, false);
});

// Tehtävä 3
// Testataan että vähintään 8 merkkiä pitkä salasana hyväksytään.
test("validatePassword hyväksyy vähintään 8 merkkiä pitkän salasanan", () => {
  const result = validatePassword("salasana");

  assert.strictEqual(result, true);
});
