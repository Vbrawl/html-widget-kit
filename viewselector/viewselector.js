

(function(hwk) {
    hwk.ViewSelector = class extends HTMLDivElement {
        static observedAttributes = ["hwk-viewselector-displayid"]; // TODO: Handle changes.

        constructor() {
            super();
            this.setAttribute("is", "hwk-viewselector");

            this.head = document.createElement("div");
            this.body = document.createElement("div");

            this.head.classList.add("hwk-viewselector-head");
            this.body.classList.add("hwk-viewselector-body");


            while(this.children.length != 0) {
                const child = this.children[0];
                if(child.hasAttribute("hwk-viewselector-id")) {this.addView(child);}
                else { child.remove(); }
            }
            this.setView(this.getAttribute("hwk-viewselector-displayid"));

            this.appendChild(this.head);
            this.appendChild(this.body);
        }

        addView(element) {
            const eID = element.getAttribute("hwk-viewselector-id");
            if(eID === null) {return;}

            const eTitle = element.getAttribute("hwk-viewselector-name") || eID;
            const head_option = document.createElement("div");
            head_option.classList.add("hwk-viewselector-name-option");
            head_option.setAttribute("hwk-viewselector-id", eID);
            head_option.textContent = eTitle;
            head_option.addEventListener("click", (evt) => {
                const option_id = evt.currentTarget.getAttribute("hwk-viewselector-id");
                this.setAttribute("hwk-viewselector-displayid", option_id);
            });

            element.setAttribute("hidden", "");

            this.head.appendChild(head_option);
            this.body.appendChild(element);
        }

        setView(viewID = null) {
            if(viewID === null) {
                if(this.body.children.length === 0) {return;}
                viewID = this.body.children[0];
            }
            const toDeactivate = this.head.getElementsByClassName('active');
            const toActivate = this.head.querySelectorAll(`[hwk-viewselector-id="${viewID}"]`);
            const nonHidden = this.body.querySelectorAll(':not([hidden])');
            const toDisplay = this.body.querySelectorAll(`[hwk-viewselector-id="${viewID}"]`);

            for (let i = 0; i < toDeactivate.length; i++)
                { toDeactivate[i].classList.remove("active"); }
            for (let i = 0; i < toActivate.length; i++)
                { toActivate[i].classList.add("active"); }

            for (let i = 0; i < nonHidden.length; i++)
                { nonHidden[i].setAttribute("hidden", ""); }
            for (let i = 0; i < toDisplay.length; i++)
                { toDisplay[i].removeAttribute("hidden"); }

            this.setAttribute("hwk-viewselector-displayid", viewID);
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if(oldValue === newValue) return;
            switch (name) {
                case 'hwk-viewselector-displayid':
                    this.setView(newValue);
                    break;
            
                default:
                    break;
            }
        }
    }

    customElements.define("hwk-viewselector", hwk.ViewSelector, {extends: "div"});
}(window.hwk = window.hwk || {}));