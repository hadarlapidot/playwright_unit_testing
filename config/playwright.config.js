const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  reporter: [
    ["junit", { outputFile: "test-results/results.xml" }],
    ["html", { outputFolder: "test-results" }],
  ],
});
