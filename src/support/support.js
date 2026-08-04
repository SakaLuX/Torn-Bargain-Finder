/**
 * Torn Toolkit
 * Support Manager
 * Version: 0.2.0
 */

export default class Support {

    constructor(app) {
        this.app = app;
    }

    open() {

        if (document.getElementById("tt-support-overlay")) {
            return;
        }

        const overlay = document.createElement("div");
        overlay.id = "tt-support-overlay";

        overlay.innerHTML = `

<div id="tt-support-window">

    <div id="tt-support-header">

        <span>❤️ Love Torn Toolkit?</span>

        <button id="tt-support-close">✖</button>

    </div>

    <div id="tt-support-body">

        <p>
            Thank you for using Torn Toolkit!
        </p>

        <p>
            If you enjoy this project and would like to support future updates, you can use one of the options below.
        </p>

        <hr>

        <a
            href="https://www.torn.com/profiles.php?XID=2380374"
            target="_blank">

            👤 Visit SakaLuX [2380374]

        </a>

        <a
            href="https://www.torn.com/item.php"
            target="_blank">

            💊 Send Xanax

        </a>

        <a
            href="https://www.torn.com/item.php"
            target="_blank">

            🎁 Send Items

        </a>

        <a
            href="https://www.torn.com/sendmoney.php#/p=send&XID=2380374"
            target="_blank">

            💵 Send Money

        </a>

        <a
            href="https://github.com/SakaLuX/Torn-Toolkit"
            target="_blank">

            ⭐ GitHub Repository

        </a>

        <a
            href="https://github.com/SakaLuX/Torn-Toolkit/issues"
            target="_blank">

            🐞 Report Bug

        </a>

        <a
            href="https://github.com/SakaLuX/Torn-Toolkit/blob/main/CHANGELOG.md"
            target="_blank">

            📜 Changelog

        </a>

    </div>

</div>

`;

        document.body.appendChild(overlay);

        overlay.addEventListener("click", (event) => {

            if (event.target === overlay) {
                this.close();
            }

        });

        document
            .