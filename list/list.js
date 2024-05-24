

(function(fwk) {

    class fwk_walker {
        constructor(lst) {
            this.lst = lst;
            this.legs = [null, null];
            this.prevStep = 1;
        }

        doubleStep() {
            this.singleStep();
            this.singleStep();
        }

        singleStep() {
            var currentStep = this.getCurrentStep();
            if(this.legs[this.prevStep] === null) { this.legs[currentStep] = this.lst.children[0]; }
            else { this.legs[currentStep] = this.legs[this.prevStep].nextElementSibling; }
            this.prevStep = currentStep;
            return this.legs[this.prevStep];
        }

        getCurrentStep() {
            var s = this.prevStep + 1;
            if(s >= this.legs.length) { s = 0; }
            return s;
        }
    }

    class fwk_list extends HTMLDivElement {
        static observedAttributes = ["orientation"];

        fixOrientation(o) {
            if(o === 'horizontal' || o === 'vertical') { return; }
            this.setAttribute("orientation", "vertical");
        }

        addSpacers() {
            var walker = new fwk_walker(this);
            for(walker.doubleStep(); walker.legs[0] !== null && walker.legs[1] !== null; walker.singleStep()) {
                if(!walker.legs[0].classList.contains("fwk-list-spacer") && !walker.legs[1].classList.contains("fwk-list-spacer")) {
                    let d = document.createElement("div");
                    d.classList.add("fwk-list-spacer");
                    this.insertBefore(d, walker.legs[walker.prevStep]);
                }
            }
        }

        connectedCallback() {
            this.fixOrientation(this.getAttribute("orientation"));
            this.addSpacers();
        }

        attributeChangedCallback(name, oval, nval) {
            switch (name) {
                case "orientation":
                    this.fixOrientation(nval);
                    break;

                default:
                    console.error(`No handler for attribute "${name}" in class "${this.name}"`);
                    break;
            }
        }
    }

    customElements.define("fwk-list", fwk_list, {extends: "div"});
}(window.fwk = window.fwk || {}));