# Week 02 — JavaScript practice

This repository contains short Node.js scripts used to practice core JavaScript concepts for QA automation. Below are the explanations of what each file demonstrates.

- `variables.js`: demonstrates `const` vs `let` and storing test data (username, password, productName, expectedTitle, expectedStatus, baseUrl, isLoggedIn).
- `conditions.js`: demonstrates conditional checks — a `checkStatusCode` logger that prints PASS/FAIL for 2xx vs other codes, and `validateRequiredField` that returns a validation message; includes multiple test cases.
- `loops.js`: demonstrates iterating over an array of test users using `for...of` and `forEach`, logging user details and indices.
- `functions.js`: demonstrates writing reusable functions (`checkStatusCode`, `validateRequiredField`, `formatBugTitle`) and calling them with several inputs.
- `arrays-objects.js`: demonstrates structured test data objects (login, registration, API request), accessing deeply nested JSON-like responses, and destructuring values.
- `promises.js`: demonstrates creating a `Promise`-based `loadTestData(shouldFail)` with a simulated delay, resolving and rejecting, and consuming it with `.then()`/`.catch()`.
- `async-await.js`: demonstrates `async`/`await` flow with `fetchUser`, `runLoginFlow`, sequential awaits to simulate navigation/fill/click/verify steps, and combining async results.
- `error-handling.js`: demonstrates `try`/`catch`, throwing a custom `Error` for invalid input, logging the error, and re-throwing to propagate failures.
- `helpers.js`: demonstrates exporting utility functions with `module.exports` (e.g., `checkStatusCode`, `formatBugTitle`) for reuse across files.
- `imports-demo.js`: demonstrates importing utilities via `require()` from `helpers.js` and using them to confirm the module import works.

