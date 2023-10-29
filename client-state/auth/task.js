const form = document.getElementById('signin__form');

function windowWelcome(userId) {
    const welcome = document.querySelector('.welcome');
    const idWelcome = document.getElementById('user_id');
    const signin = document.getElementById('signin');
    signin.classList.remove('signin_active')
    
    idWelcome.textContent = userId
    welcome.classList.add('welcome_active');
    localStorage.setItem('user_id', userId);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    const url = new URL('https://students.netoservices.ru/nestjs-backend/auth');
    
    xhr.open('POST', url);

    const formPOST = new FormData(form);

    xhr.onload = function () {
        if (xhr.status == 201) {
            const data = JSON.parse(xhr.response);
            windowWelcome(data.user_id);
        } else {
            alert('Неверный логин/пароль')
        }
    };
    
    xhr.send(formPOST)
});











