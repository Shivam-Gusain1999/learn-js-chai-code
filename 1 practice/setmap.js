// const myval = new Set();
// myval.add('shippa');
// myval.add(27);
// myval.add(5);
// myval.add(7);
// myval.add(27);
// console.log(myval);    //////set sirf unique value bhejta hai or unique value he store karta hai bss 


const myval = new Set();
myval.add('shippa');
myval.add(27);
myval.add(5);
myval.add(7);
myval.add(274);
myval.add(274);
                                    ///ye wala treeka for of ke help se hai
for(const val of myval){
console.log(val);

}



///////ab map ka use krte hain////

const usrDetails = new Map();
usrDetails.set('namee', 'shivam')
usrDetails.set('lastname', 'gusain')
usrDetails.set('age', 23)

// console.log(usrDetails);

for(const [key, val] of usrDetails){
    // console.log(`${key} : ${val}`);
    
}


/////////////has ka use map ke ya set ke sath hota hai true or false value check karne ke lie///// vvimp hai ye


////get ka use jo key me value hoge usko nikaalne ke liye hota hai /// user.get[name]  return karega shivam 





