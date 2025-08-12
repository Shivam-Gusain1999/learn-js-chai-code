//// static ek trh se child ko parent ka access krne se rokta hai///

class user {
    constructor(username, id){
        this.username = username
        this.id = id
    }

    useraccess(){
        console.log(`your username is ${this.username}`)
    }
   static getid (){
        return 1234;
    }
}

class student extends user  {
constructor(username, subject){
    super(username)
    this.subject = subject
}
}

const values = new student('shippa', 'computer')
values.useraccess()
// console.log(values.getid()) ///// abhi id bhi print hoge pr ab eske waaalw me nahi hoge kyn kee ab mai id me static laga chuka hunga//

console.log(student.getid()) /// static keyword se koi method ya property class ke object se nahi, balki direct class se access hota hai.


// console.log(values.getid())  //// static me id ne hoge acess naa inherit hoge//




// const shippa = new user('shivam')
// shippa.useraccess()

// console.log(shippa.getid())