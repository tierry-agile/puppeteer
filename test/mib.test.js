describe("MiB Tests", () => {
  it("Check if main page is Genres List Page", async () => {
    const headerElement = (await page.$x(
      "//*[@id = 'mib-list-breadcrumb-header']//h4"
    ))[0];

    const headerText = await page.evaluate(el => {
      return el.textContent;
    }, headerElement);

    //  Chai Expect (Assert and Should)
    expect(headerText).to.equal("Genres");
  });

  it("Navigate to Age Rating Page through the button", async () => {
    const menuButton = await page.$(".mib-menu-btn-back");
    await menuButton.click();

    const input = await page.$("#main-menu-search-input");
    await input.type("Age Rating");

    const link = (await page.$x("//*[@id='mib-search-menu']//a"))[1];
    await link.click();

    await page.waitForNavigation({ waitUntil: "load" });

    const headerElement = (await page.$x(
      "//*[@id = 'mib-list-breadcrumb-header']//h4"
    ))[0];

    const headerText = await page.evaluate(el => {
      return el.textContent;
    }, headerElement);

    //  Chai Expect (Assert and Should)
    expect(headerText).to.equal("Age Rating");
  });
});
