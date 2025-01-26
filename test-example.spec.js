const { chromium } = require("playwright");

// IIFE
(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to webpage
  await page.goto("https://www.saucedemo.com/");

  // Interact with the page
  const title = await page.title();
  console.log(`Page title: ${title}`);

  // Close the browser
  await browser.close();
})();
