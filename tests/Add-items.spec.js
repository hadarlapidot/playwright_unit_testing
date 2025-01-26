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
    // Login in and Add an item
    await inventoryPage.AddItem();
    // verify that the red circle is now visible(and exist) and changes to "1"
    const cartBadge = inventoryPage.cartBadge;
    await expect(cartBadge).toBeVisible(); //It's better to use expect to assert visibility according to documentation
    await expect(cartBadge).toHaveText("1");
    await cartBadge.screenshot({
      path: `./screenshots/NumberOfItemAfterAddingItem.png`,
    });

    // verify that the button changes to red "Remove"
    const removeButton = inventoryPage.removeBackpackButton;
    await expect(removeButton).toBeVisible();
    await expect(removeButton).toHaveText("Remove");
  });

  test("Remove an item from the cart", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const removeButton = inventoryPage.removeBackpackButton;
    await inventoryPage.AddItem();
    await inventoryPage.RemoveItem();
    // make sure the red circle is gone
    await expect(inventoryPage.cartBadge).not.toBeVisible();

    // make sure the button turns from "Remove" to "Add to cart"
    const addButton = inventoryPage.AddBackpackButton;
    await expect(addButton).toBeVisible();
    await expect(addButton).toHaveText("Add to cart");
  });
});
