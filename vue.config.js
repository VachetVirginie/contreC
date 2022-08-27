const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Contre C",
    themeColor: "#2A303C",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    // workboxOptions: {
    //   skipWaiting: true,
    // },
    // configure the manifest options
    manifestOptions: {
      display: "portrait",
      background_color: "#2A303C",
      // ...
    },
  },
});
