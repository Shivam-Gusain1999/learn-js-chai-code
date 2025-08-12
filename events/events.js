//////event bubbling :- event bubbling me child se parent tk sb access or click hota hai, agr suppose child me bhi class di hai or parent me bhi class di hai or event listner child me lagaya hai to dono print honge .................pr agr event parent me lagaya hai to parent he print hoga child print nahi hoga....///

//// event Jab tum kisi inner element pe click karte ho, to event sabse pehle us inner element pe chalta hai, fir uska parent, fir uska parent… aise outer elements tak chalta rehta hai.////



/////Direction: Outer → Inner  ///event capturing//

/*Isme event sabse pehle outer se start hota hai, fir inner tak jata hai.

🔹 By default, JavaScript capturing off hoti hai.
🔹 Use addEventListener with true as third parameter:*/



/////stop propogation ke help se event ruk jata hai////
////prevent default ke help se cheeje render nahi hote jaise a tag hai mere pass to e.preventDefault() ke use krke google ka link he open he nahi hoga///


// let images = document.getElementById('images')
// images.addEventListener('click', ()=>{
//     console.log("image click hue jo parent hai sbki")
// }, true) //// true karne se event capturing hote hai 

// let pika = document.getElementById('id1')
// pika.addEventListener('click', ()=>{
//     console.log("pikachu click hua")             /// or ya to default ho ya false event bubbling hote hai//
// }, )

// let google = document.getElementById('link')
// google.addEventListener('click', (e)=>{         ///stop propogation se kuch nahi hota jispe click karoge wahi chaelga //
//  e.preventDefault();
// console.log("google clicked hua");

// }) 


// let pika = document.getElementById("id1")
// let images = document.getElementById('images')
// images.addEventListener('click', (e)=>{
//     console.log(e);
//     if(e.target.alt === 'pika'){     /////////e.target.parentNode karke hota hai kuch wo imp h
// pika.style.display = "none"
//     }
//     console.log("image click hue jo parent hai sbki")
// })

document.querySelector('#images').addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeit = e.target.parentNode
        removeit.remove();
    }
})