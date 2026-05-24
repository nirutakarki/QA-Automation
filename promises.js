// Week 2 practice: simulate an asynchronous data load with Promise resolve and reject paths.
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

// This should show that the success path starts first.
console.log("Starting success path...");

loadTestData(false)
  .then((result) => {
    // This should print the resolved object so I can screenshot the happy path.
    console.log("Success result:", JSON.stringify(result));

    // This should show that the failure path begins after the success path completes.
    console.log("Starting failure path...");

    return loadTestData(true);
  })
  .then((result) => {
    // This should never run because the second promise is supposed to fail.
    console.log("Unexpected second success:", JSON.stringify(result));
  })
  .catch((error) => {
    // This should print the rejected error message so I can confirm the failure path.
    console.log("Failure result:", error.message);
  });