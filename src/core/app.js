import Logger from "./logger.js";
import Storage from "./storage.js";
import Router from "./router.js";

import Panel from "../ui/panel.js";

export default class TornToolkit {

    constructor() {

        this.version = "0.1.0";

        this.storage = new Storage();

        this.panel = new Panel(this);

    }

    start() {

        Logger.line();

        Logger.info("Starting Torn Toolkit");

        Logger.info("Version:", this.version);

        Logger.info("Current Page:", Router.current());

        Logger.line();

        this.panel.render();

    }

}