// function student(name, grade, password){
// this.name = name;
// this.grace = grade;
// this.passwordkyhai = password
// this.greet = function(){
// console.log(`my name is ${this.name} my grade is ${this.grace} my password is ${this.passwordkyhai}`)
// }
// }

// const s1 = new student('shippa', 7, 'mypassword')
// s1.greet()




// const user = {
//   name: "Shivam",
//   greet: function() {
//     console.log(this)
//     console.log("Hi, my name is " + this.name);
//      console.log(this)
//   }
 
// };
//  console.log(this)
// user.greet(); // Output: Hi, my name is Shivam





function Student(name) {
  this.name = name;
  this.sayHi = function() {
    console.log(this)
    console.log(`Hello, I'm ${this.name}`);
  };
}

const s1 = new Student("Shivam");
s1.sayHi(); // Hello, I'm Shivam

