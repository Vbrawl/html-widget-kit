


(function(hwk) {
    /**
     * TemplateObject = {
     *  tag: 'div',
     *  classes: ['class1', 'class2'],
     *  text: 'Lorem Ipsum',
     *  events: {click: () => {}}
     * }
     * 
     * @param {Array<Object>} templates Where object is described above as `TemplateObject`
     * @returns {hwk.Popup}
     */
    hwk.createMessageBox = async function(templates) {
        await customElements.whenDefined("hwk-popup");

        const msg_box = new hwk.Popup();
        msg_box.setAttribute("hwk-popup-autoclose", "false");
        msg_box.classList.add("hwk-messagebox");

        for (let i = 0; i < templates.length; i++) {
            const template = templates[i];
            const element = document.createElement(template.tag);
            element.classList.add(...template.classes);
            element.innerText = template.text;

            if(template.events) {
                for (const eventName in template.events) {
                    if (Object.hasOwnProperty.call(template.events, eventName)) {
                        const eventHandler = template.events[eventName];
                        element.addEventListener(eventName, eventHandler);
                    }
                }
            }

            msg_box.appendChild(element);
        }

        return msg_box;
    }


    hwk.alert = async function(message) {
        return await new Promise(async (resolve) => {
            const msg_box = await hwk.createMessageBox([{
                tag: "div",
                classes: ["hwk-messagebox-text"],
                text: message
            }, {
                tag: "button",
                classes: ["hwk-messagebox-ok-button"],
                text: "Ok",
                events: {
                    click: () => {
                        msg_box.remove();
                        resolve();
                    }
                }
            }]);

            document.body.appendChild(msg_box);
        });
    }

    hwk.confirm = async function(message) {
        return await new Promise(async (resolve) => {
            const msg_box = await hwk.createMessageBox([{
                tag: "div",
                classes: ["hwk-messagebox-text"],
                text: message,
            }, {
                tag: "button",
                classes: ["hwk-messagebox-ok-button"],
                text: "Ok",
                events: {
                    click: () => {
                        msg_box.remove();
                        resolve(true);
                    }
                }
            }, {
                tag: "button",
                classes: ["hwk-messagebox-cancel-button"],
                text: "Cancel",
                events: {
                    click: () => {
                        msg_box.remove();
                        resolve(false);
                    }
                }
            }]);

            msg_box.classList.add("confirm");
            document.body.appendChild(msg_box);
        });
    }

    hwk.prompt = async function(message) {
        return await new Promise(async (resolve) => {
            const msg_box = await hwk.createMessageBox([{
                tag: "div",
                classes: ["hwk-messagebox-text"],
                text: message
            }, {
                tag: "input",
                classes: ["hwk-messagebox-input"],
                text: "",
                events: {
                    keypress: (evt) => {
                        if(evt.key === "Enter" && !evt.shiftKey) {
                            const input_value = msg_box.getElementsByClassName("hwk-messagebox-input")[0].value;
                            msg_box.remove();
                            resolve(input_value);
                        }
                    }
                }
            }, {
                tag: "button",
                classes: ["hwk-messagebox-ok-button"],
                text: "Ok",
                events: {
                    click: () => {
                        const input_value = msg_box.getElementsByClassName("hwk-messagebox-input")[0].value;
                        msg_box.remove();
                        resolve(input_value);
                    }
                }
            }, {
                tag: "button",
                classes: ["hwk-messagebox-cancel-button"],
                text: "Cancel",
                events: {
                    click: () => {
                        msg_box.remove();
                        resolve(null);
                    }
                }
            }]);

            msg_box.classList.add("prompt");
            document.body.appendChild(msg_box);
        });
    }
}(window.hwk = window.hwk || {}));