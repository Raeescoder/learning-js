// Get the container element using its ID
let container = document.getElementById("container");

// Get the heading element using its ID
let heading = document.getElementById("heading");

// Get the paragraph element using its ID
let paragraph = document.getElementById("paragraph");

// Get the input field element using its ID
let inputField = document.getElementById("input-field");

// Log the get methods
console.log("Get methods:");

// Get the text content of the heading element
console.log(`Heading text content: ${heading.textContent}`);
// Get the inner HTML of the paragraph element
console.log(`Paragraph innerHTML: ${paragraph.innerHTML}`);
// Get the value of the input field element
console.log(`Input field value: ${inputField.value}`);
// Get the background color of the container element
console.log(`Container background color: ${container.style.backgroundColor}`);
// Get the width of the container element
console.log(`Container width: ${container.style.width}`);
// Get the height of the container element
console.log(`Container height: ${container.style.height}`);

// Log the set methods
console.log("\nSet methods:");

// Set the text content of the heading element
heading.textContent = " MY FORMS";
// Set the inner HTML of the paragraph element
paragraph.innerHTML = "New Paragraph";
// Set the value of the input field element
inputField.value = "New Value";
// Set the background color of the container element
container.style.backgroundColor = "#5453f2";
// Set the width of the container element
container.style.width = "1000px";
// Set the height of the container element
container.style.height = "500px";

// Log the get methods again to verify changes
console.log("\nGet methods again:");

// Get the text content of the heading element again
console.log(`Heading text content: ${heading.textContent}`);
// Get the inner HTML of the paragraph element again
console.log(`Paragraph innerHTML: ${paragraph.innerHTML}`);
// Get the value of the input field element again
console.log(`Input field value: ${inputField.value}`);
// Get the background color of the container element again
console.log(`Container background color: ${container.style.backgroundColor}`);
// Get the width of the container element again
console.log(`Container width: ${container.style.width}`);
// Get the height of the container element again
console.log(`Container height: ${container.style.height}`);

// -----------query selector & query selector all
// Get the first element with the class "container"
const containerElement = document.querySelector(".container");
// Get all elements with the class "container"
const containerElements = document.querySelectorAll(".container");

// ----------------dom css styling methods
// simple metjhods by tags
const paragraph = document.querySelector('p');
paragraph.style.color = 'blue';
paragraph.style.fontSize = '24px';

//  setAttribute() Method
const paragraph = document.querySelector('p');
paragraph.setAttribute('style', 'color: blue; font-size: 24px;');

// -------------class list property -------------
const paragraph = document.querySelector('p');
paragraph.classList.add('blue-text');