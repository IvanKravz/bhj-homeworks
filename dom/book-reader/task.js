const books = document.querySelectorAll(".font-size");

books.forEach(elem => {
    elem.addEventListener("click", (event) => {
        
        event.preventDefault()
        
        books.forEach(el => {
            el.classList.remove("font-size_active")
        })

        elem.classList.add("font-size_active")
        

        const reader = document.querySelector(".book");
        const size = event.target.dataset.size;
        
        if (size) {
            reader.className = `book book_fs-${size}`;
        } else {
            reader.className = "book";
        }  
        console.log(size)    
    })
});




        
  