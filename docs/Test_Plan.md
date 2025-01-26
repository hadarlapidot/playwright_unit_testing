# Test Plan for "Swag Labs"

## Test 1: Successfull Login

### Test Objectives

- Login functionality: Ensure that users can log in using valid credentials and that invalid login attempts return appropriate error messages.

### Preconditions

- The login page is completely loaded.
- The environment is accessible at [Login.btbisrael.co.il/main/dashboard](Login.btbisrael.co.il/main/dashboard).

### Scope

#### Included:

- User login with valid and invalid credentials
- User login with one or two blank fields

#### Not Included:

- Back end or API testing (focus on UI testing)

### Test Approach

- Functional Testing: Verify that login functionalities works seamlessly.
- Negative Testing: Test invalid inputs and error messages.

### Entry Criteira

- The test enviornemnt is set up and ready (e.g., website is accessible, necessay dependencies installed).

### Exit Criteria

- All critical tests for the login and registration flow have passed or have been documented with valid reasons for failure.

### Test Deliverables

- Automated test scripts.
- Test results (JUnit XML).
- Test logs and screenshots for failed tests.

### Steps to Execute

1. **Open the Application**:

   - Navigate to the specified URL.
   - Confirm that the login page is displayed.

2. **Log In**:
   - Enter the email and password.
   - Click the "Login" button.
   - Validate that the user is redirected to the inventory.

### Post-Conditions

- Ensure the that the user is redirected to the inventory

### Validation Criteria

- The user is redirected to the inventory
