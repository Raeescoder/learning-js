 function Abc()
{
     document.write(`My name is raees`)
     document.write(`<br>`)
     document.write(`My age is 20`)
}


Abc()

// ------------------Parameter---------------------------------------
function Sum(a,b){
    let sum = a + b
     document.write(sum);

}

Sum(10.76,20);
Sum(54,765);

function hello(fname ,lname){

     document.write( `hello` +  fname + lname);
}

hello(`Fawad`,`Khan`)
//  -------------------RETURN-------------------------------------------
function markSum(eng,urdu,phy,chem,math){
    let sum = eng + urdu + phy + chem + math
    return sum;
    
}
var b=markSum(65,77,89,56,76);
document.write(`Marks Obtain`+b+ `<br>`);
 

function Precentage(tm){
    let per = (tm/500)*100
    return per;
   

}
var d = Precentage(b)
document.write(`Percentage`+d+`%`)
