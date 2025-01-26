const { test, expect } = require("@playwright/test");
const InventoryPage = require("../pages/inventory.page.js");
const LoginPage = require("../pages/login.page");
const testData = require("../data/test-data.js");

test.describe("Add items to cart and remove them", () => {
  test.beforeEach(async ({ page }) => {
    //first login
    const loginPage = new LoginPage(page);
    await page.goto("https://www.saucedemo.com/");
    await loginPage.login(testData.validUsername, testData.validPassword);
  });

  test("Add item to cart", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.AddItem();
  });
  //   test("Remove an item from the cart", async ({ page }) => {
  //     const inventoryPage = new InventoryPage(page);

  //     await inventoryPage.removeItem();
  //     (await inventoryPage.cartBadgeHasIncreased()) === 1;
  //   });
});
