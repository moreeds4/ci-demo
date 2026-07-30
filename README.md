# ci-demo

A demonstration project showcasing automated end-to-end testing using Playwright with continuous integration (CI) via GitHub Actions.

## What is this project?

This is a **Playwright testing demo project** that demonstrates:
- ✅ Automated browser testing with Playwright
- ✅ CI/CD integration using GitHub Actions
- ✅ Scheduled test runs (weekday mornings)
- ✅ Test reporting and artifact management
- ✅ Model Context Protocol (MCP) integration for testing automation

## Project Structure

```
ci-demo/
├── tests/                    # Test specifications
│   ├── example.spec.js      # Basic Playwright demo tests
│   └── blouse-search.spec.js # E2E test for product search
├── .github/workflows/        # CI/CD configuration
│   └── playwright.yml       # GitHub Actions workflow
├── playwright.config.js     # Playwright test configuration
└── package.json             # Project dependencies and scripts
```

## Features

### Test Suite
- **Example Tests**: Basic tests navigating playwright.dev
- **E2E Tests**: Product search automation on automationpractice.pl
- Tests are configured to run in Chromium browser by default

### CI/CD Pipeline
The GitHub Actions workflow automatically:
- Runs tests on push to `main` or `develop` branches
- Runs tests on pull requests to `main`
- Executes scheduled runs at 09:00 UTC on weekdays (Monday-Friday)
- Can be triggered manually via `workflow_dispatch`
- Uploads test reports as artifacts (30-day retention)
- Uses headless browser mode in CI environment
- Implements retry logic (2 retries on CI)

## Getting Started

### Prerequisites
- Node.js (LTS version recommended)
- npm

### Installation

```bash
# Install dependencies
npm ci

# Install Playwright browsers
npx playwright install --with-deps
```

### Running Tests

```bash
# Run tests in headed mode (local development)
npm test

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests in CI mode (headless with GitHub reporter)
npm run test:ci
```

### MCP Integration

This project includes Model Context Protocol (MCP) support for enhanced testing automation:

```bash
# Run the Playwright MCP server
npm run mcp:playwright
```

## GitHub Actions CI Configuration

The CI workflow includes:
- **Trigger Events**: Push to main/develop, PRs to main, scheduled runs, manual dispatch
- **Environment**: Ubuntu latest with Node.js LTS
- **Timeout**: 60 minutes
- **Test Execution**: Headless mode with GitHub reporter
- **Artifacts**: Test reports uploaded and retained for 30 days

## Technologies Used

- **Playwright** (^1.55.0) - End-to-end testing framework
- **GitHub Actions** - CI/CD automation
- **Model Context Protocol SDK** (^1.0.0) - MCP integration
- **AJV** (^8.17.1) - JSON schema validator

## License

ISC