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
    console.log("Caught error inside processSubmission:", error.message);
    throw error;
  }
}

(async () => {
  try {
    const successResult = await processSubmission("login-form");
    console.log("Success result:", successResult);

    await processSubmission("");
  } catch (error) {
    console.log("Outer catch saw:", error.message);
  }
})();