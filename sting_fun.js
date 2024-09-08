var str="Javascript is a script language";
var str2="50"
console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log( str.includes("is")) //is case senstive
console.log(str.startsWith("Javascript"))
console.log(str.endsWith("language"))
console.log(str.search("lan"))
console.log(str.match(/script/g))
console.log(str.indexOf("r"))
console.log(str.lastIndexOf("i"))
console.log(str.replace("a", "the"))
console.log(str.replace(/a/g, "the") )
console.log(str.trim()) // to remove space
console.log(str.charAt(23))
console.log(str.charCodeAt("1"))
console.log(String.fromCharCode(118))
 console.log(str2.concat(str))
// -----------split------------
console.log(str.split(" "))
// ---------------repeat------------
console.log(str.repeat(3))
// ==========slice----------------------------------
console.log(str.slice(0, 10))
// ----------substr--------------------------------
console.log(str.substr(0, 14))
// --------------substring------------------------
console.log(str.substring(0, 14))
// --------------to string--------------------------'
console.log(String(str2))
// ---------value of ===================
console.log(str.valueOf())