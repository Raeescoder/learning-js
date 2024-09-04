var z =["saju", "jordon", "kites", "alpha" , "issac"]
document.write(z  +"<br> <br>")
z.sort();               //to arrange alphabetically
document.write(z +"<br>");
z.reverse();           // to reverse of the array
document.write(z +"<br>")
// ========== pop & push -----------------------
var x = [1, 2, 3, 4, 5];
document.write(x +"<br>")
x.pop();  //to delete the last value
document.write(x +"<br>")
x.push(6); // to insert the value in last index of array
document.write(x +"<br>")

// ===============shift & unshift--------------------------

var y =["ali", "bilal", "chand", "dainsh"]
document.write(y +"<br>")
y.shift(); // to delete the first value of array
document.write(y +"<br>")
y.unshift("sajjad"); // to insert the value in first index of array
document.write(y + "<br>")
// ---------------concat& join---------------------
var a = ["ali", "bilal", "chand"]
var b = ["dainsh", "sajjad", "jordon"]
var d =["momina", "aliza"]
var c =a.concat(b,d); // join two arrays
document.write(c +"<br>")
 var r=c.join("/"); // to join the value of array and deal like a string
document.write(r + "<br")

// ----------slice & splice--------------------------------
var e = ["ali", "bilal", "chand", "dainsh", ]
document.write(e +"<br>")
var f = e.slice(1, 3); // to get the value from index 1 & also get the negative value which operator at reverse order
document.write(f +"<br>")

var feel=["sad", "happy","depress"]
 feel.splice(1, 0 ,"anger", "love" ); // 1.index number 2.how many (delete or add the value) 3. enter the new value 
document.write(feel + "<br>")




