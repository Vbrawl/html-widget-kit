


(function(hwk) {
    hwk.ContentFetch = class extends HTMLDivElement {
        static observedAttributes = ["hwk-src"];
        constructor() {
            super();
            this.setAttribute("is", "hwk-contentfetch");
        }

        async refetch() {
            const url = this.getAttribute("hwk-src");

            const response = await fetch(url);
            this.innerHTML = await response.text();
        }

        attributeChangedCallback(name) {
            switch (name) {
                case "hwk-src":
                    this.refetch();
                    break;
            
                default:
                    break;
            }
        }
    }

    customElements.define("hwk-contentfetch", hwk.ContentFetch, {extends: "div"});
}(window.hwk = window.hwk || {}));