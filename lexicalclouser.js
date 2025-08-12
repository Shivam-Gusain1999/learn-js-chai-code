function outer() {
  function inner() {
    console.log("Inner function");
  }
  inner(); // ✅ andar se call ho gaya
}

outer();


// ///2. Function ko kahaan se call kar sakte ho
// Agar function global scope me define hai (jaise tere example me), to wo poore code me kahin se bhi call ho sakta hai.

// Agar function kisi block ya doosre function ke andar define hai, to wo uske bahar se call nahi ho sakta kyunki uska reference accessible nahi hoga.




///// ye closer ka hai///

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();
