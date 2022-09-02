
const { BasePage } = require('../BasePage')

class Search extends BasePage{


    get searchFieldXpath(){
        return $('//*[@class="iaa4"]');
    }

    get resulrOfRequestItem(){
        return $('.aah7 .aa7h');
    }

    get filterForSearching(){
        return $('.iaa2 .i2aa');
    }

    get electronicaElement(){
        return $('//*[@src="https://cdn1.ozone.ru/graphics/categories_icons/2019icons/electronics-new.svg"]');
    }

    get pharmacyElement(){
        return $('//*[@src="https://cdn1.ozone.ru/graphics/categories_icons/2019icons/pharmacy-new.svg"]');
    }

    get sportAndRecreation(){
        return $('//*[@src="https://cdn1.ozone.ru/graphics/categories_icons/2019icons/sports-new.svg"]');
    }


    get abortFilterElement(){
        return $('.iaa2.ia2a .aai3');
    }


    async searchSomething(value){
        await this.searchFieldXpath.waitForClickable({ timeout:4000 });
        await this.searchFieldXpath.click();
        await this.searchFieldXpath.setValue(value);
        await this.searchFieldXpath.waitForClickable({ timeout:4000 });
        await browser.keys('Enter');
    }


    async setFilter(element){
        if (await this.abortFilterElement.isDisplayed()){
            await this.abortFilterElement.waitForClickable({ timeout:4000 });
            await this.abortFilterElement.click();
            await this.filterForSearching.waitForClickable({ timeout:4000 });
            await this.filterForSearching.click();
            await element.waitForClickable({ timeout:4000 });
            await element.click();
        }
        else{
            await this.filterForSearching.waitForClickable({ timeout:4000 });
            await this.filterForSearching.click();
            await element.waitForClickable({ timeout:4000 });
            await element.click();
        }
    }

}

module.exports = { Search }
