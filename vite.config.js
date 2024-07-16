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
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@apis": path.resolve(__dirname, "/src/apis"),
      "@assets": path.resolve(__dirname, "/src/assets"),
      "@components": path.resolve(__dirname, "/src/components"),
      "@hooks": path.resolve(__dirname, "/src/hooks"),
      "@pages": path.resolve(__dirname, "/src/pages"),
      "@contexts": path.resolve(__dirname, "/src/contexts"),
      "@router": path.resolve(__dirname, "/src/router"),
      "@store": path.resolve(__dirname, "/src/store"),
      "@utils": path.resolve(__dirname, "/src/utils"),
      "@styles": path.resolve(__dirname, "/src/styles"),
      "@dummy": path.resolve(__dirname, "/src/dummy"),
    },
  },
});
