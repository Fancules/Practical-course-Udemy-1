const tabs = (headerSelector, tabsSelector, contentSelector, active, display = "block") => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabsSelector),
          content = document.querySelectorAll(contentSelector);
    
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = "none";
        });
        
        tab.forEach(item => {
            item.classList.remove(active);
        });
    }
    
    function showTabContent(i) {
        content[i].style.display = display;
        tab[i].classList.add(active);
    }
    
    header.addEventListener("click", (e) => {
        if(e.target && (e.target.classList.contains(tabsSelector.replace(/\./, "")) ||  e.target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))){
            tab.forEach((item, index) => {
                if(e.target == item || e.target.parentNode == item){
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });
    
};



export default tabs;