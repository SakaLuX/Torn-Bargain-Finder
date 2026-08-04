import Utils from "../core/utils.js";

export default class Panel {

    constructor(app) {

        this.app = app;

    }

    render() {

        if (document.getElementById("tt-panel"))
            return;

        const panel = Utils.create("div");

        panel.id = "tt-panel";

        const modules = this.app.modules.getAll();

        let html = `

            <div id="tt-header">

                🟢 Torn Toolkit

            </div>

            <div class="tt-row">

                <span>Version</span>

                <span>${this.app.version}</span>

            </div>

            <div class="tt-row">

                <span>Status</span>

                <span style="color:#3DDC84;">Running</span>

            </div>

            <hr>

            <h4 style="margin:10px 0 5px 0;">Modules</h4>

        `;

        modules.forEach(module => {

            html += `

                <div class="tt-row">

                    <span>${module.name}</span>

                    <input
                        type="checkbox"
                        data-module="${module.id}"
                        ${module.enabled ? "checked" : ""}
                    >

                </div>

            `;

        });

        html += `

            <hr>

            <button id="tt-support">

                ❤️ Support Torn Toolkit

            </button>

        `;

        panel.innerHTML = html;

        document.body.appendChild(panel);

        panel.querySelectorAll("input[data-module]").forEach(input => {

            input.addEventListener("change", () => {

                this.app.modules.toggle(
                    input.dataset.module
                );

            });

        });

    }

}