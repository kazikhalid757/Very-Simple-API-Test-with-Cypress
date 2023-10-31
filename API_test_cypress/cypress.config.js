const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement a node event listener
      on("before:browser:launch", (browser, launchOptions) => {
        // Customize browser launch options
        if (browser.name === "chrome") {
          launchOptions.args.push("--disable-dev-shm-usage");
        }
      });
    },
  },
});



