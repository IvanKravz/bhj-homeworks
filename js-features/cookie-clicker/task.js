const img = document.getElementById('cookie');
const clickcount = document.getElementById('clicker__counter');

img.onclick = () => {
    
    clickcount.textContent = Number(clickcount.textContent) + 1;

    if (img.width === 200) {
    img.width += 20
    } else if (img.width > 200) {
        img.width -= 20
    }
}
