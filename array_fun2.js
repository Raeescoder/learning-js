// -------------isArray-------------
var a=["ali", "saad"]
console.log(Array.isArray(a)); // true
    var b=20
    console.log(Array.isArray(b))
    var c ="wood"
    console.log(Array.isArray(c))
    // ==============index of & last index of--------------------------
    var arr=["ali", "saad", "ali", "saad", "ali"]
    console.log(arr.indexOf("ali" ,1)) // 0 , to find the index of sepefic value
    console.log(arr.lastIndexOf("saad")) // 2 , to find the last index of sepe
    // --------------------include-------------------------------
    var arr=["ali", "saad", "aliza", "talha", "alpha"]
    console.log(arr.includes("aliza")) // true
    console.log(arr.includes("T alha")) // true
    // -----------------------some--------------------
    var age=[19,12,76,4]
    console.log(age.some(checkAdult)) // to check every value of array to fullfuil the codition 

    function checkAdult(age)
    {
        return age>=18

    }



// --------------every---------------------------------
var ages = [18,45,54];

function checkAdults(age) {
  return age >= 18; // note: I assume you want to check if the age is 18 or older, not 18 or younger
}

console.log(ages.every(checkAdults)); // output: false

// -----------------------find&find index---------------------------`

var arr=[1,2,3,4,5,6,7,8,9]

console.log(arr.find(findNum)) //to find the first value of array

function findNum(arr){
    return arr>4
}
console.log(arr.findIndex(findNum)) // to find the index who passs the test

// -----------------------map---------------------------------
var arr=[1,2,3,4,5,6,7,8,9]
console.log(arr.map(mapNum)) // to create a new array with the results of applying a provided

function mapNum(num){
    return num*2}
// ----------------------filter------------------------------
var arr=[1,2,3,4,5,6,7,8,9]
console.log(arr.filter(filterNum)) // to create a new array with all elements that pass the test
function filterNum(num){

    return num>4
}

// ----------------to string-------------
var arr=[1,2,3,4,5,6,7,8,9]
console.log(arr.toString()) // to convert array to string
// -------------value of-------------------
var arr=[1,2,3,4,5,6,7,8,9]
console.log(arr.valueOf()) // to convert array to string
// ----------------fill------------------
var arr=[1,2,3,4,5,6,7,8,9]
console.log(arr.fill(0)) // to fill array with a value
// --------------------for each----------------------
var nam =["sajid" ,"zabir", "raheel", "qasim"]
nam.forEach(loop)

function loop(value,index){

    console.log()
}


