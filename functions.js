// Week 2 practice: build reusable QA helper functions that return values.
function checkStatusCode(status) {
	if (typeof status !== "number") {
		return "fail";
	}

	if (status >= 200 && status < 300) {
		return "pass";
	}

	return "fail";
}

function validateRequiredField(value) {
	if (value === null || value === undefined) {
		return "required field missing";
	}

	if (typeof value === "string" && value.trim() === "") {
		return "required field missing";
	}

	return "valid";
}

function formatBugTitle(moduleName, issue) {
	return `[BUG] ${moduleName} — ${issue}`;
}

// This should return pass because 200 is a successful HTTP status.
console.log("checkStatusCode(200):", checkStatusCode(200));

// This should return fail because 404 is outside the success range.
console.log("checkStatusCode(404):", checkStatusCode(404));

// This should return fail because the value is not a number.
console.log("checkStatusCode(\"500\"):", checkStatusCode("500"));

// This should return valid because the field contains usable text.
console.log("validateRequiredField(\"qa_intern\"):", validateRequiredField("qa_intern"));

// This should return required field missing because the string is empty.
console.log("validateRequiredField(\"\"):", validateRequiredField(""));

// This should return the bug title format so I can reuse it in bug reports.
console.log("formatBugTitle:", formatBugTitle("Login", "status code mismatch"));
