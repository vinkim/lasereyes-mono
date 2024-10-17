// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///Users/jerrodjordan/Code/omnisat/lasereyes-mono/node_modules/.pnpm/vite@5.4.8_@types+node@22.7.5/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/jerrodjordan/Code/omnisat/lasereyes-mono/node_modules/.pnpm/vite-plugin-dts@4.2.4_@types+node@22.7.5_rollup@4.24.0_typescript@5.6.3_vite@5.4.8_@types+node@22.7.5_/node_modules/vite-plugin-dts/dist/index.mjs";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamVycm9kam9yZGFuL0NvZGUvb21uaXNhdC9sYXNlcmV5ZXMtbW9uby9wYWNrYWdlcy9sYXNlcmV5ZXMtY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2plcnJvZGpvcmRhbi9Db2RlL29tbmlzYXQvbGFzZXJleWVzLW1vbm8vcGFja2FnZXMvbGFzZXJleWVzLWNvcmUvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2plcnJvZGpvcmRhbi9Db2RlL29tbmlzYXQvbGFzZXJleWVzLW1vbm8vcGFja2FnZXMvbGFzZXJleWVzLWNvcmUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW2R0cygpXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaW5kZXgudHNcIiksXG4gICAgICBuYW1lOiBcIkxhc2VyRXllc1wiLFxuICAgICAgZmlsZU5hbWU6IFwiaW5kZXhcIixcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBiYW5uZXI6IFwiJ3VzZSBjbGllbnQnO1wiXG4gICAgICB9XG4gICAgfVxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVZLFNBQVMsZUFBZTtBQUMvWixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFGaEIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksQ0FBQztBQUFBLEVBQ2YsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
