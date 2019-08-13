const puppeteer = require("puppeteer");
const { expect } = require("chai");
const _ = require("lodash");
const globalVariables = _.pick(global, ["browser", "expect"]);

const options = {
  headless: true,
  defaultViewport: null,
  args: ["--start-maximized"]
};

before(async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(options);

  page = await browser.newPage();
  await page.goto("");

  const username = await page.$("#username");
  const password = await page.$("#password");

  await username.type("");
  await password.type("");

  await Promise.all([
    page.click("button.submit"),
    page.waitForNavigation({ waitUntil: "load" })
  ]);
});

beforeEach(async () => {});

afterEach(async () => {});

after(async () => {
  await page.close();
  browser.close();

  global.browser = globalVariables.browser;
  global.expect = globalVariables.expect;
});
