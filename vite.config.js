import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  if (command === "build") {
    return {
      base: "/rybiarze-online-shop/",
    };
  } else if (command === "serve") {
    return {
      base: "/",
    };
  }
});
