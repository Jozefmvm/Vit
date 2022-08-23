
const { BasePage } = require('../BasePage')

class Search extends BasePage{


    get searchFieldXpath(){
        return $('//*[@class="aa1i"]')
    }

    get resulrOfRequestItem(){
        return $('.a3ha .a3ah');
    }

    get filterForSearching(){
        return $('.a9ha .haa9')
    }

    get electronicaElement(){
        return $('//*[@src="https://cdn1.ozone.ru/graphics/categories_icons/2019icons/electronics-new.svg"]')
    }

    get pharmacyElement(){
        return $('//*[@src="https://cdn1.ozone.ru/graphics/categories_icons/2019icons/pharmacy-new.svg"]')
    }

    get sportAndRecreation(){
        return $('//*[@src="https://cdn1.ozone.ru/graphics/categories_icons/2019icons/sports-new.svg"]')
    }



    get abortFilterElement(){
        return $('.a9ha.a9ah .ha9a')
    }


    async searchSomething(value){
        await this.searchFieldXpath.waitForClickable({ timeout:4000 })
        await this.searchFieldXpath.click()
        await this.searchFieldXpath.setValue(value);
        await browser.keys('Enter')
    }


    async setFilter(element){
        if (await this.abortFilterElement.isDisplayed()){
            await this.abortFilterElement.waitForClickable({ timeout:4000 })
            await this.abortFilterElement.click()
            await this.filterForSearching.waitForClickable({ timeout:4000 })
            await this.filterForSearching.click();
            await element.waitForClickable({ timeout:4000 })
            await element.click()
        }
        else{
            await this.filterForSearching.waitForClickable({ timeout:4000 });
            await this.filterForSearching.click();
            await element.waitForClickable({ timeout:4000 });
            await element.click()
        }
    }

}

module.exports = { Search }