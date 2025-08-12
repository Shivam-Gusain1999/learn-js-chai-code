class User {
  constructor(email, password) {
    this._email = email;
    this._password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password(){
    return this._password.toUpperCase();
  }
  set password(value){
    this._password = value;
  }
}

const tea = new User('h@hc.com', 'abc');

console.log(tea.email); // 'H@HC.COM'
tea.email = 'shivam@code.com';
console.log(tea.email); // 'SHIVAM@CODE.COM'

console.log(tea.password)










// 1️⃣ Ek object bana with private-like properties
const User = {
  _email: 'h@hc.com',
  _password: 'abc',

  // 2️⃣ Getter method
  get email() {
    console.log("Getter called");
    // `this` => jis object se property access hui
    return this._email.toUpperCase();
  },

  // 3️⃣ Setter method
  set email(value) {
    console.log("Setter called with:", value);
    // `this` => jis object pe property set hui
    this._email = value;
  }
};

// 4️⃣ Object.create se naya object bana jiska prototype User hai
const tea = Object.create(User);

// 5️⃣ Jab tea.email access kiya → getter call hota hai
console.log(tea.email);  // 'H@HC.COM'

// 6️⃣ Jab tea.email ko assign kiya → setter call hota hai
tea.email = "shivam@code.com";  // Setter called

// 7️⃣ Ab dubara getter call hota hai
console.log(tea.email);  // 'SHIVAM@CODE.COM'

