

(function(hwk) {

    hwk.SideBar = class extends HTMLDivElement {
        constructor() {
            super();
            this.setAttribute("is", "hwk-sidebar");

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