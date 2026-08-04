/**
 * Torn Toolkit
 * Modal Manager
 * Version: 0.3.0
 */

export default class Modal {

    constructor() {

        this.overlay = null;

    }

    open(options = {}) {

        this.close();

        const {
            title = "Torn Toolkit",
            content = "",
            width = "450px"
        } = options;

        this.overlay = document.createElement("div");

        this.overlay.id = "tt-modal-overlay";

        this.overlay.innerHTML = `
<div id="tt-modal" style="max-width:${width};">

    <div id="tt-modal-header">

        <span>${title}</span>

        <button id="tt-modal-close">✖</button>

    </div>

    <div id="tt-modal-content">

        ${content}

    </div>

</div>
`;

        document.body.appendChild(this.overlay);

        this.overlay
            .querySelector("#tt-modal-close")
            .addEventListener("click", () => this.close());

        this.overlay.addEventListener("click", e => {

            if (e.target === this.overlay) {

                this.close();

            }

        });

    }

    close() {

        const modal = document.getElementById("tt-modal-overlay");

        if (modal) {

            modal.remove();

        }

    }

    isOpen() {

        return document.getElementById("tt-modal-overlay") !== null;

    }

}