import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const __dirname = path.resolve();

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    entries: [],
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
});
