// Week 2 practice: import shared helper functions with CommonJS require.
const { checkStatusCode, formatBugTitle } = require("./helpers");

// This should print the imported status result so I can confirm require worked.
console.log("Imported status result:", checkStatusCode(201));

// This should print the formatted bug title so I can confirm the second import worked.
console.log("Imported bug title:", formatBugTitle("Checkout", "status code mismatch"));
