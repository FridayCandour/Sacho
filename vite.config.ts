// import { VitePWA } from "vite-plugin-pwa";
// import compress from "vite-plugin-compress";
/** @type {import('vite').UserConfig} */

export default {
  publicDir: "public",
  plugins: [
    // VitePWA({
    //   base: "/",
    //   srcDir: "src",
    //   srcSrc: "src/sw.ts",
    //   filename: "sw.ts",
    //   includeManifestIcons: false,
    //   injectRegister: false,
    //   registerType: "autoUpdate",
    //   mode: "production",
    //   strategies: "generateSW",
    //   devOptions: {
    //     enabled: true,
    //   },
    //   workbox: {
    //     globPatterns: ["**/*.{js,css,html,ico,png,svg,gif,jpeg,jpg,txt,}"],
    //     cleanupOutdatedCaches: true,
    //     clientsClaim: true,
    //     skipWaiting: true,
    //   },
    //   manifest: {
    //     name: "Unihub Creators",
    //     short_name: "Unihub Creators",
    //     description: "Unihub Creators",
    //     related_applications: [
    //       {
    //         platform: "android",
    //         url: "https://www.unihub.trgwii.com/admin",
    //         id: "chrome",
    //       },
    //     ],
    //     id: "/",
    //     start_url: "/",
    //     theme_color: "#4f51b5",
    //     background_color: "#f8f7fb",
    //     display: "standalone",
    //     orientation: "portrait-primary",
    //     prefer_related_applications: false,
    //     // @ts-ignore
    //     features: ["fast", "simple"],
    //     categories: ["education"],
    //   },
    // }),
    // compress,
    // legacy,
  ],
};
