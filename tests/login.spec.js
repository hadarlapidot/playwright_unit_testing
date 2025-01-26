const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/login.page");
const testData = require("../data/test-data.js");

test.describe("Login tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Login with valid credentails", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto("https://www.saucedemo.com/");
    await loginPage.login(testData.validUsername, testData.validPassword);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("Login with invalid username and valid password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(testData.invalidUsername, testData.validPassword);
    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  test("Login with valid username and invalid password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(testData.validUsername, testData.invalidPassword);
    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  test("Login with empty fields", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("", "");
    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Username is required"
    );
  });
});
