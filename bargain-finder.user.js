// ==UserScript==
// @name         Torn Bargain Finder
// @namespace    https://github.com/SakaLuX/Torn-Bargain-Finder
// @version      1.0.0
// @description  Highlight bargain deals in Torn Item Market and Bazaar.
// @author       SakaLuX
// @match        https://www.torn.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    console.log("🟢 Torn Bargain Finder v1.0.0 loaded!");

    function createPanel() {
        const panel = document.createElement("div");

        panel.id = "tbf-panel";

        panel.innerHTML = `
            <h3>🟢 Torn Bargain Finder</h3>
            <div>Deals found: <span id="tbf-deals">0</span></div>
            <div>$1 Deals: <span id="tbf-dollar">0</span></div>
            <button id="tbf-scan">Scan Page</button>
        `;

        panel.style.position = "fixed";
        panel.style.bottom = "20px";
        panel.style.right = "20px";
        panel.style.zIndex = "999999";
        panel.style.background = "#1f1f1f";
        panel.style.color = "#ffffff";
        panel.style.padding = "12px";
        panel.style.borderRadius = "8px";
        panel.style.fontSize = "14px";
        panel.style.boxShadow = "0 0 10px rgba(0,0,0,.4)";

        document.body.appendChild(panel);

        document.getElementById("tbf-scan").onclick = () => {
            alert("Scan will be implemented in v1.1");
        };
    }

    window.addEventListener("load", () => {
        createPanel();
    });

})();