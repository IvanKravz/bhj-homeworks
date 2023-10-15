const books = document.querySelectorAll(".font-size");

books.forEach(elem => {
    elem.addEventListener("click", (event) => {
        
        event.preventDefault()
        
        books.forEach(el => {
            el.classList.remove("font-size_active")
        })

        elem.classList.add("font-size_active")
    
        const book = document.querySelector(".book");
        
        const size = elem.getAttribute("data-size");
        
        if (size === 'small') {
            book.className = "book book_fs-small"
        }
        if (size === 'big') {
            book.className = "book book_fs-big"
        }
        if(!size) {
            book.className = "book" 
        }
    })
});
