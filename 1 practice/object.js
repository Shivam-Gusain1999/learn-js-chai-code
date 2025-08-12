// const mysymb = Symbol("my-key");
// const user = {
//     namee: "shippa",
//     age: 27,
//     email: "shivam@gmail.com",
//     password: Symbol("1234"),
//     [mysymb] : "symbolysis"
//  }
// let naam = user.namee
// console.log(naam);

// let umr = user.age
// console.log(umr);

// console.log(user.email);

// // console.log(typeof user.password);

// console.log(typeof user[mysymb]);
// console.log(user);

const user = {
    namee: "shippa",
    age: 27,
    email: "shivam@gmail.com",
    password: Symbol("1234"),
    mysymb : "symbolysis"
 }
//  user.function1 = function(){
// console.log(`hello mai hu function one wala user mera naam hai ${user.namee}`);
//  }

//  console.log(user.function1());
 

 user.function2 = function(){
console.log(`mai hu function 2 wala user mera email hai ${this.email}`);
 }

user.function2();
 



