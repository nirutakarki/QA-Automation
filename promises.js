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

console.log("Starting success path...");

loadTestData(false)
  .then((result) => {
    console.log("Success result:", JSON.stringify(result));

    console.log("Starting failure path...");

    return loadTestData(true);
  })
  .then((result) => {
    console.log("Unexpected second success:", JSON.stringify(result));
  })
  .catch((error) => {
    console.log("Failure result:", error.message);
  });