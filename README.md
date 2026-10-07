# Sweetshop.netlify.app
SweetShop — Playwright E2E Automation Framework
The framework automates critical end-to-end user journeys of the SweetShop application, with a focus on:
🔐 User interactions
🛍️ Product selection
🛒 Shopping cart validation
💳 Order workflow
✅ Functional validations
🔄 End-to-end regression testing

The project follows a Page Object Model (POM) approach to improve code maintainability, reusability, and scalability.

Each application page has its own class containing:

Page locators
Page-specific actions
Reusable methods
Validation-related functionality

Framework Features
✅ Page Object Model

Reusable page classes separate application interaction from test logic.

✅ TypeScript

Strong typing improves code readability, maintainability, and early error detection.

✅ Custom Fixtures

Playwright fixtures are used to initialize and inject reusable page objects into test cases.
