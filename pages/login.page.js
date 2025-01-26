class LoginPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.usernameInput = page.locator("#user-name");
    this.passwordInput = page.locator('[data-test="password"]');
    this.submitButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator(".error-message-container");
  }

  // Actions
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

module.exports = LoginPage;
