import Logger from "./logger.js";
import Storage from "./storage.js";
import Router from "./router.js";
import ModuleManager from "./moduleManager.js";
import Panel from "../ui/panel.js";

export default class TornToolkit {

    constructor() {

        this.version = "0.1.0";

        this.storage = new Storage();
this.modules = new ModuleManager(this.storage);
        this.panel = new Panel(this);

    }

    start() {

        Logger.line();

        Logger.info("Starting Torn Toolkit");

        Logger.info("Version:", this.version);

        Logger.info("Current Page:", Router.current());

        Logger.line();
this.modules.register({
    id: "bargain",
    name: "💰 Bargain Finder",
    enabled: true
});

this.modules.register({
    id: "travel",
    name: "✈ Travel Tools",
    enabled: false
});

this.modules.register({
    id: "war",
    name: "⚔ War Tools",
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
        this.panel.render();

    }

}