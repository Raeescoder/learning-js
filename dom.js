var element;

// methods to targeting dom
console.log(document.title) // to target the title
console.log(document.body) // to target whole body
console.log(document.links) // to target all links
console.log(document.images)// to target images
console.log(document.forms)// to target forms
console.log(document.doctype)// to target doctype
console.log(document.URL)// to see the url of website
console.log(document.domain) //// to target domain
// console.log(document.getElementById("heading")) // to target by id ]
console.log(document.getElementsByClassName("container")) // to target by class
console.log(document.getElementsByTagName("ul")) // to target by tag name


//  ------------get & set methods of dom----------------------------------

console.log(document.getElementById("heading").innerText);
// Output: "This is a heading element."

console.log(document.getElementById("heading").innerHTML);
// Output: "This is a <span>heading</span> element."

console.log(document.getElementById("headings").getAttribute("class"));