// ==UserScript==
// @name         Torn Bargain Finder
// @namespace    https://github.com/SakaLuX/Torn-Bargain-Finder
// @version      1.0.1
// @description  Highlight bargain deals in Torn Item Market and Bazaar.
// @author       SakaLuX
// @match        https://www.torn.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const VERSION = "1.0.1";

    console.log(`🟢 Torn Bargain Finder v${VERSION} loaded!`);

    let currentPage = "Unknown";

    function detectPage() {

        const url = window.location.href;

        if (url.includes("itemmarket")) {
            currentPage = "Item Market";
        }
        else if (url.includes("bazaar")) {
            currentPage = "Bazaar";
        }
        else {
            currentPage = "Other";
        }

        console.log("Current page:", currentPage);

    }

    function createPanel() {

        if (document.getElementById("tbf-panel")) return;

        const panel = document.createElement("div");

        panel.id = "tbf-panel";

        panel.innerHTML = `
            <div style="font-size:18px;font-weight:bold;margin-bottom:8px;">
                💰 Torn Bargain Finder
            </div>

            <div style="margin-bottom:4px;">
                Version:
                <b>${VERSION}</b>
            </div>

            <div style="margin-bottom:4px;">
                Page:
                <span id="tbf-page">Unknown</span>
            </div>

            <div style="margin-bottom:4px;">
                Deals:
                <span id="tbf-deals">0</span>
            </div>

            <div style="margin-bottom:10px;">
                $1 Deals:
                <span id="tbf-dollar">0</span>
            </div>

            <button id="tbf-scan"
                style="
                width:100%;
                padding:8px;
                cursor:pointer;
                border:none;
                border-radius:6px;
                font-weight:bold;
                ">
                🔍 Scan Page
            </button>
        `;

        panel.style.position = "fixed";
        panel.style.bottom = "20px";
        panel.style.right = "20px";
        panel.style.width = "230px";
        panel.style.background = "#202124";
        panel.style.color = "white";
        panel.style.padding = "15px";
        panel.style.borderRadius = "10px";
        panel.style.boxShadow = "0 0 15px rgba(0,0,0,.4)";
        panel.style.zIndex = "999999";

        document.body.appendChild(panel);

        document
            .getElementById("tbf-scan")
            .addEventListener("click", scanPage);

    }

    function scanPage() {

        detectPage();

        document.getElementById("tbf-page").textContent = currentPage;

        console.log("Scanning page...");

        document.getElementById("tbf-deals").textContent = "...";
        document.getElementById("tbf-dollar").textContent = "...";

        // Scanner-ul real va fi implementat în versiunea 1.0.2

    }

    window.addEventListener("load", () => {

        detectPage();

        createPanel();

        document.getElementById("tbf-page").textContent = currentPage;

    });

})();