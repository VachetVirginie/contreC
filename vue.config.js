const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Contre C",
    themeColor: "#FFFFFF",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    // workboxOptions: {
    //   skipWaiting: true,
    // },
    // configure the manifest options
    manifestOptions: {
      display: "landscape",
      background_color: "#FFFFFF",
      // ...
    },
  },
});
