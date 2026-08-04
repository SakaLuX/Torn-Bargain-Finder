/**
 * Torn Toolkit
 * Observer
 */

import Logger from "./logger.js";

export default class Observer {

    constructor(callback) {

        this.callback = callback;

        this.observer = null;

    }

    start() {

        this.observer = new MutationObserver(() => {

            this.callback();

        });

        this.observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        Logger.success("MutationObserver started.");

    }

    stop() {

        if (this.observer) {

            this.observer.disconnect();

            Logger.warn("MutationObserver stopped.");

        }

    }

}