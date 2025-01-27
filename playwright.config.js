const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  reporter: [["list"], ["junit", { outputFile: "test-results/results.xml" }]],
  timeout: 10000,
  retries: 2,
  testDir: "./tests",
  use: {
    screenshot: "retain-on-failure",
    video: "retain-on-failure",
  },
});
