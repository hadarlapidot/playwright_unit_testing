# QA Automation Project for Swag Labs

This project demonstrates QA automation for the Swag Labs e-commerce website. It showcases the implementation of best practices in end-to-end testing using Playwright.

---

## Features

- **End-to-End Testing**: Critical workflows such as login, sorting, and adding/removing items to/from the cart.
- **Page Object Model (POM)**: For maintainable and scalable test design.
- **CI/CD Integration**: Tests are executed automatically using GitHub Actions.
- **Test Reporting**: JUnit format reports for detailed insights.
- **Screenshots**: Captured after each test for better debugging.

---

## Tools and Technologies

- **Playwright**: Browser automation and testing framework.
- **GitHub Actions**: For continuous integration and delivery.
- **Node.js**: JavaScript runtime.
- **JUnit**: Test reporting format.

---

## Prerequisites

1. Install [Node.js](https://nodejs.org/).
2. Clone this repository:
   ```bash
   git clone https://github.com/hadarlapidot/playwright_unit_testing.git
   ```
3. Navigate to the project directory:

4. Install dependencies:
   ```bash
   npm install @playwright/test --save-dev
   ```

---

## Running Tests

1. **Run All Tests**:
   ```bash
   npx playwright test
   ```
2. **Run a Specific Test Suite**:
   ```bash
   npx playwright test <test-suite-name>
   ```
3. **View the Playwright Report**:
   ```bash
   npx playwright show-report
   ```

---

## CI/CD Integration

This project is integrated with GitHub Actions to:

1. Automatically run tests on every push or pull request.
2. Generate test reports and upload them as artifacts for review.

### Workflow

The CI/CD pipeline is defined in the `.github/workflows/test.yml` file. It:

- Installs dependencies.
- Runs Playwright tests.
- Stores the test results and reports as artifacts.

---

## Project Structure

```
|-- .github
    |-workflows
      |- test.yml
|--config
    |-- package-lock.json
    |-- package.json
    |-- playwright.config.js    # Playwright configuration file
|-- data
    |-- test-data.js
|-- docs
    |-- Test_Plan.md           # Test plan document
|-- node_modules
|-- pages
    |-- inventory.page.js.      # Inventory Page Object
    |-- login.page.js           # Login Page Object
|-- screenshots
|-- test-cases
    |-- add-to-cart-tests.md
    |-- login-tests.md
    |-- sorting-function.md
|-- test-results
├── tests/
│   ├── login.spec.js           # Login test cases
│   ├── Add-items.spec.js       # Add item test cases
    |-- sort-items.spec.js      # sort item test cases
├── test-results/
├── playwright.config.js
└── README.md                   # Project documentation
```

---

## Test Artifacts

- **Test Plan**: [test-plan.md](./docs/Test-Plan.md) - Includes objectives, scope, and the testing strategy.
- **Test Design**: [test-design.md](./test-cases) - Detailed test cases for critical workflows.
- **Screenshots**: screenshots of test results e.g:
  [ItemsSorted-HightoLow.png](./screenshots/ItemsSorted-HightoLow.png)

---

## Key Learning Objectives

This project demonstrates:

1. Writing clean and reusable test scripts using Playwright.
2. Implementing the Page Object Model for scalable test design.
3. Automating test execution with CI/CD pipelines.
4. Producing professional artifacts like test plans, designs, and reports.
5. Debugging effectively with screenshots captured after each test.

---

## Contact

For questions or collaboration, feel free to reach out via GitHub or email.
