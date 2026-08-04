export class Logger {

    static info(message, ...args) {
        console.log(
            `%c[Torn Toolkit]`,
            "color:#3DDC84;font-weight:bold;",
            message,
            ...args
        );
    }

    static warn(message, ...args) {
        console.warn(
            `%c[Torn Toolkit]`,
            "color:#FFC107;font-weight:bold;",
            message,
            ...args
        );
    }

    static error(message, ...args) {
        console.error(
            `%c[Torn Toolkit]`,
            "color:#FF5252;font-weight:bold;",
            message,
            ...args
        );
    }

}