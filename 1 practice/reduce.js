const arr = [2,3,4,5]
let result = arr.reduce((acc, currval)=>acc*currval, 1)
console.log(result);


const arr2 = [5,2,322,5,6,75,12]
let result2 = arr2.reduce((acc, currval)=>currval<acc ? acc : currval, 0)
console.log(result2);
