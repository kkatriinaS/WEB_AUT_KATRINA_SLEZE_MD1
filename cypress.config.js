const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1000,
    viewportHeight: 660,
    url:"https://katalon-demo-cura.herokuapp.com/",
  },
  
});
