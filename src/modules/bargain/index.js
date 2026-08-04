/**
 * Torn Toolkit
 * Bargain Finder
 * Main Module
 * Version: 0.3.0
 */

import Scanner from "./scanner.js";

export default class BargainFinder {

    constructor(app) {

        this.app = app;

        this.scanner = new Scanner(app);

        this.enabled = false;

    }

    start() {

        if (this.enabled)
            return;

        this.enabled = true;

        console.log("[Bargain Finder] Started");

        this.scanner.start();

    }

    stop() {

        this.enabled = false;

        console.log("[Bargain Finder] Stopped");

    }

    refresh() {

        if (!this.enabled)
            return;

        this.scanner.scan();

    }

}