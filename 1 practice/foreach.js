// const arr = [1,3,5,6,7,34,672]
// arr.forEach( (val)=>{
// console.log(val);

// } )


// const userName = ["shippa","shivam","kalnath","banna"];
// function user (values){
// console.log(values)  //////////////// This is what forEach(user) really does internally


// }

// // userName.forEach(user)  for (let i = 0; i < userName.length; i++) {
//   user(userName[i]); // yeh tumhara function call ho raha hai har element ke liye
// }/////////////////// internally aishe work karta hai user


const school = [{
schoolName : 'sgrr',
class: 10
},
{
schoolName: 'brms',
class:12
},
{
 schoolName: "sts",
 class:7
}

]
school.forEach( (val)=>{
console.log(val.schoolName);

} )