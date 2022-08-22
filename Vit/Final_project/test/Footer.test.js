const { PageFactory } = require('../pageObjects/PageFactory')
const pageFactory = new PageFactory()


describe ('Footer testing', function() {


    before('Navigate to the site and maximize window', async () => {
        await pageFactory.footer.navigate('https://ozon.by/');
        await browser.setWindowSize(1920, 1080);
    })


    it('Should be appropiate link in footer element "job.ozon.ru"', async() => {
        const footerElementJob = await pageFactory.footer.vacanciesFooterLink
        await expect(footerElementJob).toHaveHrefContaining('job.ozon.ru')
        await expect(footerElementJob).toBeClickable()
    })


    it('Should be appropiate link in footer element "litres.ru"', async() => {
        const footerElementLiters = await pageFactory.footer.litersFooterLink
        await expect(footerElementLiters).toHaveHrefContaining('litres.ru')
        await expect(footerElementLiters).toBeClickable()
    })


    it('Should be appropiate link in footer element "route256.ozon.ru"', async() => {
        const footerElementRoute = await pageFactory.footer.routeFooterLink
        await expect(footerElementRoute).toHaveHrefContaining('route256.ozon.ru')
        await expect(footerElementRoute).toBeClickable()
    })



})
