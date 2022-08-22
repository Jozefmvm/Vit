
const { BasePage } = require('./BasePage');

class ProductPage extends BasePage{

    get greenSamsungS20Fe(){
        return $('//*[contains(@href, "/product/smartfon-samsung-galaxy-s20-fe-6-128-gb-zelenyy-608491792")]')
    }

    get blueSamsungS20Fe(){
        return $('//*[contains(@href, "/product/smartfon-samsung-galaxy-s20-fe-6-128-gb-siniy-660358132")]')
    }

    get riekerShoes(){
        return $('//*[contains(@href, "/product/kedy-rieker-budte-zdorovy-523866151/")]/*[@class="u3j"]')
    }

    get xiaomiThermometr(){
        return $('//*[contains(@href, "/product/beskontaktnyy-infrakrasnyy-termometr-xiaomi-ihealth-214570350/")]//*[@class="u3j"]')
    }

    get addTobusket(){
        return $('.k3v.ui-f2.ui-k .ui-f4.ui-k .ui-f6.ui-g.ui-i4.ui-k')
    }

    get transitionToBusket(){
        return $('.k3v.kv2.ui-f2.ui-k .ui-f4.ui-k .ui-f6.ui-g0.ui-g.ui-i4.ui-k.ui-j2 .ui-j3')
    }

    async addItem(element){
        await browser.pause(4000)
        await element.click()
        await browser.pause(4000)
        await this.addTobusket.click()
        await browser.pause(4000)
        await this.transitionToBusket.click()

    }


}

module.exports = { ProductPage }
