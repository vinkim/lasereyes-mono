// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///Users/jerrodjordan/Code/omnisat/lasereyes-mono/node_modules/.pnpm/vite@5.4.8_@types+node@22.7.5_terser@5.34.1/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/jerrodjordan/Code/omnisat/lasereyes-mono/node_modules/.pnpm/vite-plugin-dts@4.2.4_@types+node@22.7.5_rollup@4.24.0_typescript@5.6.3_vite@5.4.8_@types+node@22.7.5_terser@5.34.1_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/jerrodjordan/Code/omnisat/lasereyes-mono/packages/lasereyes";
var vite_config_default = defineConfig({
  plugins: [dts()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "index.ts"),
      name: "LaserEyes",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react-dom"]
      // Should export react and core libraries as a separate output
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamVycm9kam9yZGFuL0NvZGUvb21uaXNhdC9sYXNlcmV5ZXMtbW9uby9wYWNrYWdlcy9sYXNlcmV5ZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9qZXJyb2Rqb3JkYW4vQ29kZS9vbW5pc2F0L2xhc2VyZXllcy1tb25vL3BhY2thZ2VzL2xhc2VyZXllcy92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvamVycm9kam9yZGFuL0NvZGUvb21uaXNhdC9sYXNlcmV5ZXMtbW9uby9wYWNrYWdlcy9sYXNlcmV5ZXMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW2R0cygpXSxcbiAgYnVpbGQ6IHtcbiAgICBjb3B5UHVibGljRGlyOiBmYWxzZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJpbmRleC50c1wiKSxcbiAgICAgIG5hbWU6IFwiTGFzZXJFeWVzXCIsXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxuICAgICAgZm9ybWF0czogWydlcyddXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXG4gICAgICAvLyBTaG91bGQgZXhwb3J0IHJlYWN0IGFuZCBjb3JlIGxpYnJhcmllcyBhcyBhIHNlcGFyYXRlIG91dHB1dFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1gsU0FBUyxlQUFlO0FBQ2haLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUZoQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDO0FBQUEsRUFDZixPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsSUFDZixLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsVUFBVTtBQUFBLE1BQ3BDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQTtBQUFBLElBRWpDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
