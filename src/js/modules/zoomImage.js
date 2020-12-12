function zoomImage () {
    const bg = document.createElement('div'),
          img = document.createElement("img"),
          images = document.querySelector(".works");

    bg.classList.add('popup');
    images.append(bg);
    bg.append(img);
    bg.style.display = "none";
    bg.style.justifyContent = 'center';
    bg.style.alignItems = 'center';

    images.addEventListener("click", e => {
        e.preventDefault();
        
        const target = e.target;
        
        if (target && target.classList.contains("preview")){
            bg.style.display = "flex";
            document.body.style.overflow = "hidden";            
            const link = target.parentNode.getAttribute("href");
            img.setAttribute('src', link);
            if(img.offsetHeight && img.offsetWidth){
                img.style.width = Math.floor((img.offsetWidth / document.documentElement.clientWidth) * 100) + "%";
                img.style.height = Math.floor((img.offsetHeight / document.documentElement.clientHeight) * 100) + "%";
            }
        }
        
        if (target && target.matches("div.popup")) {
                bg.style.display = "none";
                document.body.style.overflow = "";
           }
    });

}

export default zoomImage;