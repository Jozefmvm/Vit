
const { BasePage } = require('../BasePage');


class Header extends BasePage{


    get actionLinkHeader(){
        return $('//*[@href="/highlight/globalpromo/"]')
    }

    get brandLinkHeader(){
        return $('//*[@href="/brand/"]')
    }

    get headerLinks(){
        return $$('//*[@class="cr5"]/li')
    }


    get currency(){
        return $('//*[@class="ui-f6 ui-g7"]/span[contains(text(),"BYN")]')
    }

    get fieldChange(){
        return $('//*[@role="combobox"]')
    }


    get cityCurrent(){
        return $('//*[@class="ui-j3" and contains(text(),"Минск")]')
    }

    get cityCurrentMoskow(){
        return $('//*[@class="ui-j3" and contains(text(),"Мосвка")]')
    }

    get cityAfterChanging(){
        return $('//*[@class="ui-j3" and contains(text(),"Москва")]')
    }

    get changeCityLink(){
        return $('.k2.k5.tsBodyM.ui-f2 .ui-f4 .ui-f6.ui-g7')
    }

    get elementForClickChangeCity(){
        return $('.d4m.tsBodyL')
    }

    get elementForSelectCityMoskow(){
        return $('//*[@class="d4m tsBodyL" and contains(text(),"Москва") ]')
    }

    get elementForSelectCityMinsk(){
        return $('//*[@class="d4m tsBodyL" and contains(text(),"Минск") ]')
    }

    get favoritesLinkHeader(){
        return $('//*[@href="/my/favorites"]')
    }

    get elementForCheckFavoritesLink(){
        return $('//*[@class="ui-a6f"]')
    }

    get orderElement(){
        return $('//*[@href="/my/orderlist"]')
    }



    async ClickToElement (element){
        await browser.pause(2000)
        await element.click()
    }

    

    async changeCurrency (current, fieldForChange, name){
        await browser.pause(2000)
        await current.click()
        await fieldForChange.click()
        await fieldForChange.addValue(name)
        await browser.keys('Enter')
    }



    async changeCity (linkForChanging, newCityElement){
        await browser.pause(2000)
        await linkForChanging.click()
        await browser.pause(2000)
        await this.elementForClickChangeCity.click()
        await newCityElement.click()
    }



}


module.exports = { Header };