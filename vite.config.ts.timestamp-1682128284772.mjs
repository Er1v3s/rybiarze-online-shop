// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///E:/KursWebDev/playground/rybiarze-online-shop/node_modules/vite/dist/node/index.js";
import autoprefixer from "file:///E:/KursWebDev/playground/rybiarze-online-shop/node_modules/autoprefixer/lib/autoprefixer.js";
var __vite_injected_original_dirname = "E:\\KursWebDev\\playground\\rybiarze-online-shop";
var root = resolve(__vite_injected_original_dirname, "src");
var outDir = resolve(__vite_injected_original_dirname, "dist");
var vite_config_default = defineConfig({
  publicDir: resolve(__vite_injected_original_dirname, "public"),
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
        about: resolve(root, "pages", "about.html")
      }
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer()]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxLdXJzV2ViRGV2XFxcXHBsYXlncm91bmRcXFxccnliaWFyemUtb25saW5lLXNob3BcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXEt1cnNXZWJEZXZcXFxccGxheWdyb3VuZFxcXFxyeWJpYXJ6ZS1vbmxpbmUtc2hvcFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovS3Vyc1dlYkRldi9wbGF5Z3JvdW5kL3J5YmlhcnplLW9ubGluZS1zaG9wL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSBcImF1dG9wcmVmaXhlclwiO1xyXG5cclxuY29uc3Qgcm9vdCA9IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKTtcclxuY29uc3Qgb3V0RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsIFwiZGlzdFwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcHVibGljRGlyOiByZXNvbHZlKF9fZGlybmFtZSwgXCJwdWJsaWNcIiksXHJcbiAgYmFzZTogXCIvcnliaWFyemUtb25saW5lLXNob3AvXCIsXHJcbiAgcm9vdCxcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyLFxyXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgbWFpbjogcmVzb2x2ZShyb290LCBcImluZGV4Lmh0bWxcIiksXHJcbiAgICAgICAgc2hvcDogcmVzb2x2ZShyb290LCBcInBhZ2VzXCIsIFwic2hvcC5odG1sXCIpLFxyXG4gICAgICAgIGJsb2c6IHJlc29sdmUocm9vdCwgXCJwYWdlc1wiLCBcImJsb2cuaHRtbFwiKSxcclxuICAgICAgICBmb3J1bTogcmVzb2x2ZShyb290LCBcInBhZ2VzXCIsIFwiZm9ydW0uaHRtbFwiKSxcclxuICAgICAgICBhYm91dDogcmVzb2x2ZShyb290LCBcInBhZ2VzXCIsIFwiYWJvdXQuaHRtbFwiKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHBvc3Rjc3M6IHtcclxuICAgICAgcGx1Z2luczogW2F1dG9wcmVmaXhlcigpXSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVUsU0FBUyxlQUFlO0FBQ3pWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sa0JBQWtCO0FBRnpCLElBQU0sbUNBQW1DO0FBSXpDLElBQU0sT0FBTyxRQUFRLGtDQUFXLEtBQUs7QUFDckMsSUFBTSxTQUFTLFFBQVEsa0NBQVcsTUFBTTtBQUV4QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixXQUFXLFFBQVEsa0NBQVcsUUFBUTtBQUFBLEVBQ3RDLE1BQU07QUFBQSxFQUNOO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsTUFBTSxRQUFRLE1BQU0sWUFBWTtBQUFBLFFBQ2hDLE1BQU0sUUFBUSxNQUFNLFNBQVMsV0FBVztBQUFBLFFBQ3hDLE1BQU0sUUFBUSxNQUFNLFNBQVMsV0FBVztBQUFBLFFBQ3hDLE9BQU8sUUFBUSxNQUFNLFNBQVMsWUFBWTtBQUFBLFFBQzFDLE9BQU8sUUFBUSxNQUFNLFNBQVMsWUFBWTtBQUFBLE1BQzVDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxhQUFhLENBQUM7QUFBQSxJQUMxQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
