import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { tsConfigPaths } from "vite-plugin-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    "babel-plugin-macros",
                    "babel-plugin-styled-components"
                ]
            }
        }),
        tsConfigPaths()
    ],
    define: { "process.env": process.env }
});
