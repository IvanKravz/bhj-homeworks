const title = document.querySelectorAll(".has-tooltip");

title.forEach((elem) => {
    elem.addEventListener("click", (event) => {
        event.preventDefault();
        
        const tooltip = event.target.querySelector(".tooltip");
        const tolltipActive = document.querySelector(".tooltip_active");

        if (tooltip && tooltip.classList.contains('tooltip_active')) {
            tooltip.remove('tooltip_active');

        } else if (tooltip && tolltipActive) {
            tolltipActive.classList.remove('tooltip_active');
            tooltip.classList.add('tooltip_active');
        } else {
            if (tolltipActive) {
            tolltipActive.classList.remove('tooltip_active');
        }

        elemTitle = event.target.title;
        const tooltipElem = document.createElement('div');
        tooltipElem.innerHTML = elemTitle;
        tooltipElem.classList = "tooltip tooltip_active";
      
        event.target.insertAdjacentElement("afterbegin", tooltipElem);
        
        positionElement(tooltipElem);
        }

        function positionElement (element) {
            
            let coordsElement = element.getBoundingClientRect()
            let targetRect = event.target.getBoundingClientRect()
            
            let left = targetRect.left + (event.target.offsetWidth - element.offsetWidth) / 2
            if(left < 0) left = 2;

            let top = targetRect.top - element.offsetHeight - 3
            if (top < 60) top = targetRect.top + event.target.offsetHeight + 3

            element.style.left = left + 'px'
            element.style.top = top + 'px'
        }   
    })
})