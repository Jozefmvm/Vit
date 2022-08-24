const { PageFactory } = require('../pageObjects/PageFactory')
const pageFactory = new PageFactory()


describe ('Header testing', function() {


    before('Navigate to the site and maximize window', async () => {
        await pageFactory.header.navigate('https://ozon.by/');
        await browser.setWindowSize(1920, 1080);
    })


    it('Should be appropiate link in browser line after click on "Акции" - "https://ozon.by/highlight/globalpromo/"', async() => {
        await pageFactory.header.ClickToElement(pageFactory.header.actionLinkHeader)
        const title = await browser.getUrl()
        await expect(title).toEqual('https://ozon.by/highlight/globalpromo/')
    })


    it('Should be appropiate link in browser link after click on "Бренды" "https://ozon.by/brand/"', async() => {
        await pageFactory.header.ClickToElement(pageFactory.header.brandLinkHeader)
        const title = await browser.getUrl()
        await expect(title).toEqual('https://ozon.by/brand/')
    })


    it('Should be approrpiate link after click to orders in header "https://www.ozon.by/my/orderlist"', async() => {
        await pageFactory.header.ClickToElement(pageFactory.header.orderElement)
        const linkOfPage = await browser.getUrl()
        await expect(linkOfPage).toEqual('https://ozon.by/my/orderlist')
    })


    it('Should be appropiate currency after change from BYN to USD - "USD"', async() => {
        await expect(pageFactory.header.currency).toHaveText('BYN')
        await pageFactory.header.changeCurrency(pageFactory.header.currency, pageFactory.header.fieldChange, 'USD')
        await expect(pageFactory.header.currencyAfterChanging).toHaveText('USD')
    })


    it('Should be appropiate city after change from "Минск" to "Москва" - "Москва"', async() => {
        await expect(pageFactory.header.cityCurrent).toHaveText('Минск')
        await pageFactory.header.changeCity(pageFactory.header.changeCityLink, pageFactory.header.elementForSelectCityMoskow)
        await expect(pageFactory.header.cityAfterChanging).toHaveText('Москва')
    })



})
