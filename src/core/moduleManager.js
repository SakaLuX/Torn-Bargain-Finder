/**
 * Torn Toolkit
 * Module Manager
 */

import Logger from "./logger.js";

export default class ModuleManager {

    constructor(storage) {

        this.storage = storage;
        this.modules = [];

    }

    register(module) {

        const saved = this.storage.get(
            `module.${module.id}`,
            module.enabled ?? true
        );

        module.enabled = saved;

        this.modules.push(module);

        Logger.info(`Module loaded: ${module.name}`);

    }

    getAll() {

        return this.modules;

    }

    isEnabled(id) {

        const module = this.modules.find(m => m.id === id);

        return module ? module.enabled : false;

    }

    toggle(id) {

        const module = this.modules.find(m => m.id === id);

        if (!module) return;

        module.enabled = !module.enabled;

        this.storage.set(
            `module.${id}`,
            module.enabled
        );

        Logger.success(
            `${module.name}: ${module.enabled ? "Enabled" : "Disabled"}`
        );

    }

}