
// ==============while loop===========================
 var a =1;

 document.write(`<ul>`)
 while(a <= 10){
    if(a==9){
        document.write(`Enough for today`)
       break 
    }
     document.write("<li>Item "+a +"</li>");
     a=a+1;
 }
document.write(`</ul>`)

//========================do while===============================
var b=1
do{
    document.write(`this is the output <br>`)
b++;
 }while(b<=20);
// ================for loop============================
for( var i=1 ;i<=10; i++){
    if(i==6){
        console.log(`hey the nymber is` + i);
      continue;  
    }
    console.log(`The output is` +  i);
}
// ===============small task----------
// 1. write a program to print the  even numbers from 1 to 100
// 2. write a program to print the odd numbers from 1 to 100


for(num=1; num<=100; num++) 
    {
    // document.write(num, "<br>")
    // if(num%2==0) For even 
    if(num%2 != 0){ //for odd

        document.write(num, "<br>")
}
    }