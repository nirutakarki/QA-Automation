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

console.log("checkStatusCode(200):", checkStatusCode(200));

console.log("checkStatusCode(404):", checkStatusCode(404));

console.log("checkStatusCode(500):", checkStatusCode(500));

console.log("validateRequiredField(qa_intern):", validateRequiredField("qa_intern"));

console.log("validateRequiredField(\"\"):", validateRequiredField(""));

console.log("formatBugTitle:", formatBugTitle("Login", "status code mismatch"));
