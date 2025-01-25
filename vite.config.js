import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias '@' to 'src' directory
    },
  },
  server: {
    open: true, // Automatically open the browser when the server starts
  },
});
