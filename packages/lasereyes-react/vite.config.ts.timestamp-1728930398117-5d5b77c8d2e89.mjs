// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///Users/jerrodjordan/Code/omnisat/lasereyes-mono/node_modules/.pnpm/vite@5.4.8_@types+node@22.7.5_terser@5.34.1/node_modules/vite/dist/node/index.js";
import react from "file:///Users/jerrodjordan/Code/omnisat/lasereyes-mono/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.1_@swc+helpers@0.5.5_vite@5.4.8_@types+node@22.7.5_terser@5.34.1_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import dts from "file:///Users/jerrodjordan/Code/omnisat/lasereyes-mono/node_modules/.pnpm/vite-plugin-dts@4.2.4_@types+node@22.7.5_rollup@4.24.0_typescript@5.6.3_vite@5.4.8_@types+node@22.7.5_terser@5.34.1_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/jerrodjordan/Code/omnisat/lasereyes-mono/packages/lasereyes-react";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__vite_injected_original_dirname, "./tsconfig.build.json")
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./lib")
    }
  },
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./lib/index.ts"),
      name: "lasereyes-react",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        banner: "'use client';"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamVycm9kam9yZGFuL0NvZGUvb21uaXNhdC9sYXNlcmV5ZXMtbW9uby9wYWNrYWdlcy9sYXNlcmV5ZXMtcmVhY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9qZXJyb2Rqb3JkYW4vQ29kZS9vbW5pc2F0L2xhc2VyZXllcy1tb25vL3BhY2thZ2VzL2xhc2VyZXllcy1yZWFjdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvamVycm9kam9yZGFuL0NvZGUvb21uaXNhdC9sYXNlcmV5ZXMtbW9uby9wYWNrYWdlcy9sYXNlcmV5ZXMtcmVhY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBkdHMoe1xuICAgICAgdHNjb25maWdQYXRoOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vdHNjb25maWcuYnVpbGQuanNvbicpLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL2xpYicpLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL2xpYi9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ2xhc2VyZXllcy1yZWFjdCcsXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgICAgfSxcbiAgICAgICAgYmFubmVyOiBcIid1c2UgY2xpZW50JztcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBZLFNBQVMsZUFBZTtBQUNsYSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNGLGNBQWMsUUFBUSxrQ0FBVyx1QkFBdUI7QUFBQSxJQUMxRCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUMxQyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNmO0FBQUEsUUFDQSxRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
