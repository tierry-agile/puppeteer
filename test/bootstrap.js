const puppeteer = require("puppeteer");
const { expect } = require("chai");
const _ = require("lodash");
const globalVariables = _.pick(global, ["browser", "expect"]);

const isHeadless = true;

const options = {
  headless: isHeadless,
  defaultViewport: null,
  args: ["--start-maximized", "--ignore-certificate-errors"]
};

before(async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(options);

  page = await browser.newPage();

  if (isHeadless) await page.setViewport({ width: 1920, height: 1080 });

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
