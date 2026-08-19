// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [
        sanity({
            projectId: "6wvky7fx",
            dataset: "production",
            apiVersion: "2026-08-17",
            useCdn: false,
        }),

        react(),
    ],
});