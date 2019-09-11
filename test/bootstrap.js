const puppeteer = require("puppeteer");
const { expect } = require("chai");
const _ = require("lodash");
const globalVariables = _.pick(global, ["browser", "expect"]);

const options = {
  headless: false,
  defaultViewport: null,
  slowMo: 100,
  args: ["--start-maximized", "--ignore-certificate-errors"]
};

before(async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(options);

  page = await browser.newPage();

  await page.goto("https://juegos-staging.personal.com.ar", {
    waitUntil: "load",
    timeout: 0
  });
});

beforeEach(async () => {});

afterEach(async () => {});

after(async () => {
  await page.close();
  browser.close();

  global.browser = globalVariables.browser;
  global.expect = globalVariables.expect;
});
