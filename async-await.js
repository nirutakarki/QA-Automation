// Week 2 practice: use async/await to make asynchronous test flow read like a real test.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchUser(id) {
  await delay(300);

  return {
    id,
    name: `User ${id}`,
    role: "tester",
  };
}

async function runLoginFlow() {
  // This should show the first Playwright-style action before the first await pause.
  console.log("Step 1: navigate to the login page");
  await delay(150);

  // This should show the second action after the first simulated wait finishes.
  console.log("Step 2: fill the username field");
  await delay(150);

  // This should show the third action after another simulated wait.
  console.log("Step 3: click the login button");
  await delay(150);

  // This should show the final verification step after the last wait.
  console.log("Step 4: verify the dashboard is visible");

  return "login flow complete";
}

async function getReport() {
  // This should show that the report starts by awaiting the user data first.
  console.log("Report step 1: load the user record");
  const user = await fetchUser(7);

  // This should show that the report waits for a second async value after the user loads.
  console.log("Report step 2: load the summary metrics");
  const summary = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ totalChecks: 5, passedChecks: 5 });
    }, 200);
  });

  return { user, summary };
}

(async () => {
  // This should show the start of the fetchUser demo before the awaited result comes back.
  console.log("Loading a user with fetchUser...");
  const user = await fetchUser(7);

  // This should print the fetched object so I can confirm await resolved the user data.
  console.log("Fetched user:", JSON.stringify(user));

  // This should show the login flow starts only after the user fetch finished.
  console.log("Running the login flow...");
  const loginFlowResult = await runLoginFlow();

  // This should print the flow result so I know the async sequence completed.
  console.log("Login flow result:", loginFlowResult);

  // This should show the combined report is about to be built step by step.
  console.log("Building the combined report...");
  const report = await getReport();

  // This should print the final nested report so I can see both awaited values together.
  console.log("Final combined report:", JSON.stringify(report));
})();