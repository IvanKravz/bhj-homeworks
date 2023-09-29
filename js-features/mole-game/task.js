let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);  // выбор лунки по index
let counterDead = 0;
let counterLost = 0;

for (let index = 1; index <= 9; index++) {
    let hole = getHole(index);
    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
        counterDead++;
        deadMole.textContent = counterDead;
        } else {
        counterLost++;
        lostMole.textContent = counterLost;
        }
        
        if (counterDead === 10) {
        alert("Вы победили");
        location.reload()
        }
        if (counterLost === 5) {
        alert("Вы проиграли");
        location.reload()
        }
    }
};