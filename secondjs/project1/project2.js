let form = document.querySelector('form')
let result = document.querySelector('#result')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
 const height = parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.querySelector('#weight').value)

if(isNaN(height) || isNaN(weight) || height<0 || weight <0 ){
result.textContent = 'please enter valid number'
return;
}
else{
  const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

      result.textContent = `Your BMI is ${bmi}`;
      form.style.backgroundColor = "orange"
      return;
}



})