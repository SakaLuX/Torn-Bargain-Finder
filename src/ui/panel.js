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

        panel.innerHTML = `

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

            <div class="tt-row">

                <span>Bargain Finder</span>

                <input type="checkbox" checked>

            </div>

            <div class="tt-row">

                <span>Travel</span>

                <input type="checkbox">

            </div>

            <div class="tt-row">

                <span>War</span>

                <input type="checkbox">

            </div>

            <div class="tt-row">

                <span>Crimes</span>

                <input type="checkbox">

            </div>

            <div class="tt-row">

                <span>Casino</span>

                <input type="checkbox">

            </div>

            <hr>

            <button id="tt-support">

                ❤️ Support Torn Toolkit

            </button>

        `;

        document.body.appendChild(panel);

    }

}