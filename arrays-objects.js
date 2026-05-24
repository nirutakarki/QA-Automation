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

console.log("Login username:", loginData.username);

console.log("Login password:", loginData.password);

console.log("Registration email:", registrationData.email);

console.log("Request authorization header:", apiRequestBody.headers.authorization);

console.log("Request active filter:", apiRequestBody.payload.filters.active);

console.log("First API user name:", apiResponse.data.users[0].name);

console.log("Second API user role:", apiResponse.data.users[1].role);

const { username, password } = loginData;
const { email, plan } = registrationData;
const { status, data } = apiResponse;

console.log("Destructured username:", username);

console.log("Destructured password:", password);

console.log("Destructured email:", email);

console.log("Destructured plan:", plan);

console.log("Response status:", status);

console.log("User count:", data.users.length);
