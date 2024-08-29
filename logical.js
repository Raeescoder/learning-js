var uid = prompt("enter user id", "user id");
var pwd = prompt("enter password", "password");

var message = (uid == "ali" && pwd == "1234") ? "welcome" : "invalid user";
alert(message);
 
// Here are some more examples of logical operations in JavaScript:

// OR (||): var isAdmin = (uid == "admin" || pwd == "admin"); checks if either the user ID or password is "admin".
// NOT (!): var isValid = !(uid == "" || pwd == ""); checks if both user ID and password are not empty
