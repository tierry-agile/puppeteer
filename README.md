# Chrome Headless - Puppeteer, Mocha And Chai

Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

> For now, the project runs only on Chrome. Although there are dependencies that allow tests to run in Firefox, they are not yet stable, and this is not yet covered in this project.

## Installation

Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/) to install the dependencies of the project.

```
npm install
# or
yarn
```

## Usage

> Note: Puppeteer requires at least Node v6.4.0, but the examples below use async/await which is only supported in Node v7.6.0 or greater.

To run the tests, simply run the following command:

```
npm test
# or
yarn test
```

### Run Tests in Headless

By default, the project will run headless. But if you wish, you can change this setting in the project `.env` file, and make the following change:

```
IS_HEADLESS=false
```

### Debug Mode

If you are using the Visual Studio Code IDE, simply press the `F5` key, or navigate to the `Debug > Start Debugging` tab.

## Future Features

- Sidebar with test names 📌
- Possibility to play playlist files with tests to be performed 📌
