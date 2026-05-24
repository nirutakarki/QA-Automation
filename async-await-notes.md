# Async/Await Notes

## What async/await actually is

`async` makes a function return a Promise, and `await` pauses that function until the Promise finishes. That is the whole trick. It does not make code truly synchronous; it just makes the async flow easier to read.

Why it exists: Promise chains can get hard to scan when a test has a lot of steps. `await` lets the code read top to bottom, which is closer to how we run a test case.

## What happens if I forget await

If we forget `await`, the code keeps moving before the async work is done. In a test, that can become a race condition: the next assertion runs too early, the page is not ready yet, and the test flips between pass and fail depending on timing. That is the classic flaky test problem.

Example: if we call a function that loads user data but forget `await`, the next line might try to read data that has not arrived yet. Sometimes it works. Sometimes it does not. That is exactly the kind of inconsistency that wastes time.

## async/await vs .then()/.catch()

Both are Promise tools. `.then()` and `.catch()` are chain-based, which is fine, but nested logic can get noisy. `async/await` usually reads better for step-by-step test flows, especially when we want the file to look like a manual checklist.

Need to understand that `await` is just syntax on top of Promises. It is not a different async system.

## Working examples from my files

### 1) Promise success/failure flow

From [promises.js](promises.js):

```js
function loadTestData(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Failed to load test data: simulated backend error"));
        return;
      }

      resolve({ users: 3, loaded: true });
    }, 500);
  });
}
```

### 2) Awaiting a user fetch

From [async-await.js](async-await.js):

```js
async function fetchUser(id) {
  await delay(300);

  return {
    id,
    name: `User ${id}`,
    role: "tester",
  };
}
```

### 3) Try/catch with re-throw

From [error-handling.js](error-handling.js):

```js
async function processSubmission(input) {
  try {
    if (typeof input !== "string" || input.trim() === "") {
      throw new Error("Invalid submission input: expected a non-empty string");
    }

    await delay(200);
    return `Processed submission: ${input}`;
  } catch (error) {
    console.log("Caught error inside processSubmission:", error.message);
    throw error;
  }
}
```

## Common async/await mistakes in Playwright

- Forgetting `await` on `page.goto()`, `page.click()`, `page.fill()`, or `expect()` calls.
- Starting the next step before the previous step finishes, especially with navigation or element updates.
- Mixing `await` with `.then()` randomly, which makes the flow harder to read and debug.
- Catching errors too early and hiding the real failure instead of letting the test fail loudly.
- Using manual waits like `setTimeout` in test code instead of waiting for the actual UI state.

## Quick reminder

If the test feels flaky, the first question should be: did I forget an `await`, or am I waiting for the wrong thing?