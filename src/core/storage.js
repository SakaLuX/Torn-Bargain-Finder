/**
 * Torn Toolkit
 * Storage Manager
 */

export default class Storage {

    constructor(namespace = "torn-toolkit") {
        this.namespace = namespace;
    }

    key(key) {
        return `${this.namespace}.${key}`;
    }

    set(key, value) {
        localStorage.setItem(
            this.key(key),
            JSON.stringify(value)
        );
    }

    get(key, defaultValue = null) {

        const value = localStorage.getItem(
            this.key(key)
        );

        if (value === null) {
            return defaultValue;
        }

        try {
            return JSON.parse(value);
        } catch {
            return defaultValue;
        }

    }

    remove(key) {
        localStorage.removeItem(
            this.key(key)
        );
    }

    clear() {

        Object.keys(localStorage)
            .filter(key => key.startsWith(this.namespace))
            .forEach(key => localStorage.removeItem(key));

    }

}