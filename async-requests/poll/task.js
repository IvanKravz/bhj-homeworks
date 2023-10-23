const xhr = new XMLHttpRequest();
const url = new URL('https://students.netoservices.ru/nestjs-backend/poll');

xhr.open('GET', url);
xhr.send();

xhr.onload = function() {
    if (xhr.status != 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
        let data = JSON.parse(xhr.responseText).data;
        question = data.title;
        answers = data.answers;
        
        const pollTitle = document.querySelector('.poll__title');
        const elem = document.createElement('h2');
        pollTitle.append(elem);
        elem.append(question);
        
        const pollAnswers = document.getElementById('poll__answers');
        
        for (const index in answers) {
            const button = document.createElement('button')
            pollAnswers.append(button);
            button.classList.add('poll__answer');
            button.setAttribute('id', index);
            button.textContent = answers[index];
            
            button.addEventListener('click', (event) => {
                alert('Спасибо, ваш голос засчитан!');
            })
        };
    };
}