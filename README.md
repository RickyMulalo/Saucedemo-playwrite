🧪 Playwright E2E Automation – Sauce Demo
📌 Project Overview

This project demonstrates end-to-end (E2E) test automation of the Sauce Demo application using Playwright with TypeScript. The framework follows industry best practices such as the Page Object Model (POM) and integrates GitHub Actions for continuous integration and automated test execution.

🛠️ Tech Stack

Playwright
TypeScript
Node.js
GitHub Actions (CI/CD)
Page Object Model (POM)

├── tests/                 # Test specs
├── pages/                 # Page Object classes
├── playwright.config.ts   # Playwright configuration
├── .github/workflows/     # GitHub Actions CI pipeline
├── package.json
└── README.md

⚙️ Setup
1️⃣ Prerequisites

Ensure the following are installed:

Node.js (v18 or higher)

npm

Git

2️⃣ Clone the Repository
git clone https://github.com/RickyMulalo/Saucedemo-playwrite.git
cd playwright-sauce-demo

3️⃣ Install Dependencies
npm install

4️⃣ Install Playwright Browsers
npx playwright install

▶️ Run Tests
Run All Tests (Headless)
npx playwright test

Run Tests in Headed Mode
npx playwright test --headed

Run Tests for a Specific Browser
npx playwright test --project=chromium

View Test Report
npx playwright show-report

🔁 CI/CD – GitHub Actions

This project uses GitHub Actions to automatically run Playwright tests on every:

Push to main branch

Pull request

CI Workflow Highlights:

Installs Node.js and project dependencies

Installs Playwright browsers in CI environment

Executes Playwright tests

Uploads Playwright HTML reports as artifacts

📍 CI configuration file:

.github/workflows/playwright.yml

📊 Test Coverage

The automated tests cover key user journeys including:

User login

Add to cart functionality

Checkout process

Order completion flow

✅ Best Practices Implemented

Page Object Model (POM)

Stable locators using test IDs

Cross-browser testing

CI/CD integration

Clean and maintainable TypeScript code

👤 Author

Mulalo Ricky Mulaudzi
Automation Engineer
GitHub: (https://github.com/RickyMulalo/Saucedemo-playwrite
