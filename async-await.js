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
  console.log("Step 1: navigate to the login page");
  await delay(150);

  console.log("Step 2: fill the username field");
  await delay(150);

  console.log("Step 3: click the login button");
  await delay(150);

  console.log("Step 4: verify the dashboard is visible");

  return "login flow complete";
}

async function getReport() {
  console.log("Report step 1: load the user record");
  const user = await fetchUser(7);

  console.log("Report step 2: load the summary metrics");
  const summary = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ totalChecks: 5, passedChecks: 5 });
    }, 200);
  });

  return { user, summary };
}

(async () => {
  console.log("Loading a user with fetchUser...");
  const user = await fetchUser(7);

  console.log("Fetched user:", JSON.stringify(user));

  console.log("Running the login flow...");
  const loginFlowResult = await runLoginFlow();

  console.log("Login flow result:", loginFlowResult);

  console.log("Building the combined report...");
  const report = await getReport();

  console.log("Final combined report:", JSON.stringify(report));
})();