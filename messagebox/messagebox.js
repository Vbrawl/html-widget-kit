


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

    hwk.prompt = async function(message) {
        return await new Promise((resolve, reject) => {
            try {
                const msg_box = new hwk.MessageBox();
                const panel = msg_box.getElementsByClassName("hwk-messagebox-panel")[0];
                const text_widget = document.createElement("div");
                const text_input = document.createElement("input");
                const ok_button = document.createElement("button");
                const cancel_button = document.createElement("button");
    
                msg_box.classList.add("hwk-messagebox-prompt");
    
                text_widget.classList.add("hwk-messagebox-prompt-text");
                text_widget.innerText = message; // enter = ok
    
                text_input.classList.add("hwk-messagebox-prompt-input");
    
                ok_button.classList.add("hwk-messagebox-prompt-ok-button");
                ok_button.innerText = "Ok"; // input value
    
                cancel_button.classList.add("hwk-messagebox-prompt-cancel-button");
                cancel_button.innerText = "Cancel"; // null
    
                panel.appendChild(text_widget);
                panel.appendChild(text_input);
                panel.appendChild(ok_button);
                panel.appendChild(cancel_button);
                document.body.appendChild(msg_box);
    
                const ok_handler = () => {
                    const input_value = text_input.value;
                    msg_box.remove();
                    resolve(input_value);
                }
                ok_button.addEventListener("click", ok_handler);
                text_input.addEventListener("keypress", (evt) => {
                    if(evt.key === "Enter" && !evt.shiftKey) { ok_handler(); }
                });
    
                cancel_button.addEventListener("click", () => {
                    msg_box.remove();
                    resolve(null);
                });
            }
            catch(e) { reject(e); }
        });
    }

    customElements.define("hwk-messagebox", hwk.MessageBox, {extends: "div"});
}(window.hwk = window.hwk || {}));