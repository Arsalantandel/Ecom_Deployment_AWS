import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,

    // Allow requests from your AWS Load Balancer
    allowedHosts: "all",

    proxy: {
      "/api": {
        target: "http://backend-service:5000",
        changeOrigin: true,
      },

      "/uploads": {
        target: "http://backend-service:5000",
        changeOrigin: true,
      },
    },
  },

  resolve: {
    alias: {
      "@components": "/src/components",
      "@screens": "/src/screens",
      "@data": "/src/data",
      "@slices": "/src/slices",
      "@utils": "/src/utils",
    },
  },
});