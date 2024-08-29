// simple coditional assigment
let isAdmin = true;
let message = isAdmin ? "You are an admin" : "You are not an admin";
document.write(message); // Output: "You are an admin"
//  Conditional String Concatenation
let name = "John";
let greeting = `Hello, ${name === "John" ? "Mr." : "Ms."} ${name}!`;
console.log(greeting); // Output: "Hello, Mr. John!"
//  Conditional Function Call
let isAuthorized = true;
let result = isAuthorized ? performAuthorizedAction() : performUnauthorizedAction();
console.log(result); // Output: result of performAuthorizedAction()
// : Conditional Object Property Assignment
let user = { name: "Jane" };
let isAdmins = true;
user.role = isAdmins ? "admin" : "user";
console.log(user); // Output: { name: "Jane", role: "admin" }
// Conditional Array Element Selection
let colors = ["red", "green", "blue"];
let isDarkMode = true;
let selectedColor = isDarkMode ? colors[1] : colors[0];
console.log(selectedColor); // Output: "green"
// Conditional Nullish Coalescing
let userName = null;
let defaultName = "Guest";
let displayName = userName ?? defaultName;
console.log(displayName); // Output: "Guest"