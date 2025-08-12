//  const user = new Object
// console.log(user);


// let customerdetails = {
//     email : "shivam@facebook.com",
//       customerfullName : {
//      customerfirstOrSecondName : {
//  fName :"shippa",
//  lName : "gusain"
// }
//     }
// }
// console.log(customerdetails.customerfullName.customerfirstOrSecondName.fName);

let obj1 ={
    1: "a",
    2:"b"
}
let obj2 ={
    3: "c",
    4:"d"
}

// let obj3 ={obj1, obj2}   //////////ek treeka pr glt aata hai esse 

// console.log(obj3);


let obj3 = Object.assign({}, obj1, obj2)  /////ye second treeka   ye ky krta hai shallow copy banata hai or merge update bhi karta hai obj1 me obj2 ke value jaaege or obj 1 upgrade hoga////
// console.log(obj3);


// let obj3 ={...obj1, ...obj2}  ///// sbse best treeka/////
// console.log(obj3);


const user = [{
    id: 1,
    email: "shippa1@gmail.com"
},
{
    id: 2,
    email: "shippa2@gmail.com"
},
{
    id: 3,
    email: "shippa3@gmail.com"
},
{
    id: 4,
    email: "shippa4@gmail.com"
}
]
// console.log(user[1]);
// console.log(user)
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.keys(user[1]));
// console.log(Object.values(user[1]));

console.log(user.hasOwnProperty('email'));
console.log(user[1].hasOwnProperty('email'));
console.log(user.hasOwnProperty('id'));






