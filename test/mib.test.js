describe("MiB Tests", () => {
  it("Login and Check Mi Biblioteca Block", async () => {
    const [ingresarButton] = await page.$x(
      "//*[@id='__next']/header/div/div[4]/button"
    );

    await ingresarButton.click();

    const iframeElement = await page.$("#loginIframe");
    const loginFrame = await iframeElement.contentFrame();

    await loginFrame.waitForSelector("#idToken1");

    const username = await loginFrame.$("#idToken1");
    const password = await loginFrame.$("#idToken2");

    await username.type("1140370981");
    await password.type("1469");

    const submitButton = await loginFrame.$("#loginButton_0");

    await submitButton.click();

    await page.waitForXPath(
      "//*[@id='__next']/header/div/div[4]/div/button/span/span[2]"
    );

    const [dropdown] = await page.$x(
      "//*[@id='__next']/header/div/div[4]/div/button/span/span[2]"
    );
    await dropdown.click();

    const [misContenidosButton] = await page.$x(
      "//*[@id='dropMenu']/div/div/div/div/ul/nav[1]/div"
    );
    await misContenidosButton.click();

    await page.waitForXPath("//*[@id='__next']/div[2]/div/div[2]");

    const [miBibliotecaBlock] = await page.$x(
      "//*[@id='__next']/div[2]/div/div[2]"
    );

    if (!miBibliotecaBlock)
      throw new Error("Bloco Mi Biblioteca não encontrado!");
  });
});
