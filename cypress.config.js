const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://opencart.abstracta.us/',
    specPattern: 'cypress/**/*.spec(.cy)?.js',
    env: {
      swagger: 'https://petstore.swagger.io/v2',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
