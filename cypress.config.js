const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  projectId: '1igfuy',
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 15000,
  env: {
    url: 'https://rahulshettyacademy.com/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/examples/*.js',
    //specPattern: 'cypress/integration/examples/BDD/*.feature',
    watchForFileChanges: true
  },
  
    "retries": 1
  
});
