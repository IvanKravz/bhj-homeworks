const img = document.querySelector('img');
let url = new URL('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
const xhr = new XMLHttpRequest();

xhr.open('GET', url);
xhr.send();

xhr.onload = function() {
    if (xhr.status != 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
        img.classList.remove('loader_active');
        valutesCourse = JSON.parse(xhr.response).response.Valute;
        for (const element in valutesCourse) {
            items = document.getElementById('items');
            const item = document.createElement('div');
            item.classList.add('item')
            item.innerHTML = `
                <div class="item__code">
                    ${valutesCourse[element].CharCode}
                </div>
                <div class="item__value">
                    ${valutesCourse[element].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>`;

            items.append(item);
        }
    }
  };
