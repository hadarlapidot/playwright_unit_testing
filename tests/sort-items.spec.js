const { test, expect } = require("@playwright/test");
const InventoryPage = require("../pages/inventory.page.js");
const LoginPage = require("../pages/login.page.js");
const testData = require("../data/test-data.js");

test.describe("Sort items by price(low to high)", () => {
  test.beforeEach(async ({ page }) => {
    //first login
    const loginPage = new LoginPage(page);
    await page.goto("https://www.saucedemo.com/");
    await loginPage.login(testData.validUsername, testData.validPassword);
  });

  test("Sort items by price(low to high)", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    // sort the items
    await inventoryPage.sortBy("lohi");
    // get the array of items prices
    const prices = await inventoryPage.getItemsPrices();
    // create a sorted duplicate
    const sortedPrices = [...prices].sort((a, b) => a - b);
    // Verify the prices array is sorted
    expect(prices).toEqual(sortedPrices);
    await page.screenshot({
      path: `./screenshots/ItemsSorted-LowtoHigh.png`,
    });
  });

  test("Sort items by price(high to low)", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    // sort the items
    await inventoryPage.sortBy("hilo");
    // get the array of items prices
    const prices = await inventoryPage.getItemsPrices();
    // create a sorted duplicate
    const sortedPrices = [...prices].sort((a, b) => b - a);
    // Verify the prices array is sorted
    expect(prices).toEqual(sortedPrices);
    await page.screenshot({
      path: `./screenshots/ItemsSorted-HightoLow.png`,
    });
  });
});
