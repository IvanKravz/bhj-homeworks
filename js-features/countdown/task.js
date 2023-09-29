const timer = document.getElementById('timer')

let intervalID = setInterval(function(){
    timer.textContent = Number(timer.textContent) - 1;
    
    if (timer.textContent == 0) {
        alert('Вы победили в конкурсе!')
    } 
    if (timer.textContent <= 0) {
        clearInterval(intervalID);
    } 
}, 1000);

