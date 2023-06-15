# Cloudflare Disposable email blocker

This App will help protecting your registering by accepting only valid email addresses.

## Description

The App is an indispensable tool that provides a superior line of defense for your registering form, enhancing their security and reliability.
The App is also fully customizable.
The Ap serves as a critical tool in reducing spam, improving user experience, and maintaining the integrity of your website's data.

### Key Features

- Detect invalid emails.
- Detect invalid Domains.
- Detect and Block disposable emails.
- We crawl the disposable email domains daily to keep safe from fake uses.
- Detect and Block webmail emails.
- Custom Error Message

## Setup

Clone the repo

Install the dependencies with `yarn install` then build the project with `yarn build` (or `npm run build`).

Next, navigate to our [App Creator](https://www.cloudflare.com/apps/developer/app-creator) and upload your project directory.

## Usage

- `yarn start` (or `npm start`) Sets up your dev environment and runs Webpack in watch mode.
- `yarn build` (or `npm run build`) Lints your project and compiles your JavaScript and CSS once for release.

### Other Interesting Scripts

- `dev:setup` Add other initialization scripts to your development pipeline here.

The project uses [yarn-run-all](https://www.npmjs.com/package/yarn-run-all) which makes it easy to run tasks in series or parallel using `yarn` or `npm`.
