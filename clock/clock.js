const time = document.querySelector('#time')
const date = document.querySelector('#date')

setInterval(() => {
    let clock1 = new Date();
    time.innerHTML = clock1.toLocaleTimeString();
    let clock2 = new Date();
    date.innerHTML = clock2.toLocaleDateString();
   },1000);