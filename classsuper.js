////////ess code me super keyword ka use samjenge///////

class user{
    constructor(username){
this.username = username

    }
    logMe(){
        console.log(`account is logged in by ${this.username}`)
    }
}

class student extends user{   ///////ye child class hai ////
    constructor(username, rollnmbr, email){
        super(username)
        this.rollnmbr = rollnmbr,
this.email = email
    }

    addcourse(){
        console.log(`a new student naam ye hai ${this.username}`)
    }
}

const shippa = new student('shippa', 34, 'shippagusaingmail.com')  /////ye jo hai ye hai addcourse k lie bana or ye add course me studetn wale me easily chal jara hai
shippa.addcourse()
shippa.logMe() /////child class apne parent ka sb kuch inherit kar sakta hai eslie student ne user ke saare property inherit krdi//


const gusain = new user('bannagusain')
gusain.logMe()
// gusain.addcourse()

// console.log(gusain === user) ////false
// console.log(gusain === student) ////false

// console.log(shippa === user) ///false
// console.log(shippa === student) ////false

// // console.log(gusain instanceof user)  ///// true

// console.log(gusain instanceof student) //// false

console.log(shippa instanceof user) ///// true
console.log(shippa instanceof student) /// true