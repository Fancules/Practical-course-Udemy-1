import checkInputNumbers from "./checkInputNumbers";

const form = function (state) {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    const message = {
        loading: "Loading...",
        done: "Already done!",
        failure: "Something went wrong!"
    };

    checkInputNumbers('input[name="user_phone"]');

    forms.forEach(item => {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(item);
            if (e.target.hasAttribute('data-form')) {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            const msg = document.createElement('div');
            msg.classList.add('status');
            item.appendChild(msg);
            postData("./assets/server.php", formData)
                .then(data => console.log(data))
                .catch(msg.textContent = message.done)
                .finally(() => {
                    inputs.forEach(item => {
                        item.value = "";
                    });
                    setTimeout(() => {
                        msg.remove();
                    }, 7000);
                });
        });

        function postData(url, data) {
            return fetch(url, {
                method: "POST",
                body: data
            }).then(response => response.text());
        }
    });
};
export default form;
