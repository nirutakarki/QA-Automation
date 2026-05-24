function checkStatusCode(status) {
	if (typeof status !== "number") {
		console.log(`Status ${status}: FAIL - status code must be a number`);
		return;
	}

	if (status >= 200 && status < 300) {
		console.log(`Status ${status}: PASS - 2xx response received`);
		return;
	}

	console.log(`Status ${status}: FAIL - expected 2xx but received ${status}`);
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

checkStatusCode(200);

checkStatusCode(204);

checkStatusCode(404);

checkStatusCode("500");

checkStatusCode(undefined);

const requiredFieldInputs = ["qa_intern", "", "   ", null, 0];

for (const input of requiredFieldInputs) {
	console.log(`Required field check for ${JSON.stringify(input)}:`, validateRequiredField(input));
}
