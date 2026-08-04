import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: "dist",
        emptyOutDir: true,
        minify: false,
        rollupOptions: {
            input: "src/bargain-finder.user.js",
            output: {
                entryFileNames: "bargain-finder.user.js"
            }
        }
    }
});