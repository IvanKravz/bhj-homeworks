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
    
    tasksList.insertAdjacentHTML("beforeEnd", taskHTML);
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(text.value.trim()) {
        addTask(text.value);
        text.value = ''; 
        removeTask()
    }
});

function removeTask() {
    const remove = document.querySelectorAll('.task__remove');
    remove.forEach(el => {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            dd = event.target.closest('.task')
            dd.remove();
        }) 
    })
}
    
            
        
        
            
        