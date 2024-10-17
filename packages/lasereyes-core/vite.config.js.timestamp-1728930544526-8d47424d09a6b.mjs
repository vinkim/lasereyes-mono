// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///Users/jerrodjordan/Code/omnisat/lasereyes-mono/node_modules/.pnpm/vite@5.4.8_@types+node@22.7.5_terser@5.34.1/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/jerrodjordan/Code/omnisat/lasereyes-mono/node_modules/.pnpm/vite-plugin-dts@4.2.4_@types+node@22.7.5_rollup@4.24.0_typescript@5.6.3_vite@5.4.8_@types+node@22.7.5_terser@5.34.1_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/jerrodjordan/Code/omnisat/lasereyes-mono/packages/lasereyes-core";
var vite_config_default = defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "LaserEyes",
      fileName: "index"
    },
    rollupOptions: {
      output: {
        banner: "'use client';"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamVycm9kam9yZGFuL0NvZGUvb21uaXNhdC9sYXNlcmV5ZXMtbW9uby9wYWNrYWdlcy9sYXNlcmV5ZXMtY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2plcnJvZGpvcmRhbi9Db2RlL29tbmlzYXQvbGFzZXJleWVzLW1vbm8vcGFja2FnZXMvbGFzZXJleWVzLWNvcmUvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2plcnJvZGpvcmRhbi9Db2RlL29tbmlzYXQvbGFzZXJleWVzLW1vbm8vcGFja2FnZXMvbGFzZXJleWVzLWNvcmUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW2R0cygpXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ0xhc2VyRXllcycsXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBiYW5uZXI6IFwiJ3VzZSBjbGllbnQnO1wiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVksU0FBUyxlQUFlO0FBQy9aLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUZoQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDO0FBQUEsRUFDZixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
