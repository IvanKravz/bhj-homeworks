const editor = document.getElementById('editor');

editor.addEventListener('input', saveText);

function saveText() {
    localStorage.setItem('text', editor.value);
}

window.addEventListener('load', loadText);

function loadText() {
    editor.value = localStorage.getItem('text');
}

const clearBtn = document.querySelector('.clearBtn');

clearBtn.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('text');
});