//---------------Alertbox---------------------------------------

var a=10
var b=20
var c=30
 if(a>b){
     alert("a is greater than b");
 }else{
 alert("b is greater than a");
}
// alert(`value of c` + c)
//---------------Confirm box---------------------------------------

var z= confirm(`Do you Like Our Website`)
document.write(z)
if(z){

    // document.write("You Like Our Website")

}else{
    alert(`sorry`)
}

//---------------Prompt box---------------------------------------
var x=prompt(`what is your name`);
document.write(x)
console.log(x)


console.log("The end" );