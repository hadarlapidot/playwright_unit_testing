const { expect, errors } = require("playwright/test");

class inventoryPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.itemsList = page.locator(".inventory_item_description"); // All the elements in the current page of the inventory
    this.AddBackpackButton = page.locator(
      'button[name="add-to-cart-sauce-labs-backpack"]'
    );
    this.removeBackpackButton = page.locator(
      'button[id="remove-sauce-labs-backpack"]'
    ); // Remove button for the backpack
    this.cartBadge = page.locator(".shopping_cart_badge");
  }

  async AddItem() {
    // add the item to the cart
    await this.AddBackpackButton.click();
  }

  async RemoveItem() {
    await this.removeBackpackButton.click();
  }

  // async AddItem() {
  //   // add the item to the cart
  //   await this.AddBackpackButton.click();
  //   // check if the red circle is now visible(and exist)
  //   await expect(this.cartBadge).toBeVisible(); //It's better to use expect to assert visibility according to documentation
  //   const numOfItems = await this.cartBadge.textContent();
  //   await this.cartBadge.screenshot({
  //     path: `./screenshots/NumberOfItemAfterAddingItem.png`,
  //   });
  // }
}

module.exports = inventoryPage;
