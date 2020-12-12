import checkInputData from './checkInputData';

const modals = () => {
    function bindModal(clickSelector, modalSelector, closeSelector, checkBackground = true) {
        const modal = document.querySelector(modalSelector);
        document.querySelectorAll(clickSelector).forEach(item => {
            item.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                if(clickSelector === ".popup_calc_button"){
                    if(checkInputData()){
                        openModal();
                    }
                }else {
                    openModal();
                }
            });
        });
        
        function openModal() {
            if (document.querySelector('[data-modal]')) {
                document.querySelector('[data-modal]').style.display = 'none';
                    document.querySelector('[data-modal]').removeAttribute('data-modal');

            }
            modal.style.display = 'block';
            document.body.style.overflow = "hidden";
            document.body.classList.add("modal-open");
            modal.setAttribute('data-modal', "");
            clearInterval(timer);
        }

        const timer = setInterval(() => {
            if (modalSelector == ".popup") {
                modal.style.display = 'block';
                document.body.style.overflow = "hidden";
                document.body.classList.add("modal-open");
                clearInterval(timer);
            }
        }, 60000);

        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = "";
            document.body.classList.remove("modal-open");
            if (document.querySelector('[data-modal]')) {
                document.querySelector('[data-modal]').removeAttribute('data-modal');
                }
        }

        document.querySelector(closeSelector).addEventListener("click", () => {
            closeModal();
        });

        modal.addEventListener("click", (e) => {
            if (e.target == modal && checkBackground) {
                closeModal();
            }
        });

    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', ".popup_calc", ".popup_calc_close");
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};

export default modals;
