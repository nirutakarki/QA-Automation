const testUsers = [
	{ email: "user1@example.test", role: "admin" },
	{ email: "user2@example.test", role: "editor" },
	{ email: "user3@example.test", role: "viewer" },
];

for (const user of testUsers) {
	console.log("User record:", JSON.stringify(user));
}

testUsers.forEach((user, index) => {
	console.log(`Index ${index}: ${user.email}`);
});
