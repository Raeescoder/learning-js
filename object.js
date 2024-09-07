var a ={
    firstName :'Raees Ahmad',
    lastName :'mughal',
    age :32,
   FavMoives :["dhoom", "don", "awarapaan"],
  salary: function salary(){
    return 50000;
   },
   Fullname:function(){
    return this.firstName + " " + this.lastName;

   },

   address :{
    street: 'abc street',
    city: 'lahore',
    country: 'pakistan'
   }
}

console.log(a);
console.log(a.age)
console.log(a.FavMoives[2])
console.log(a.salary())
console.log(a.Fullname())
console.log(a.address)


// ===================second method to create object==================================
 var b = new Object();
 b.firstName = 'raees ahmad';
 b.lastName = 'mughal';
 b.age = 22;
 b.FavMoives = ["dhoom", "don", "awarapaan"];
console.log(b);
// document.write(b ['FavMoives']) another to print the value of object:properties

// --------------------array of object of student------------------------------

var students = [
  {name: 'raees ahmad', age: 22, gender: 'male'},
  {name: 'mughal', age: 32, gender: 'male'},
  {name: 'ali', age: 22, gender: 'male'},
  {name: 'mohsin', age: 32, gender: 'male'}]
  console.log(students)

for(var a=0; a<students.length; a++)
{
  // document.write(students[a].name + " " + students[a].age + "<br>")
}
// --------------constant with object---------------------
const c = {name: 'raees ahmad', age: 22}

console.log(c)
  c.name="king khan";
  c.age=45
  console.log(c)
  // c={  name: 'raees ali' }  due of contant 
  
// -----------------for in loop-----------------------------

var obj={
  name: "saad ali" ,
  age: 22 ,
  gender: 'male',
  address: 'lahore'

};

for (var key in obj) {
  console.log(key)
  console.log(key + " " + obj[key]);


}
