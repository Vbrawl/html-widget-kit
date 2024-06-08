

(function(hwk) {

    hwk.SideBar = class extends HTMLDivElement {
        constructor() {
            super();
            this.setAttribute("is", "hwk-sidebar");

            const panel = document.createElement("div");
            panel.classList.add("hwk-sidebar-panel");
            while(this.children.length != 0) {
                panel.appendChild(this.children[0]);
            }
            this.appendChild(panel);

            this.addEventListener("click", (evt) => {
                var child = evt.target;
                while(this !== child && child.getAttribute("hwk-sidebar-close-button") !== "true") {
                    child = child.parentElement;
                }
                if(child.getAttribute("hwk-sidebar-close-button") === "true") {this.hide();}
            });
        }

        hide() {this.setAttribute("hidden", '');}
        show() {this.removeAttribute("hidden");}
    }

    customElements.define("hwk-sidebar", hwk.SideBar, {extends: "div"});
    
}(window.hwk = window.hwk || {}));