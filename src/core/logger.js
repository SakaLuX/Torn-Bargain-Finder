/**
 * Torn Toolkit
 * Logger
 * Version: 0.1.0
 */

export default class Logger {

    static enabled = true;

    static prefix = "[Torn Toolkit]";

    static info(...args) {
        if (!Logger.enabled) return;
        console.log(
            `%c${Logger.prefix}`,
            "color:#3DDC84;font-weight:bold;",
            ...args
        );
    }

    static warn(...args) {
        if (!Logger.enabled) return;
        console.warn(
            `%c${Logger.prefix}`,
            "color:#FFC107;font-weight:bold;",
            ...args
        );
    }

    static error(...args) {
        console.error(
            `%c${Logger.prefix}`,
            "color:#FF5252;font-weight:bold;",
            ...args
        );
    }

    static success(...args) {
        if (!Logger.enabled) return;
        console.log(
            `%c${Logger.prefix}`,
            "color:#00E676;font-weight:bold;",
            ...args
        );
    }

    static debug(...args) {
        if (!Logger.enabled) return;
        console.debug(
            `%c${Logger.prefix}`,
            "color:#42A5F5;font-weight:bold;",
            ...args
        );
    }

    static line() {
        if (!Logger.enabled) return;
        console.log(
            "=================================================="
        );
    }

}