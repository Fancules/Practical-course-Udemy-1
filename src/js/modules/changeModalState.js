import checkInputNumbers from './checkInputNumbers';

function changeModalState(state) {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');
    
    checkInputNumbers('#height');
    checkInputNumbers('#width');

    function createObject(selector, event, prop) {
        const button = document.querySelector(".popup_calc_profile_button");


        selector.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case "SPAN":
                        state[prop] = i;
                        break;
                    case "INPUT":
                        if(item.getAttribute('type') == 'checkbox'){
                            i === 0 ? state[prop] = 'cold' : state[prop] = 'warm';
                            selector.forEach((chk, j) => {
                                    chk.checked = false;
                                if(j == i){
                                    chk.checked = true;
                                }
                            });
                        }else {
                            item.style.borderColor = "";
                            state[prop] = item.value;
                        }
                        break;
                    case "SELECT":
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }
    
    createObject(windowForm, 'click', 'form');
    createObject(windowWidth, 'input', 'width');
    createObject(windowHeight, 'input', 'height');
    createObject(windowType, 'change', 'type');
    createObject(windowProfile, 'input', 'profile');
}

export default changeModalState;
