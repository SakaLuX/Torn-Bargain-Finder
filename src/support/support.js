/**
 * Torn Toolkit
 * Support Manager
 */

export default class Support {

    constructor(app) {
        this.app = app;
    }

    open() {

        if (document.getElementById("tt-support-modal"))
            return;

        const modal = document.createElement("div");

        modal.id = "tt-support-modal";

        modal.innerHTML = `

<div id="tt-modal">

    <div id="tt-modal-header">

        ❤️ Support Torn Toolkit

        <button id="tt-close">✖</button>

    </div>

    <div id="tt-modal-body">

        <p>
            Thank you for supporting Torn Toolkit!
        </p>

        <hr>

        <a target="_blank"
        href="https://www.torn.com/profiles.php?XID=2380374">

            👤 SakaLuX [2380374]

        </a>

        <a target="_blank"
        href="https://www.torn.com/sendmoney.php#/p=send&XID=2380374">

            💵 Send Money

        </a>

        <a target="_blank"
        href="https://www.torn.com/item.php">

            💊 Send Xanax

        </a>

        <a target="_blank"
        href="https://www.torn.com/item.php">

            🎁 Send Items

        </a>

        <a target="_blank"
        href="https://github.com/SakaLuX/Torn-Toolkit">

            ⭐ GitHub

        </a>

        <a target="_blank"
        href="https://github.com/SakaLuX/Torn-Toolkit/issues">

            🐞 Report Bug

        </a>

        <a target="_blank"
        href="https://github.com/SakaLuX/Torn-Toolkit/blob/main/CHANGELOG.md">

            📜 Changelog

        </a>

    </div>

</div>

`;

        document.body.appendChild(modal);

        document
            .getElementById("tt-close")
            .onclick = () => modal.remove();

        modal.onclick = e => {

            if (e.target.id === "tt-support-modal")
                modal.remove();

        };

    }

}