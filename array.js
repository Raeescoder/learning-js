 var arr=[10,20,30,40,50]
 let sum=0;
 // console.log(arr);
 //document.write("ul");
for(a=0;a<=4; a++)
  {
 document.write( "<li>" + arr[a] + `<br>`  +"</li>")
    sum= sum+arr[a]; 
 }
 // document.write("/ul");
 document.write("<br>Sum of array elements is: "+sum);


// ------------------------Another method--------------------------
var ary= new Array(3)
 document.write(ary +"<br>")
 for(g=0; g<3; g++){
     ary[g]= prompt("Enter your value")
     document.write(ary[g] +"<br>")
 }

// -----------Multidemensional-----------------------------------------------
var arr2=[[1,2,3],
        [4,5,6],
        [7,8,9],
        [10,11,12]

    ]

// document.write(arr2[0][0] +"<br>") for single value of array
document.write(arr2.length);
document.write("<table border='1px' >")
for( var c=0; c<arr2.length; c++){
    document.write("<tr>")
    for(var d=0; d<arr2[a].length; d++){

 document.write("<td>" +arr2[c][d] +"</td>")
 }
 document.write(`<br>`)
 document.write("<tr>")
 }

// document.write("</table>")

//----------------Array function(modify & delete the elemnt)---------------------- 
var arr3=[12,"ana", "sunny" , 21];
document.write( arr3  +  "<br>");
arr3[0]=18
document.write(arr3)
arr3[1]=`raees`
document.write(arr3)
delete arr3[3]
document.write(arr3)