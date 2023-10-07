const DropdownValue = document.querySelector(".dropdown__value");
const Dropdownlist = document.querySelector(".dropdown__list");
const DropdownLink = document.querySelectorAll(".dropdown__link");


function UpDownList() {
    if (Dropdownlist.classList.contains("dropdown__list_active")) {
        Dropdownlist.classList.remove("dropdown__list_active");
    } else {Dropdownlist.classList.add("dropdown__list_active");}
}

DropdownValue.addEventListener("click", UpDownList)

DropdownLink.forEach(element => {
    element.onclick = () => {
        DropdownValue.textContent = element.textContent;
    };
    element.addEventListener('click', UpDownList);
});