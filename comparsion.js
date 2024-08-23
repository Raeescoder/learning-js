// Comparison Operations in JavaScript

let a = 5;
let b = 10;

console.log("Equal (==): ", a == b); // false
console.log("Not Equal (!=): ", a != b); // true
console.log("Identical (===): ", a === b); // false
console.log("Not Identical (!==): ", a !== b); // true
console.log("Greater Than (>): ", a > b); // false
console.log("Less Than (<): ", a < b); // true
console.log("Greater Than or Equal (>=): ", a >= b); // false
console.log("Less Than or Equal (<=): ", a <= b); // true

// Let's try with strings
a = "hello";
b = "hello";

console.log("Equal (==): ", a == b); // true
console.log("Not Equal (!=): ", a != b); // false
console.log("Identical (===): ", a === b); // true
console.log("Not Identical (!==): ", a !== b); // false

// Let's try with different types
a = 5;
b = "5";

console.log("Equal (==): ", a == b); // true (coercion)
console.log("Identical (===): ", a === b); // false (different types