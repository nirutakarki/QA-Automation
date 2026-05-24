// Week 2 practice: keep reusable QA helpers in a separate CommonJS module.
function checkStatusCode(status) {
  if (typeof status !== "number") {
    return `fail - status code must be a number, got ${typeof status}`;
  }

  if (status >= 200 && status < 300) {
    return "pass";
  }

  return `fail - expected 2xx but received ${status}`;
}

function formatBugTitle(moduleName, issue) {
  return `[BUG] ${moduleName} — ${issue}`;
}

module.exports = {
  checkStatusCode,
  formatBugTitle,
};

if (require.main === module) {
  // This should print sample helper output only when I run helpers.js directly.
  console.log(
    "Helper demo:",
    checkStatusCode(200),
    "|",
    formatBugTitle("Auth", "status code mismatch")
  );
}