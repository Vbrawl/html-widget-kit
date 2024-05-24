


(function(hwk) {
    hwk.ListItem = class ListItem {
        constructor(data) {
            this.data = data;
        }

        /**
         * Add a separator in the html element.
         * @param {HTMLElement} item The html element to edit.
         */
        add_separator(item) {
            const sep = document.createElement('span');
            sep.classList.add("separator");
            item.appendChild(sep);
        }

        /**
         * Render the ListItem as HTML.
         * @returns The rendered HTMLElement ready to be added to the DOM.
         */
        render() {
            const item = document.createElement('div');
            item.classList.add('list-item');
            this.include_data(item)
            return item;
        }

        /**
         * Include the data of the ListItem to the html element.
         * @param {HTMLElement} item The html element to edit.
         */
        include_data(item) {
            var add_sep = false;
            for (const key in this.data) {
                const value = this.data[key];

                if(add_sep) {this.add_separator(item);}

                const element = document.createElement('div');
                element.classList.add("item-data");
                element.setAttribute(`data-${key}`, value);
                element.textContent = value;
                item.appendChild(element);
                add_sep = true;
            }
        }
    }



    hwk.List = class extends HTMLDivElement {
        constructor() {
            super();
            this.setAttribute("is", "hwk-list");
            this.items = [];
        }

        /**
         * Render an HTML representation of the element.
         */
        render() {
            for(let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                this.appendChild(item.render());
            }
        }

        /**
         * Add a ListItem to the list and show it.
         * @param {hwk.ListItem} item A ListItem object.
         */
        addItem(item) {
            this.items.push(item);
            this.appendChild(item.render());
        }
    }

    customElements.define("hwk-list", hwk.List, {extends: "div"});
}(window.hwk = window.hwk || {}));
