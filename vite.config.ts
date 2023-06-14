import { resolve } from "path";
import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  publicDir: resolve(__dirname, "public"),
  base: "/rybiarze-online-shop/",
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        shop: resolve(root, "pages", "shop.html"),
        blog: resolve(root, "pages", "blog.html"),
        forum: resolve(root, "pages", "forum.html"),
        about: resolve(root, "pages", "about.html"),
      },
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1/src/php",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
