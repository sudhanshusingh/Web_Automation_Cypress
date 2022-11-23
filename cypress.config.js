const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');


module.exports = defineConfig({
  e2e: {
    "baseUrl" : "https://educator-wip.diy.org/",
    //"projectId" : "Web_Automation_Cypress",
    projectId: 'uoranj',
    setupNodeEvents(on, config) {
      // implement node event listeners here
       addMatchImageSnapshotPlugin(on,config)
        return config;
    },
    excludeSpecPattern: ["**/__snapshots__/*","**/__image_snapshots__/*"],
    video:false
  },
});
