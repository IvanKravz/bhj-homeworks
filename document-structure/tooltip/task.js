const title = document.querySelectorAll(".has-tooltip");

title.forEach((elem) => {
    const tooltipElem = document.createElement('div');
    tooltipElem.classList = "tooltip";
    tooltipElem.textContent = elem.title;
    
    elem.addEventListener("click", (event) => {
        event.preventDefault();

        const elems = Array.from(document.querySelectorAll(".tooltip_active"));
        const findElem = elems.find(elem => elem.classList.contains("tooltip_active"));
        console.log(tooltipElem)
        elem.insertAdjacentElement("afterEnd", tooltipElem);
        
        if (!findElem) {
            tooltipElem.classList.add("tooltip_active");
        } else {
            if (findElem !== tooltipElem) {
                tooltipElem.classList.add("tooltip_active");
            }
            findElem.classList.remove("tooltip_active");
        }

        positionElement(tooltipElem);
    
        function positionElement (element) {
            
            let targetRect = event.target.getBoundingClientRect();
            
            let left = targetRect.left + (event.target.offsetWidth - element.offsetWidth) / 2;
            if(left < 0) left = 2;

            let top = targetRect.top - element.offsetHeight - 3;
            if (top < 60) top = targetRect.top + event.target.offsetHeight + 3;

            element.style.left = left + 'px';
            element.style.top = top + 'px';
        }   
    })
})