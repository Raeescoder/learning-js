// var x= 6;
// if(x>10){
//     document.write(`x is greater`)
// } else{
//     document.write(`x is smaller`)
// }

/*
// if else if 
let per = 55;
if (per>=80 && per<=100){
    document.write(`you are in merit `)
}else if (per>=60 && per<80);{
    document.write(`you are in 1 divsion `)
}else if (per>=45 && per<60);{
    document.write(`you are in 2 divsion `)
}else if (per>=33 && per<45);{
    document.write(`you are 3 divison  `)
}else if(per<33);{
    document.write(`you are fail `)
}*/
let per = prompt(`Enter your Precentage`);

if (per >= 80 && per <= 100) {
    document.write(`you are in merit `);
} else if (per >= 60 && per < 80) {
    document.write(`you are in 1 divsion `);
} else if (per >= 45 && per < 60) {
    document.write(`you are in 2 divsion `);
} else if (per >= 33 && per < 45) {
    document.write(`you are 3 divison  `);
} else if (per < 33) {
    document.write(`you are fail `);
}
//---------ternary opeator-----------------------
let name = 34;
let z;
(name>50) ? z="ture":z="false";
document.write(z);
 // var uid = prompt("enter user id" , "user id");
    // var pwd = prompt("enterpassword", "password");
     
    // var message=(uid="ali" && pwd =="1234") ? "welcome": "invaid user"
    //alert(message); 
