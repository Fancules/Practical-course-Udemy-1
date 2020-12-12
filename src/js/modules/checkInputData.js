function checkInputData () {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelector('#width'),
        windowHeight = document.querySelector('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    if(windowHeight.value ==""){
        windowHeight.style.borderColor = "red";
        return false;
    }else if(windowWidth.value == ""){
        windowWidth.style.borderColor = "red"
    }else {
        return true;        
    }
}

export default checkInputData;