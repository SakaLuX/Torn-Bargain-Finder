/**
 * Torn Toolkit
 * DOM Inspector
 * Version: 0.3.0
 */

export default class DOMInspector {

    constructor() {

        this.enabled = false;
        this.clickHandler = this.onClick.bind(this);

    }

    start() {

        if (this.enabled)
            return;

        this.enabled = true;

        document.addEventListener(
            "click",
            this.clickHandler,
            true
        );

        console.log("[DOM Inspector] Enabled");

    }

    stop() {

        if (!this.enabled)
            return;

        this.enabled = false;

        document.removeEventListener(
            "click",
            this.clickHandler,
            true
        );

        console.log("[DOM Inspector] Disabled");

    }

    onClick(event) {

        event.preventDefault();
        event.stopPropagation();

        const el = event.target;

        console.group("===== Torn Toolkit DOM Inspector =====");

        console.log("Tag:", el.tagName);
        console.log("ID:", el.id);
        console.log("Classes:", el.className);
        console.log("Text:", el.innerText);
        console.log("HTML:", el.outerHTML);

        console.groupEnd();

    }

}