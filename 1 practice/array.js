// const firstArr = [1,2,3,4,5]
// const SecondArr = [6,7,8,9,10]
// firstArr.push(SecondArr)     ////phla tarika pr esme array ke ek array ka dabba aa jata hai
// console.log(firstArr);


// const firstArr = [1,2,3,4,5]
// const SecondArr = [6,7,8,9,10]
// let thirdArr = firstArr.concat(SecondArr)    ////// dusra treeka theek hai pr best nahi hai eske bdle spread operator ka use hota hai
// console.log(thirdArr);


// const firstArr = [1,2,3,4,5]
// const SecondArr = [6,7,8,9,10]
// let thrdArr = [...firstArr, ...SecondArr];   ////ye wala best treeka hai spread operator ke help se karke
// console.log(thrdArr);



//// flat ka kaam hota hai andr ke andr ke andr aray ko ek he uspe laa jata hai/////



console.log(Array.isArray("shivam"))   /////eska mtlb hai isaray check krta hai ke yaa array me convert hua ya nahi yaa ye array hai ya nhi pr esme to saaf dikhra hai ke ye string hai


console.log(Array.from("shippa"));    /// ye form hame ek array bana ke deta hai


console.log(Array.from({name: "shippa"}))  //// ye ek empty object bana ke dera hai jiska matlb hai esko pata nahi hai key ko banana yaa value ko banana hai

 let scoreA = 100
 let scoreB = 200      //////.of sare values ko array bana deta hai easily
 let scoreC = 300
console.log(Array.of(scoreA, scoreB, scoreC));


