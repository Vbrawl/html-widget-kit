


(function(hwk) {

    hwk.MessageBox = class extends HTMLDivElement {
        constructor() {
            super();
            this.setAttribute("is", "hwk-messagebox");

            const panel = document.createElement("div");
            panel.classList.add("hwk-messagebox-panel");
            while(this.childNodes.length != 0) {
                panel.appendChild(this.childNodes[0]);
            }
            this.appendChild(panel);
        }
    }


    hwk.alert = async function(message) {
        return await new Promise((resolve, reject) => {
            try {
                const msg_box = new hwk.MessageBox();
                const panel = msg_box.getElementsByClassName("hwk-messagebox-panel")[0];
                const text_widget = document.createElement("div");
                const ok_button = document.createElement("button");

                text_widget.classList.add("hwk-messagebox-alert-text");
                text_widget.innerText = message;

                ok_button.classList.add("hwk-messagebox-alert-ok-button");
                ok_button.innerText = "Ok";

                panel.appendChild(text_widget);
                panel.appendChild(ok_button);
                document.body.appendChild(msg_box);

                ok_button.addEventListener("click", () => {
                    msg_box.remove();
                    resolve();
                });
            }
            catch(e) { reject(e); }
        });
    }

    hwk.confirm = async function(message) {
        return await new Promise((resolve, reject) => {
            try {
                const msg_box = new hwk.MessageBox();
                const panel = msg_box.getElementsByClassName("hwk-messagebox-panel")[0];
                const text_widget = document.createElement("div");
                const ok_button = document.createElement("button");
                const cancel_button = document.createElement("button");

                msg_box.classList.add("hwk-messagebox-confirm");

                text_widget.classList.add("hwk-messagebox-confirm-text");
                text_widget.innerText = message;

                ok_button.classList.add("hwk-messagebox-confirm-ok-button");
                ok_button.innerText = "Ok";

                cancel_button.classList.add("hwk-messagebox-confirm-cancel-button");
                cancel_button.innerText = "Cancel";

                panel.appendChild(text_widget);
                panel.appendChild(ok_button);
                panel.appendChild(cancel_button);
                document.body.appendChild(msg_box);


                ok_button.addEventListener("click", () => {
                    msg_box.remove();
                    resolve(true);
                });
                cancel_button.addEventListener("click", () => {
                    msg_box.remove();
                    resolve(false);
                })
            }
            catch(e) { reject(e); }
        })
    }

    customElements.define("hwk-messagebox", hwk.MessageBox, {extends: "div"});
}(window.hwk = window.hwk || {}));