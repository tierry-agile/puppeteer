const MainPage = require("../test/pages/MainPage");
const LoginPage = require("../test/pages/LoginPage");

describe("MiB Tests", () => {
  it("Login and Check Mi Biblioteca Block", async () => {
    const mainPageObject = new MainPage(page);

    await mainPageObject.clickOnIngresar();

    const loginPageObject = new LoginPage(page);

    await loginPageObject.login("1140370981", "1469");

    await mainPageObject.goToMisContenidos();

    const doesMiBibliotecaBlockExist = await mainPageObject.checkMiBibliotecaBlockExistence();

    expect(doesMiBibliotecaBlockExist).to.be.true;
  });
});
