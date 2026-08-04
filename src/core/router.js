/**
 * Torn Toolkit
 * Router
 */

import Logger from "./logger.js";

export default class Router {

    static routes = {
        home: "/index.php",
        itemMarket: "/item.php",
        bazaar: "/bazaar.php",
        travel: "/travelagency.php",
        crimes: "/loader.php?sid=crimes",
        faction: "/factions.php",
        casino: "/casino.php",
        racing: "/loader.php?sid=racing"
    };

    static current() {

        const url = window.location.href;

        for (const [name, route] of Object.entries(this.routes)) {

            if (url.includes(route)) {
                Logger.debug("Current page:", name);
                return name;
            }

        }

        Logger.debug("Current page: unknown");

        return "unknown";

    }

    static is(page) {

        return this.current() === page;

    }

}