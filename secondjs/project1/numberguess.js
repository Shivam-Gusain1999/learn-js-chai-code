const form = document.querySelector('form')
const result = document.querySelector('.result')
const yourNo = document.querySelector('.yourno')
const inputguess = document.querySelector('#guess')
const previousdisplay = document.querySelector('.previousguess');
const remainingdisplay = document.querySelector('.remainingguess')

let previous = [];
let remainingguess = 10;
form.addEventListener('submit', (e)=>{
e.preventDefault();

if(remainingguess === 0){
    result.innerHTML = "no more guesses left"
    return
}

const inputfield = parseInt(inputguess.value)

if(previous.length <= 10){
previous.push(inputfield);
remainingguess --;
}

// console.log(e)
    
result.innerHTML = `Result : ${ Math.floor(Math.random()*100+1)}`

// console.log(inputguess)

yourNo.innerHTML = ` Your no : ${inputfield}`
previousdisplay.innerHTML = `Previous guesses : ${previous.join(',')}`

remainingdisplay.innerHTML = `remaining guesses : ${remainingguess}`
inputguess.value = ""
})