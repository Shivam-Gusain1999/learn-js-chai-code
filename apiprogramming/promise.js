////promise banane ke lie new keyword ka use karna pdta hai 

// let merapromise = new Promise(function(resolve, reject){
// let success = true;
// if(!success){
//     resolve('kaam ho gaya')
// }else{
//     reject('kaam nahi hua')
// }
// })

// merapromise.then(function(kuchbhi){
// console.log("sahi raha", kuchbhi)
// }).catch((error)=>{
// console.log('oops', error)
// })


// let promise2 = new Promise(function(resolve, reject){
// setTimeout(()=>{
//     console.log("task complete ho raha hai")
//     resolve()
// },1000)
// })
// promise2.then(()=>{
//     console.log('task complete ho gya')
// })




//  new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('chai ban rahe hai')
//         resolve()
//     },2000)

// })
// .then(()=>{
//     console.log('chai ban gye')
// })



// let promise4 = new Promise((resolve, reject)=>{
// setTimeout(()=>{
//     resolve({username: 'shippa', email: 'shva@kalnath.com'})
// }, 1000)
// })
// promise4.then((yhnkuchbhilikhdo)=>{
//     console.log(yhnkuchbhilikhdo)
// })



// let promise5 = new Promise(function(resolve, reject){
// setTimeout(function(){
//     let error = false;
//     if(!error){
// resolve({username:'shivam gusain', emailid : "gusain@shippagmail.com"})
//     }else{
//         reject('bhai code me glti hai usko sudhar')
//     }
// }, 1000)
// })
// promise5.then(({username, emailid})=>{
// console.log(username)
// console.log(emailid)
// })





// let promise6 = new Promise(function(resolve, reject){
// setTimeout(function(){
//     let error = false;
//     if(error){
// resolve({username:'shivam gusain', emailid : "gusain@shippagmail.com"})
//     }else{
//         reject('bhai code me glti hai usko sudhar')
//     }
// }, 1000)
// })
// promise6.then((kuxhbhi)=>{
// console.log(kuxhbhi)
// return kuxhbhi.username;
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log('ye hamesha run karegga')
// }) /////finally hmesaa run karta hai chaae then ho ya catch wala 




// let promise7 = new Promise(function(resolve, reject){
// setTimeout(function(){
//     let error = false;
//     if(!error){
// resolve({username:'js prepration', emailid : "banna@shippagmail.com"})
//     }else{
//         reject('bhai code me glti hai usko sudhar')
//     }
// }, 1000)
// })

// async function shippagusain() {
//     try{
// let store = await promise7;
//     console.log(store)
//     }catch (error){
//         console.log(error)
//     }
    

// }

// shippagusain();



async function getAlluser() {

    try{
 const response =  await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await response.json()
   console.log(data[0].name)
    }catch(error){
console.log(error)
    }
  
}

getAlluser()