/**
 * Torn Toolkit
 * Module Manager
 * Version: 0.2.0
 */

import Logger from "./logger.js";

export default class ModuleManager {

    constructor(storage) {

        this.storage = storage;

        this.modules = [];

    }

    register(module) {

        const enabled = this.storage.get(
            `module.${module.id}`,
            module.enabled ?? true
        );

        module.enabled = enabled;

        this.modules.push(module);

        Logger.info(`Loaded module: ${module.name}`);

    }

    unregister(id) {

        this.modules = this.modules.filter(
            module => module.id !== id
        );

        Logger.warn(`Removed module: ${id}`);

    }

    get(id) {

        return this.modules.find(
            module => module.id === id
        );

    }

    getAll() {

        return [...this.modules];

    }

    getEnabled() {

        return this.modules.filter(
            module => module.enabled
        );

    }

    enable(id) {

        const module = this.get(id);

        if (!module)
            return false;

        module.enabled = true;

        this.storage.set(
            `module.${id}`,
            true
        );

        Logger.success(`${module.name} enabled`);

        return true;

    }

    disable(id) {

        const module = this.get(id);

        if (!module)
            return false;

        module.enabled = false;

        this.storage.set(
            `module.${id}`,
            false
        );

        Logger.warn(`${module.name} disabled`);

        return true;

    }

    toggle(id) {

        const module = this.get(id);

        if (!module)
            return false;

        module.enabled = !module.enabled;

        this.storage.set(
            `module.${id}`,
            module.enabled
        );

        Logger.info(
            `${module.name}: ${
                module.enabled ? "Enabled" : "Disabled"
            }`
        );

        return module.enabled;

    }

    isEnabled(id) {

        const module = this.get(id);

        return module ? module.enabled : false;

    }

    count() {

        return this.modules.length;

    }

    countEnabled() {

        return this.getEnabled().length;

    }

}