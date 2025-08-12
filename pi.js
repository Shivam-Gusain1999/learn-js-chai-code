console.log(Object.getOwnPropertyDescriptor(Math, "PI"));


//
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false

//  output me ye aata hai hum en values ko chang ni kar sktee hain ye node ke engine ke andr se he aishe he bani hue hai 
/// agr tum apna koy object banate ho or tum chaate ho usko koy third person access naa kar paare to tum vi wirtable enumerable configurable false kar skte ho


// const obj = {};
// Object.defineProperty(obj, "name", {
//   value: "Shivam",
//   writable: false
// });

// obj.name = "Ramesh"; // ❌ Change won't happen
// console.log(obj.name); // Shivam



// const obj = {};
// Object.defineProperty(obj, "age", {
//   value: 26,
//   enumerable: false
// });

// console.log(Object.keys(obj)); // []  (age hidden hai)





// const obj = {};
// Object.defineProperty(obj, "country", {
//   value: "India",
//   configurable: false
// });

// delete obj.country; // ❌ Delete not allowed
// console.log(obj.country); // India
