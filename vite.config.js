import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  server: {
    port: 3000,
  },

  resolve: {
    alias: [
      { find: "@", replacement: "./src" },
      { find: "@apis", replacement: "/src/apis" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@contexts", replacement: "/src/contexts" },
      { find: "@router", replacement: "/src/router" },
      { find: "@store", replacement: "/src/store" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@dummy", replacement: "/src/dummy" },
    ],
  },
});
