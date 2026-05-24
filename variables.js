// storing fixed test values with const and one mutable value with let.
const username = "qa_intern";
const password = "P@ssw0rd123";
const productName = "Checkout Widget";
const expectedTitle = "QA Automation Demo";
const statusCode = 200;
const baseUrl = "https://example.test";
let isLoggedIn = false;

console.log("Username:", username);

console.log("Password:", password);

console.log("Product Name:", productName);

console.log("Expected Title:", expectedTitle);

console.log("Expected Status:", statusCode);

console.log("Base URL:", baseUrl);

console.log("Is Logged In before login attempt:", isLoggedIn);

isLoggedIn = true;

console.log("Is Logged In after login attempt:", isLoggedIn);
