const img = document.querySelector('img');
let url = new URL('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
const xhr = new XMLHttpRequest();

// xhr.addEventListener('readystatechange', () => {
//     if (xhr.readyState === xhr.DONE) {
//         img.classList.remove('loader_active')
//     }
// })


xhr.open('GET', url);
xhr.send()

xhr.onload = function() {
    if (xhr.status != 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
        img.classList.remove('loader_active')
        valutesCourse = JSON.parse(xhr.response).Valute
        console.log(valutesCourse);

    }
    
  };
