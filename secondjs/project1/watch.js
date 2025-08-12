const watch = document.querySelector('.watch')
watch.style.backgroundColor = "orange"
watch.style.padding = "20px"
watch.style.borderRadius = "10px"
watch.style.position = "absolute"
watch.style.width = "100px"
watch.style.textAlign = "center"

 const timer = setInterval(function(){
let date = new Date();
let realdate = date.toLocaleTimeString();
watch.innerHTML = realdate
}, 1000)

clearInterval(timer)