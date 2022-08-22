const { PageFactory } = require('../pageObjects/PageFactory')
const pageFactory = new PageFactory()


describe ('Order testing', function() {


    before('Navigate to the site and maximize window', async () => {
        await pageFactory.mainPage.navigate('https://ozon.by/');
        await browser.setWindowSize(1920, 1080);
    })


    it('Should be appropiate text in busket "Смартфон Samsung Galaxy S20 FE 6/128 ГБ, зеленый"', async() => {
        await pageFactory.search.searchSomething('Samsung Galaxy S20 Fe')
        await pageFactory.productPage.addItem(pageFactory.productPage.greenSamsungS20Fe)
        const busket = await pageFactory.busketPage.itemInBusket
        await expect(busket).toHaveText('Смартфон Samsung Galaxy S20 FE 6/128 ГБ, зеленый')
        const busketUp = await pageFactory.busketPage.amountOfThingsHeaderBusket
        await expect(busketUp).toHaveText('1')
        
    })


    it('Should be appropiate text in busket "мартфон Samsung Galaxy S20 FE 6/128 ГБ, синий"', async() => {
        await pageFactory.busketPage.clearingOfBusket()
        await pageFactory.search.searchSomething('Samsung Galaxy S20 Fe')
        await pageFactory.productPage.addItem(pageFactory.productPage.blueSamsungS20Fe)
        const busket = await pageFactory.busketPage.itemInBusket
        await expect(busket).toHaveText('Смартфон Samsung Galaxy S20 FE 6/128 ГБ, синий')
        const busketUp = await pageFactory.busketPage.amountOfThingsHeaderBusket
        await expect(busketUp).toHaveText('1')
    })


    it('Should be appropiate text in busket "Кеды Rieker Будьте здоровы"', async() => {
        await pageFactory.busketPage.clearingAfterPrevious()
        await pageFactory.search.searchSomething('rieker')
        await pageFactory.productPage.addItem(pageFactory.productPage.riekerShoes)
        const busket = await pageFactory.busketPage.itemInBusket
        await expect(busket).toHaveText('Кеды Rieker Будьте здоровы')
        const busketUp = await pageFactory.busketPage.amountOfThingsHeaderBusket
        await expect(busketUp).toHaveText('1')
    })


    it('Should be appropiate text in busket "Бесконтактный инфракрасный термометр Xiaomi iHealth"', async() => {
        await pageFactory.busketPage.clearingAfterPrevious()
        await pageFactory.search.searchSomething('xiaomi градусник')
        await pageFactory.productPage.addItem(pageFactory.productPage.xiaomiThermometr)
        const busket = await pageFactory.busketPage.itemInBusket
        await expect(busket).toHaveText('Бесконтактный инфракрасный термометр Xiaomi iHealth')
        const busketUp = await pageFactory.busketPage.amountOfThingsHeaderBusket
        await expect(busketUp).toHaveText('1')
    })


    it('Should be appropiate number in busket after 2 orders "2"', async() => {
        await pageFactory.busketPage.clearingAfterPrevious()
        await pageFactory.search.searchSomething('Samsung Galaxy S20 Fe')
        await pageFactory.productPage.addItem(pageFactory.productPage.blueSamsungS20Fe)
        await pageFactory.search.searchSomething('rieker')
        await pageFactory.productPage.addItem(pageFactory.productPage.riekerShoes)
        const busketUp = await pageFactory.busketPage.amountOfThingsHeaderBusket
        await expect(busketUp).toHaveText('2')
    })


})
