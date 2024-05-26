




(function(hwk) {
    hwk.Popup = class extends HTMLDivElement {
        constructor() {
            super();
            this.setAttribute("is", "hwk-popup");


            const panel = document.createElement("div");
            panel.classList.add("hwk-popup-panel");
            while (this.children.length != 0) {
                panel.appendChild(this.children[0]);
            }
            this.appendChild(panel);


            this.addEventListener("click", (evt) => {
                if(evt.target === this) {
                    if(this.getAttribute("hwk-popup-autoclose") !== "false") {
                        this.hide();
                    }
                    return;
                }

                // Check if target is inside an element with
                // the attribute "hwk-popup-close-button" set to "true"
                var child = evt.target;
                while(panel !== child && child.getAttribute("hwk-popup-close-button") !== "true") {
                    child = child.parentElement;
                }
                if(child.getAttribute("hwk-popup-close-button") === "true") {this.hide();}
            });
        }


        hide() {this.setAttribute("hidden", "");}
        show() {this.removeAttribute("hidden");}
    }

    customElements.define("hwk-popup", hwk.Popup, {extends: "div"});
}(window.hwk = window.hwk || {}));