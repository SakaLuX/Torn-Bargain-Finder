/**
 * Torn Toolkit
 * Utils
 */

export default class Utils {

    static sleep(ms) {

        return new Promise(resolve => setTimeout(resolve, ms));

    }

    static formatNumber(number) {

        return new Intl.NumberFormat().format(number);

    }

    static formatMoney(number) {

        return "$" + this.formatNumber(number);

    }

    static random(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    static create(tag, className = "") {

        const el = document.createElement(tag);

        if (className)
            el.className = className;

        return el;

    }

}