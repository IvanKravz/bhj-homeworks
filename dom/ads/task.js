const rotator = document.querySelectorAll(".rotator__case");

rotator.forEach((el) => {
    el.style.color = el.getAttribute("data-color")
})

let index = 0

function rotate () {
    rotator[index].classList.remove("rotator__case_active")    
    index = (index + 1) % rotator.length
    rotator[index].classList.add("rotator__case_active")
    let interval = rotator[index].getAttribute("data-speed")
    
    setTimeout(rotate, interval)
}

rotate()