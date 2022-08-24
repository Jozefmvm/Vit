const { PageFactory } = require('../pageObjects/PageFactory')
const pageFactory = new PageFactory()


describe ('Main Page testing', function() {


    before('Navigate to the site and maximize window', async () => {
        await pageFactory.mainPage.navigate('https://ozon.by/');
        await browser.setWindowSize(1920, 1080);
    })


    it('Should be appropiate text in title of MainPage "OZON — интернет-магазин. Миллионы товаров по выгодным ценам"', async() => {
        const mainPageTitle = await browser.getTitle();
        expect(mainPageTitle).toEqual('OZON — интернет-магазин. Миллионы товаров по выгодным ценам');
    })


    it('Should be appropiate text in promokodField on the MainPage "Введите промокод"', async() => {
        const inputFieldText = await pageFactory.mainPage.inputPromoCodeField.getText();
        await expect(inputFieldText).toEqual('Введите промокод');
    })


    it('Should be appropiate link from greeting IMG "https://www.ozon.ru/highlight/tovary-po-vygodnoy-tsene-582383/"', async() => {
       await expect(pageFactory.mainPage.siteGreetingImg).toHaveHrefContaining('https://www.ozon.ru/highlight/tovary-po-vygodnoy-tsene-582383/');
    })


    it('Should be appropriate text on the button enter "Вход или регистрация"', async() => {
        const buttonEnterPromocode = await pageFactory.mainPage.ButtonPromocodeEnter.getText();
        await expect(buttonEnterPromocode).toEqual('Вход или регистрация');
    })


    it('Should be appropriate text on Main Page  "Популярные товары"', async() => {
        const popularThings = await pageFactory.mainPage.popularThingsElement.getText();
        await expect(popularThings).toEqual('Популярные товары');
    })



})
