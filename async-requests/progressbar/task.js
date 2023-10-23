const xhr = new XMLHttpRequest();
const url = new URL('https://students.netoservices.ru/nestjs-backend/upload');

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    xhr.open('POST', url);
    

    const progress = document.getElementById('progress');
    
    xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
            progress.value = e.loaded / e.total
        }
    })

    xhr.onreadystatechange = function () {
        if (xhr.readyState === xhr.DONE) {
            alert('Файл отправлен')
        } else {
            alert(`Ошибка: ${xhr.status}`)
        }
    }
    
    const formPost = new FormData(form)
    xhr.send(formPost)
    })
