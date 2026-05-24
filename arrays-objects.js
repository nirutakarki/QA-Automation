// Week 2 practice: read and destructure object-based test data like a real API payload.
const loginData = {
	username: "qa_intern",
	password: "P@ssw0rd123",
};

const registrationData = {
	firstName: "Asha",
	lastName: "Karki",
	email: "asha@example.test",
	plan: "starter",
};

const apiRequestBody = {
	headers: {
		authorization: "Bearer test-token-123",
		contentType: "application/json",
	},
	payload: {
		userId: 101,
		filters: {
			active: true,
			region: "np",
		},
	},
};

const apiResponse = {
	status: 200,
	data: {
		users: [
			{ id: 1, name: "Asha", role: "admin" },
			{ id: 2, name: "Ben", role: "editor" },
			{ id: 3, name: "Mina", role: "viewer" },
		],
	},
};

// This should print the login username so I can confirm the nested object values.
console.log("Login username:", loginData.username);

// This should print the login password so I can see the exact test credential value.
console.log("Login password:", loginData.password);

// This should print the registration email so I can confirm a second object is readable.
console.log("Registration email:", registrationData.email);

// This should print the authorization header so I can verify a nested request field.
console.log("Request authorization header:", apiRequestBody.headers.authorization);

// This should print the nested payload flag so I can practice deep property access.
console.log("Request active filter:", apiRequestBody.payload.filters.active);

// This should print the first nested user name so I can read API response data.
console.log("First API user name:", apiResponse.data.users[0].name);

// This should print the second nested user role so I can read deeper array data.
console.log("Second API user role:", apiResponse.data.users[1].role);

const { username, password } = loginData;
const { email, plan } = registrationData;
const { status, data } = apiResponse;

// This should print the destructured username so I can confirm object unpacking worked.
console.log("Destructured username:", username);

// This should print the destructured password so I can confirm the second value unpacked.
console.log("Destructured password:", password);

// This should print the destructured email so I can confirm a second object was unpacked.
console.log("Destructured email:", email);

// This should print the destructured plan so I can confirm a second property was unpacked.
console.log("Destructured plan:", plan);

// This should print the top-level status so I can confirm nested response metadata is readable.
console.log("Response status:", status);

// This should print the users array length so I can confirm the nested data object was unpacked.
console.log("User count:", data.users.length);
