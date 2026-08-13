# Playwright JavaScript Automation Framework

A portfolio project demonstrating end-to-end web test automation with Playwright and JavaScript. The framework follows the Page Object Model (POM) to keep test logic readable, reusable, and maintainable.

## What this project demonstrates

- Playwright UI automation with JavaScript
- Page Object Model with reusable page classes
- Dynamic test data to avoid duplicate-user conflicts
- Assertion-based validation with Playwright Test
- HTML reporting, screenshots, videos, and traces on failure
- GitHub Actions workflow for automated test execution

## Tech stack

| Area | Tools |
| --- | --- |
| Test framework | Playwright Test |
| Language | JavaScript (ES modules) |
| Design pattern | Page Object Model |
| CI | GitHub Actions |
| Reporting | Playwright HTML Report |
| Test application | [Automation Exercise](https://automationexercise.com/) |

## Project structure

```text
.
|-- .github/workflows/        # GitHub Actions CI workflow
|-- data/                     # Reusable test data factories
|-- pages/                    # Page Object Model classes
|-- tests/                    # End-to-end test specifications
|-- playwright.config.js      # Test runner, reporting, and failure-artifact setup
`-- package.json
```

## Scenarios covered

**New user registration**

1. Open the application and navigate to Sign Up / Login.
2. Enter a unique name and email address.
3. Complete the account-information and address form.
4. Verify that the account is created successfully.

**Product catalog**

1. Search the public catalog for a product.
2. Verify that the matching product is displayed.
3. Open a product detail page and verify availability information.

**Contact page**

1. Open the Contact Us page.
2. Verify all required form fields are available for the user.

## Run locally

```bash
npm install
npx playwright install
npm test
```

View the report after a test run:

```bash
npx playwright show-report
```

## CI workflow

Every push and pull request to `main` runs the Chromium test suite in GitHub Actions. The workflow uploads the Playwright HTML report even if a test fails.

## Resume-ready project entry

Use this only after publishing the repository and running the workflow successfully:

> **Playwright JavaScript Automation Framework | GitHub**
> Built a Page Object Model-based Playwright automation framework for end-to-end account registration. Added reusable test data, HTML reporting, failure screenshots/traces, and GitHub Actions execution.

## Notes

This repository uses the public Automation Exercise site solely for learning and portfolio demonstration. Do not place confidential client, employer, customer, or production data in this repository.
