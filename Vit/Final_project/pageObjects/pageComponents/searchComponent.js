const { BasePage } = require('../BasePage')

class Search extends BasePage{


    get searchFieldXpath(){
        return $('//*[@class="a0ia"]')
    }

    get resulrOfRequestItem(){
        return $('.ha2a .h2aa');
    }

    get filterForSearching(){
        return $('.ha8a .aah9')
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
        return $('.ha8a.h8aa .aa9h')
    }


    async searchSomething(value){
        await browser.pause(2000)
        this.searchFieldXpath.click()
        this.searchFieldXpath.setValue(value);
        await browser.pause(2000)
        await browser.keys('Enter')
    }


    async setFilter(element){
        if (await this.abortFilterElement.isDisplayed()){
            await this.abortFilterElement.waitForClickable()
            await this.abortFilterElement.click()
            await this.filterForSearching.waitForClickable();
            await this.filterForSearching.click();
            await element.waitForClickable();
            await element.click()
        }
        else{
            await this.filterForSearching.waitForClickable();
            await this.filterForSearching.click();
            await element.waitForClickable();
            await element.click()
        }
    }

}

module.exports = { Search }