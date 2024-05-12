// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // Implement a node event listener
//       on("before:browser:launch", (browser, launchOptions) => {
//         // Customize browser launch options
//         if (browser.name === "chrome") {
//           launchOptions.args.push("--disable-dev-shm-usage");
//         }
//       });
//     },
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-allure-plugin",
  env: {
    // Add any environment variables if needed
  },
  pluginsFile: false, // Disable default plugins file to avoid conflicts
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


