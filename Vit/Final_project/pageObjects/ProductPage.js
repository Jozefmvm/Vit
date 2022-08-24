
const { BasePage } = require('./BasePage');

class ProductPage extends BasePage{

    get greenSamsungS20Fe(){
        return $('//*[contains(@href, "/product/smartfon-samsung-galaxy-s20-fe-6-128-gb-zelenyy-608491792")]');
    }

    get blueSamsungS20Fe(){
        return $('//*[contains(@href, "/product/smartfon-samsung-galaxy-s20-fe-6-128-gb-siniy-660358132")]');
    }

    get riekerShoes(){
        return $('//*[contains(@href, "/product/kedy-rieker-budte-zdorovy-523866151/")]');
    }

    get xiaomiThermometr(){
        return $('//*[contains(@href, "/product/beskontaktnyy-infrakrasnyy-termometr-xiaomi-ihealth-214570350/")]');
    }

    get addTobusket(){
        return $('.v4k.ui-a.ui-e7 .ui-a1.ui-e7 .ui-a3.ui-a7.ui-d1.ui-e7');
    }

    get transitionToBusket(){
        return $('//*[contains(text(), "В корзине")]/*[contains(text(), "Перейти")]');
    }

    async addItem(element){
        await element.waitForClickable({ timeout:4000 });
        await element.click();
        await this.addTobusket.waitForClickable({ timeout:4000 });
        await this.addTobusket.click();
        await this.transitionToBusket.waitForClickable({ timeout:4000 });
        await this.transitionToBusket.click();

    }


}

module.exports = { ProductPage }
