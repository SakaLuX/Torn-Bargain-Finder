/**
 * Torn Toolkit
 * Bargain Finder Scanner
 * Version: 0.3.0
 */

export default class Scanner {

    constructor(app) {

        this.app = app;

        this.items = [];

        this.running = false;

    }

    start() {

        if (this.running)
            return;

        this.running = true;

        console.log("[Scanner] Started");

        this.scan();

    }

    stop() {

        this.running = false;

        console.log("[Scanner] Stopped");

    }

    scan() {

        if (!this.running)
            return;

        this.items = [];

        // Selectează toate rândurile de ofertă.
        // Selectorul exact poate fi ajustat după testarea în Torn PDA.
        const rows = document.querySelectorAll("[data-item], .itemRow, li");

        rows.forEach(row => {

            const text = row.innerText || "";

            if (!text.trim())
                return;

            this.items.push({

                element: row,

                text: text,

                detectedAt: Date.now()

            });

        });

        console.log(
            `[Scanner] ${this.items.length} rows detected`
        );

    }

    getItems() {

        return this.items;

    }

    refresh() {

        this.scan();

    }

}