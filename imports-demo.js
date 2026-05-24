const { checkStatusCode, formatBugTitle } = require("./helpers");

console.log("Imported status result:", checkStatusCode(201));

console.log("Imported bug title:", formatBugTitle("Checkout", "status code mismatch"));
