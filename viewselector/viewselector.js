

(function(hwk) {
    hwk.ViewSelector = class extends HTMLDivElement {
        static observedAttributes = ["hwk-viewselector-displayid"];

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
                viewID = this.body.children[0].getAttribute("hwk-viewselector-id");
            }

            var toActivate = undefined;
            var toDisplay = undefined;

            // Deactivate & hide all
            for (let i = 0; i < this.head.childNodes.length; i++) {
                const node = this.head.childNodes[i];
                if(node.classList.contains("active"))
                    { node.classList.remove("active"); }

                if(node.getAttribute("hwk-viewselector-id") === viewID)
                    { toActivate = node; }
            }
            for (let i = 0; i < this.body.childNodes.length; i++) {
                const node = this.body.childNodes[i];
                if(!node.hasAttribute("hidden"))
                    { node.setAttribute("hidden", ''); }

                if(node.getAttribute("hwk-viewselector-id") === viewID)
                    { toDisplay = node; }
            }

            if(toActivate) toActivate.classList.add("active");
            if(toDisplay) toDisplay.removeAttribute("hidden");

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