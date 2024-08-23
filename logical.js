var uid = prompt("enter user id", "user id");
var pwd = prompt("enter password", "password");

var message = (uid == "ali" && pwd == "1234") ? "welcome" : "invalid user";
alert(message);