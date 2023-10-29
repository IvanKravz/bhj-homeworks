const modal = document.getElementById('subscribe-modal');

function showModal() {
    if (!getCookie('modal')) {
        modal.classList.add("modal_active");
    }
};  

showModal();

const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    setCookie('modal', 'modal_active');
    modal.classList.remove('modal_active');
})
    
function setCookie(name, value) {
    document.cookie = `${name}=${encodeURIComponent(value)}; samesite=none; secure`;
}

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(`${name}=`));
    return cookie;
}

