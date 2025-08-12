////// espe do treeeke hain ek to agr class bana di jaae to kaise kaam hoga or bina class ke kaise kaam hora thaa abhi tak///


///ye function ka use karke banra hai jo eska use prototype me bhi hoga prototype ke help se banega yee sab kynki sbhi cheej apne aap me object hain to jo bhi banega sb object banege prototype ke help se function ko v object bana dere hain



// function user(username, email, password){
// this.username = username,
// this.email = email,
// this.password = password
// }

// user.prototype.encryptpassword = function(){
//     return `your password is ${this.password}abc`
// }

// user.prototype.changeusername = function(){
//     return `your username change into ${this.username}`
// }
// const shippa =  new user('shippa', 'shippagusian@gmail.com', 'kalnath123')

// console.log(shippa.encryptpassword())
// console.log(shippa.changeusername())



/////ek tareka ye hai class ke help se karna esse easy lgta hai chlo esko bhi dekhte hain///

class user {
    constructor(username, email, password){
        this.username =username,
        this.email = email,
        this.password = password
    }
    encryptpassword(){
        return `your password is ${this.password}xyz`
    }
}

const data = new user('banna', 'bannn388@gmail.com', 'shutup')
console.log(data.encryptpassword())