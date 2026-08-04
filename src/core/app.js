import { Logger } from "./logger.js";

export class TornToolkit {

    constructor() {

        this.version = "0.1.0";

    }

    start() {

        Logger.info("=======================================");
        Logger.info("Starting Torn Toolkit...");
        Logger.info("Version:", this.version);
        Logger.info("Author: SakaLuX");
        Logger.info("Repository: Torn-Toolkit");
        Logger.info("=======================================");

    }

}