const { PageFactory } = require('../pageObjects/PageFactory')
const pageFactory = new PageFactory()


describe ('Search component testing', function() {


    before('Navigate to the site and maximize window', async () => {
        await pageFactory.search.navigate('https://ozon.by/');
        await browser.setWindowSize(1920, 1080);
    })


    it('Should be appropriate text on page and title after searching "Утюг"', async() => {
        await pageFactory.search.searchSomething('Утюг');
        const result = await pageFactory.search.resulrOfRequestItem;
        await expect(result).toHaveTextContaining('Утюг');
        const title = await browser.getTitle();
        await expect(title).toEqual('Утюг - купить на OZON');
    })


    it('Should be appropriate text on page and title after searching "nike"', async() => {
        await pageFactory.search.searchSomething('nike');
        const result = await pageFactory.search.resulrOfRequestItem;
        await expect(result).toHaveTextContaining('nike');
        const title = await browser.getTitle();
        await expect(title).toEqual('nike - купить на OZON');
    })


    it('Should be appropriate text in filter after change "Электроника"', async() => {
        await pageFactory.search.setFilter(pageFactory.search.electronicaElement);
        const resultInsearchFilter = await pageFactory.search.filterForSearching;
        await expect(resultInsearchFilter).toHaveText('Электроника');
    })


    it('Should be appropriate text in filter after change "Аптека"', async() => {
        await pageFactory.search.setFilter(pageFactory.search.pharmacyElement);
        const resultInsearchFilter = await pageFactory.search.filterForSearching;
        await expect(resultInsearchFilter).toHaveText('Аптека');
    })


    it('Should be appropriate text in filter after change "Спорт и отдых"', async() => {
        await pageFactory.search.setFilter(pageFactory.search.sportAndRecreation);
        const resultInsearchFilter = await pageFactory.search.filterForSearching;
        await expect(resultInsearchFilter).toHaveText('Спорт и отдых');
    })


    it('Should be appropriate text in filter after 3 changes "Аптека"', async() => {
        await pageFactory.search.setFilter(pageFactory.search.sportAndRecreation);
        await pageFactory.search.setFilter(pageFactory.search.electronicaElement);
        await pageFactory.search.setFilter(pageFactory.search.pharmacyElement);
        const resultInsearchFilter = await pageFactory.search.filterForSearching;
        await expect(resultInsearchFilter).toHaveText('Аптека');
    })


})
