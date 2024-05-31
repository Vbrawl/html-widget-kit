


(function(hwk) {

    function createReloadedEvent(url) {
        const event = new CustomEvent("reloaded", {
            bubbles: true,
            cancelable: false,
            detail: {url: url}
        });
        return event;
    }

    function createReloadingEvent(url) {
        const event = new CustomEvent("reloading", {
            bubbles: true,
            cancelable: true,
            detail: {url: url}
        });
        return event;
    }

    hwk.ContentFetch = class extends HTMLDivElement {
        static observedAttributes = ["hwk-src"];
        constructor() {
            super();
            this.setAttribute("is", "hwk-contentfetch");
        }

        async refetch() {
            const url = this.getAttribute("hwk-src");

            const reloadingEvent = createReloadingEvent(url);
            if(this.dispatchEvent(reloadingEvent)) {
                if(url) {
                    const response = await fetch(url);
                    this.innerHTML = await response.text();
                }
                else { this.innerHTML = ''; }

                const reloadedEvent = createReloadedEvent(url);
                this.dispatchEvent(reloadedEvent);
            }
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