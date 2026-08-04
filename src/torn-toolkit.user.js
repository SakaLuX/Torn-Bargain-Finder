// ==UserScript==
// @name         Torn Toolkit
// @namespace    https://github.com/SakaLuX/Torn-Toolkit
// @version      0.1.0
// @description  The ultimate toolkit for Torn PDA & Tampermonkey.
// @author       SakaLuX
// @match        https://www.torn.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

import { TornToolkit } from "./core/app.js";

(() => {
    "use strict";

    const toolkit = new TornToolkit();

    toolkit.start();
})();