function SetUsername(username){
  this.usernaam = username;
  console.log("called");
}

function createUser(username, email, password){
  SetUsername.call(this, username);
  this.emailkanaam = email;
  this.passwordkanaam = password;
}

const shippa = new createUser("chai", "chai@fb.com", "123");
console.log(shippa);
