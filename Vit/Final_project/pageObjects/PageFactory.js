const { MainPage } = require('../pageObjects/MainPage');
const { Header } = require('../pageObjects/pageComponents/Header');
const { Search } = require('../pageObjects/pageComponents/searchComponent');
const { ProductPage } = require('../pageObjects/ProductPage');
const { BusketPage } = require('../pageObjects/BusketPage');
const { Footer } = require('../pageObjects/pageComponents/Footer')


class PageFactory {
    
    constructor() {

        this.mainPage = new MainPage();
        this.header = new Header();
        this.search = new Search();
        this.productPage = new ProductPage();
        this.busketPage = new BusketPage();
        this.footer = new Footer();

    }

}

module.exports = { PageFactory }
