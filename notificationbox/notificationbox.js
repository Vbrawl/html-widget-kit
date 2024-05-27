

(async function(hwk) {
    // Wait until the required elements are defined
    await customElements.whenDefined("hwk-floatmenu");
    await customElements.whenDefined("hwk-list");


    hwk.NotificationBox = class extends HTMLDivElement {
        constructor() {
            super();
            this.setAttribute("is", "hwk-notificationbox");

            this.hwk_floatmenu = new hwk.FloatMenu();
            this.hwk_list = new hwk.List();

            this.hwk_list.addEventListener("click", (evt) => {
                const initial_item_count = this.hwk_list.items.length
                var max_len = initial_item_count;

                var i = 0;
                while(i < max_len) {
                    if(this.hwk_list.items[i].data === null) {
                        this.hwk_list.items.splice(i, 1);
                        max_len -= 1;
                    }
                    else {
                        i += 1;
                    }
                }

                if(max_len != initial_item_count) {
                    this.hwk_list.innerHTML = '';
                    this.hwk_list.render();
                }
            })

            this.hwk_floatmenu.appendChild(this.hwk_list);
            this.appendChild(this.hwk_floatmenu)
        }

        addNotification(notification_item) {
            this.hwk_list.addItem(notification_item);
        }
    }


    hwk.NotificationItem = class extends hwk.ListItem {
        includeData(item) {
            const cancel_button = document.createElement('div');
            cancel_button.classList.add("hwk-notificationbox-cancel-button");
            cancel_button.addEventListener("click", () => {this.data = null;});
            item.appendChild(cancel_button);

            super.includeData(item);
        }
    }

    customElements.define("hwk-notificationbox", hwk.NotificationBox, {extends: "div"});
}(window.hwk = window.hwk || {}));