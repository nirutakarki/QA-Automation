// Week 2 practice: handle async errors, log them, and re-throw so failures stay visible.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processSubmission(input) {
  try {
    if (typeof input !== "string" || input.trim() === "") {
      throw new Error("Invalid submission input: expected a non-empty string");
    }

    await delay(200);
    return `Processed submission: ${input}`;
  } catch (error) {
    // We re-throw here so the caller still sees the failure instead of the test pretending it passed.
    console.log("Caught error inside processSubmission:", error.message);
    throw error;
  }
}

(async () => {
  try {
    // This should print the successful result so I can confirm the happy path works.
    const successResult = await processSubmission("login-form");
    console.log("Success result:", successResult);

    // This should trigger the inner catch so I can see the custom error handling in action.
    await processSubmission("");
  } catch (error) {
    // This should print the re-thrown error so I can confirm the failure stays visible to the caller.
    console.log("Outer catch saw:", error.message);
  }
})();