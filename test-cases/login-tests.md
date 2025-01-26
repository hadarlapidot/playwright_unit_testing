# **Test Design for Swag Labs: Login Flow**

## **Test Scenarios:**

**Login Scenario:**

- **Test Case 1**: Login with valid credentials.
- **Test Case 2**: Login with invalid username.
- **Test Case 3**: Login with invalid password.
- **Test Case 4**: Login with both fields empty.

## **Test Cases:**

### **Test Case 1**: Login with valid credentials

- **Test Data**:
  - Username: `standard_user`
  - Password: `secret_sauce`
- **Steps**:
  1. Go to the login page.
  2. Enter the valid username and password.
  3. Click the "Login" button.
- **Expected Result**:
  - User is successfully logged in and redirected to the inventory.

---

### **Test Case 2**: Login with invalid username

- **Test Data**:
  - Username: `wronguser`
  - Password: `secret_sauce`
- **Steps**:
  1. Go to the login page.
  2. Enter the invalid username and valid password.
  3. Click the "Login" button.
- **Expected Result**:
  - Display an error message: "Epic sadface: Username and password do not match any user in this service"
  - user is not redirected

---

### **Test Case 3**: Login with invalid password

- **Test Data**:
  - Username: `standard_user`
  - Password: `wrongpassword`
- **Steps**:
  1. Go to the login page.
  2. Enter the valid username and invalid password.
  3. Click the "Login" button.
- **Expected Result**:
  - Display an error message: "Epic sadface: Username and password do not match any user in this service"
  - user is not redirected

---

### **Test Case 4**: Login with both fields empty

- **Test Data**:
  - Username: (empty)
  - Password: (empty)
- **Steps**:
  1. Go to the login page.
  2. Leave both username and password fields empty.
  3. Click the "Login" button.
- **Expected Result**:
  - Display an error message: "Epic sadface: Username and password do not match any user in this service"
  - user is not redirected
