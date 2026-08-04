/**
 * Torn Toolkit
 * Panel UI
 * Version: 0.2.0
 */

import Utils from "../core/utils.js";

export default class Panel {

    constructor(app) {
        this.app = app;
    }

    render() {

        if (document.getElementById("tt-panel")) {
            return;
        }

        const panel = Utils.create("div");

        panel.id = "tt-panel";

        const page =
            this.app.router.current ?
            this.app.router.current() :
            "Unknown";

        const modules = this.app.modules.getAll();

        const enabledModules =
            this.app.modules.countEnabled();

        let html = `
<div id="tt-header">
    <span>🟢 Torn Toolkit</span>
    <span>v${this.app.version}</span>
</div>

<div class="tt-section">

    <div class="tt-row">
        <span>Page</span>
        <span>${page}</span>
    </div>

    <div class="tt-row">
        <span>Status</span>
        <span style="color:#3DDC84;">Running</span>
    </div>

    <div class="tt-row">
        <span>Modules</span>
        <span>${enabledModules}/${modules.length}</span>
    </div>

</div>

<hr>

<div class="tt-section">

<h3>Modules</h3>
`;

        modules.forEach(module => {

            html += `

<div class="tt-row">

    <span>${module.name}</span>

    <input
        type="checkbox"
        class="tt-module-toggle"
        data-id="${module.id}"
        ${module.enabled ? "checked" : ""}
    >

</div>

`;

        });

        html += `

</div>

<hr>

<div class="tt-buttons">

<button id="tt-settings">
⚙ Settings
</button>

<button id="tt-support">
❤️ Support
</button>

<button id="tt-refresh">
🔄 Refresh
</button>

</div>

`;

        panel.innerHTML = html;

        document.body.appendChild(panel);

        this.registerEvents(panel);

    }

    registerEvents(panel) {

        panel
            .querySelectorAll(".tt-module-toggle")
            .forEach(input => {

                input.addEventListener("change", () => {

                    this.app.modules.toggle(
                        input.dataset.id
                    );

                });

            });

        const refresh =
            panel.querySelector("#tt-refresh");

        refresh.addEventListener("click", () => {

            location.reload();

        });

        const support =
            panel.querySelector("#tt-support");

        support.addEventListener("click", () => {

            this.app.support.open();

        });

        const settings =
            panel.querySelector("#tt-settings");

        settings.addEventListener("click", () => {

            alert("Settings coming in v0.2.1");

        });

    }

}