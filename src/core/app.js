/**
 * Torn Toolkit
 * Core Application
 * Version: 0.2.0
 */

import Logger from "./logger.js";
import Storage from "./storage.js";
import Router from "./router.js";
import Observer from "./observer.js";
import ModuleManager from "./moduleManager.js";

import Panel from "../ui/panel.js";
import Support from "../support/support.js";

export default class TornToolkit {

    constructor() {

        this.version = "0.2.0";

        this.storage = new Storage("torn-toolkit");

        this.logger = Logger;

        this.router = Router;

        this.modules = new ModuleManager(this.storage);

        this.panel = new Panel(this);

        this.support = new Support(this);

        this.observer = new Observer(() => {

            // Reserved for future page updates

        });

    }

    loadModules() {

        this.modules.register({
            id: "bargain",
            name: "💰 Bargain Finder",
            enabled: true
        });

        this.modules.register({
            id: "travel",
            name: "✈️ Travel Tools",
            enabled: false
        });

        this.modules.register({
            id: "war",
            name: "⚔️ War Tools",
            enabled: false
        });

        this.modules.register({
            id: "crimes",
            name: "🦹 Crimes Tools",
            enabled: false
        });

        this.modules.register({
            id: "casino",
            name: "🎰 Casino Tools",
            enabled: false
        });

        this.modules.register({
            id: "racing",
            name: "🏁 Racing Tools",
            enabled: false
        });

        this.modules.register({
            id: "inventory",
            name: "📦 Inventory Tools",
            enabled: false
        });

        this.modules.register({
            id: "faction",
            name: "👥 Faction Tools",
            enabled: false
        });

    }

    start() {

        Logger.line();

        Logger.success("Starting Torn Toolkit");

        Logger.info("Version:", this.version);

        Logger.info("Page:", Router.current());

        this.loadModules();

        this.panel.render();

        this.observer.start();

        Logger.success("Toolkit Ready");

        Logger.line();

    }

}