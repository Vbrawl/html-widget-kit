

(function(hwk) {
    hwk.FloatMenu = class extends HTMLDivElement {
        constructor() {
            super();
            this.setAttribute("is", "hwk-floatmenu");
        }

        hide() {this.setAttribute("hidden", "");}
        show() {this.removeAttribute("hidden");}

        /**
         * Set the x and y coordinates.
         * @param {int} x X-axis
         * @param {int} y Y-axis
         * @param {int} offsetX Offset for X-axis
         * @param {int} offsetY offset for Y-axis
         */
        setPosition(x, y, offsetX = null, offsetY = null) {
            if(offsetX === null) {offsetX = parseInt(this.getAttribute("hwk-floatmenu-offsetx") || 0);}
            if(offsetY === null) {offsetY = parseInt(this.getAttribute("hwk-floatmenu-offsety") || 0);}

            this.style.left = x + offsetX + 'px';
            this.style.top = y + offsetY + 'px';
        }

        /**
         * Move float-menu to that position and show it.
         * @param {int} x X-axis
         * @param {int} y Y-axis
         * @param {int} offsetX Offset for X-axis
         * @param {int} offsetY Offset for Y-axis
         */
        showOnPoint(x, y, offsetX = null, offsetY = null) {
            this.setPosition(x, y, offsetX, offsetY);
            this.show();
        }

        /**
         * Move float-menu to the position of the element and show it.
         * @param {HTMLElement} dom_element An html-element placed in the DOM.
         * @param {int} offsetX Offset for X-axis
         * @param {int} offsetY Offset for Y-axis
         */
        showOnElement(dom_element, offsetX = null, offsetY = null) {
            var rect = dom_element.getBoundingClientRect();
            this.setPosition(rect.left, rect.top, offsetX, offsetY);
            this.show();
        }

        /**
         * Move float-menu at the bottom-center of the element and show it.
         * @param {HTMLElement} dom_element An html-element placed in the DOM.
         * @param {int} offsetX Offset for X-axis
         * @param {int} offsetY Offset for Y-axis
         */
        showForElement(dom_element, offsetX = null, offsetY = null) {
            var rect = dom_element.getBoundingClientRect();
            this.setPosition(parseInt((rect.left + rect.width / 2).toFixed()), rect.top + rect.height, offsetX, offsetY)
            this.show();
        }
    }

    customElements.define("hwk-floatmenu", hwk.FloatMenu, {extends: "div"});
}(window.hwk = window.hwk || {}));