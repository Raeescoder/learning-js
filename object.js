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