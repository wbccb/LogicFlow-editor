import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 2000,
    host: true,
    open: true,
    proxy: {
      // https://cn.vitejs.dev/config/#server-proxy
      "/dev-api": {
        target: "http://vue.ruoyi.vip/prod-api",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/dev-api/, ""),
      },
    },
  },
  plugins: [vue()],
});
