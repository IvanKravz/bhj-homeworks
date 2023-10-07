const tabs = document.querySelectorAll(".tab")
const TabContent = document.querySelectorAll(".tab__content") 


for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        
        let tabsCurrent = tabs[i].parentElement.children;
        for(const tab of tabsCurrent) {
            tab.classList.remove("tab_active");
        }
        
        tabs[i].classList.add("tab_active");
        
        
        let ContentCurrent = tabs[i].parentElement.nextElementSibling.children;
        for(const Content of ContentCurrent) {
            Content.classList.remove("tab__content_active");
        }
        
        TabContent[i].classList.add("tab__content_active");
    })
}
