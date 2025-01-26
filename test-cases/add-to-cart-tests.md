# \*_Test Design for Swag Labs: Add to Cart Flow_

- **Test Case 1**: Add to cart.
- **Test Case 2**: Remove from cart.

## **Test Cases:**

### **Test Case 1**: Add to cart

- **Steps**:
  1. Go to the inventory page.
  2. Click "add to cart" on the "Sauce Labs Backpack" item.
  3. Ensure the item has been added to the cart
- **Expected Result**:
  - The number inside the red circle should be increased by 1.
  - The button "Add to cart" should change its text to "Remove" and it's colot to red.

---

### **Test Case 2**: Remove from cart

- **Steps**:
  1. Go to the inventory page.
  2. Click "Remove" on the "Sauce Labs Backpack" item.
  3. Ensure the item has been removed from the cart
- **Expected Result**:
  - The number inside the red circle should be decreased by 1.
  - The button "Add to cart" should change its text to "Add to cart" and it's colot to black.
