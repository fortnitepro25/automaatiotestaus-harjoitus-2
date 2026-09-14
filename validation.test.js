import { test } from "node:test";
import assert from "node:assert";

import { validateEmail, validatePassword, validateAge } from "./validation.js";

test("validateEmail hyväksyy tavallisen sähköpostiosoitteen", () => {
  const result = validateEmail("opiskelija@example.com");

  assert.strictEqual(result, true);
});

// Tehtävä 1
test("validateEmail hylkää sähköpostin ilman @-merkkiä", () => {
  const result = validateEmail("opiskelija.example.com");

  assert.strictEqual(result, false);
});

// Tehtävä 2
test("validatePassword hylkää liian lyhyen salasanan", () => {
  const result = validatePassword("sala123");

  assert.strictEqual(result, false);
});

// Tehtävä 3
test("validatePassword hyväksyy vähintään 8 merkkiä pitkän salasanan", () => {
  const result = validatePassword("salasana");

  assert.strictEqual(result, true);
});

// Tehtävä 4
test("validateAge hyväksyy iän 18", () => {
  const result = validateAge(18);

  assert.strictEqual(result, true);
});

// Tehtävä 5
test("validateAge hylkää iän 15", () => {
  const result = validateAge(15);

  assert.strictEqual(result, false);
});

// Tehtävä 6
test("validateAge hylkää iän 121", () => {
  const result = validateAge(121);

  assert.strictEqual(result, false);
});

// Tehtävä 7
// Testataan erikoistapauksia: tyhjä sähköposti, tyhjä salasana, ikä merkkijonona ja desimaali-ikä.

test("validateEmail hylkää tyhjän sähköpostiosoitteen", () => {
  const result = validateEmail("");

  assert.strictEqual(result, false);
});

test("validatePassword hylkää tyhjän salasanan", () => {
  const result = validatePassword("");

  assert.strictEqual(result, false);
});

test("validateAge käsittelee iän 18 merkkijonona", () => {
  const result = validateAge("18");

  assert.strictEqual(result, true);
});

test("validateAge hylkää desimaali-iän 18.5", () => {
  const result = validateAge(18.5);

  assert.strictEqual(result, false);
});

// Tehtävä 8
test("validateEmail hylkää virheellisen sähköpostin @test.", () => {
  const result = validateEmail("@test.");

  assert.strictEqual(result, false);
});
