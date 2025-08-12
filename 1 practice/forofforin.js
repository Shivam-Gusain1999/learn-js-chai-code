// const arr = [1,3,4,5,6,7,8,89]; /////for of object me nahi chlta or ye hame array or string ke value deta hai of kaa kaam hai value dena or in ka kaam hai keys dena yaa index dena
// for(const val of arr){
// console.log(val);

// }


// let range = [1,15,3,4,5,6,7,8,9,10];

// for (let num of range) {
//     console.log(`\nTable of ${num}`);  ////////////ye for of or for in ke sath bana hai for in object or array or string me chlta hai or khaas kr ye key deta hai////

//     for (let i in range) {
//         console.log(`${num} x ${i} = ${num * i}`);
//     }
// }

// const user = {
//     naaam: 'shippa',
//     age : '27',
//     gmail: 'shippagusain@gmail.com',
//     password : 'dhi8740n'
// }
// let keys = Object.keys(user)
// console.log(keys);   //////[ 'naaam', 'age', 'gmail', 'password' ]/// eska output ye aayega array ke form me


// let keys = Object.values(user)
// console.log(keys);   ///[ 'shippa', '27', 'shippagusain@gmail.com', 'dhi8740n' ] esk output ye hai values array ke form me//


// let keys = Object.entries(user)
// console.log(keys); ///[
//   [ 'naaam', 'shippa' ],
//   [ 'age', '27' ],
//   [ 'gmail', 'shippagusain@gmail.com' ],
//   [ 'password', 'dhi8740n' ]
// //////////// esk ye aayega 



// const user = {
//     naaam: 'shippa',
//     age : '27',
//     gmail: 'shippagusain@gmail.com',
//     password : 'dhi8740n'
// }


// for (const [key, value] of Object.entries(user)) {
//     console.log(`${key} : ${value}`);
// }




// let str = "shippa"
// // for(const val of str){
// // console.log(val);

// // }    ////////s,h,i,p,p,a ye eska output hai

// for(const val in str){
// console.log(val); ////0,1,2,3,4,5  ye eska output hai
// }

