const tasksList = document.querySelector('.tasks__list');
const form = document.querySelector('.tasks__control')
const text = document.querySelector('.tasks__input');

function addTask(task) {
    taskHTML = `
        <div class="task">
            <div class="task__title">
            ${task}
            </div>
        <a href="#" class="task__remove">&times;</a>
        </div>`
    
    tasksList.insertAdjacentHTML("beforeEnd", taskHTML)
}

form.addEventListener('submit', () => {
    if(text.value.trim()) {
        addTask(text.value)
        text.value = ''
    }
})

function removeTask() {
    const remove = document.querySelectorAll('.task__remove');
    remove.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            event.preventDefault()
            console.log(1)
            elem.parentElement.remove()
        })
    })
}
