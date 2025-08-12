////filte me condition dene pdtee hai tb jo satisfy hote hain tb unhe he return karta hai wo 

////map me condition ne dene hote ye value update krke deta hai.....///


// const arr =[11,13,2,5,6,7,83,43,22]
// const result = arr.filter((val)=> {
// return val < 10
// })
// console.log(result);                        ////////////////ye filter ke examples hain.......

// const largr = arr.filter((val)=> val>5 )
// console.log(largr);



/////////ab map krte hai..........          

const arr = [3,4,5,6,2,42]
let result = arr.map((val)=> val *4 )

// console.log(result);


const arr2 = [3,4,5,6,2,42]
let result2 = arr2.map((val)=> val*2).map((val)=>val+4).filter((val)=> val<15).reverse().sort((a, b)=> a-b)
console.log(result2);

