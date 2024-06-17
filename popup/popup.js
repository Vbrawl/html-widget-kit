




(function(hwk) {
    hwk.Popup = class extends HTMLDivElement {
        constructor() {
            super();
            this.setAttribute("is", "hwk-popup");
            this.panel = document.createElement("div");

            this.panel.classList.add("hwk-popup-panel");
            while(this.childNodes.length != 0) {
                this.panel.appendChild(this.childNodes[0]);
            }
            super.appendChild(this.panel);

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

        appendChild(node) {
            this.panel.appendChild(node);
        }


        hide() {this.setAttribute("hidden", "");}
        show() {this.removeAttribute("hidden");}
    }

    customElements.define("hwk-popup", hwk.Popup, {extends: "div"});
}(window.hwk = window.hwk || {}));