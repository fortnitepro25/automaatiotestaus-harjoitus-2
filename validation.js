export function validateEmail(email) {
  return typeof email === "string" &&
         email.includes("@") &&
         email.includes(".");
}

export function validatePassword(password) {
  return typeof password === "string" && password.length >= 8;
}

export function validateAge(age) {
  return Number.isInteger(Number(age)) &&
         Number(age) >= 18 &&
         Number(age) <= 120;
}
