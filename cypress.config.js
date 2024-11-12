const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://app:3001/",
    screenshotOnRunFailure: false,
    video: false,
    retries: 1,
    defaultCommandTimeout: 15_000,
    waitForAnimations: true,
    supportFile: false, // Disable the support file
    responseTimeout: 120_000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});