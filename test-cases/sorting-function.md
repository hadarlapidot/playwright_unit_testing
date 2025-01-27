# **Test Design for Swag Labs: Sorting Functionality**

## **Test Scenarios**

### **Scenario 1: Sorting Items by Price (Low to High)**

- Verify that items are sorted in ascending order of their price when the "Price (low to high)" option is selected.

### **Scenario 2: Sorting Items by Price (High to Low)**

- Verify that items are sorted in descending order of their price when the "Price (high to low)" option is selected.

---

## **Test Cases**

### **Test Case 1: Sort Items by Price (Low to High)**

- **Preconditions**:
  - User is logged in.
  - The inventory page is loaded with items priced differently.
- **Steps**:
  1. Navigate to the inventory page.
  2. Select the "Price (low to high)" option from the sorting dropdown.
  3. Capture the prices of all items displayed on the page.
  4. Verify the prices are in ascending order.
- **Expected Result**:
  - The items are displayed in ascending order of their price.

---

### **Test Case 2: Sort Items by Price (High to Low)**

- **Preconditions**:
  - User is logged in.
  - The inventory page is loaded with items priced differently.
- **Steps**:
  1. Navigate to the inventory page.
  2. Select the "Price (high to low)" option from the sorting dropdown.
  3. Capture the prices of all items displayed on the page.
  4. Verify the prices are in descending order.
- **Expected Result**:
  - The items are displayed in descending order of their price.
