
const { BasePage } = require('../BasePage');


class Header extends BasePage{


    get actionLinkHeader(){
        return $('//*[@href="/highlight/globalpromo/"]');
    }

    get brandLinkHeader(){
        return $('//*[@href="/brand/"]');
    }

    get headerLinks(){
        return $$('//*[@class="cr5"]/li');
    }

    get currency(){
        return $('//*[@class="ui-a3 ui-b4"]/span[contains(text(),"BYN")]');
    }

    get currencyAfterChanging(){
        return $('//*[@class="ui-a3 ui-b4"]/span[contains(text(),"USD")]');
    }

    get fieldChange(){
        return $('//*[@role="combobox"]');
    }

    get cityCurrent(){
        return $('//*[@class="ui-e0" and contains(text(),"Минск")]');
    }

    get cityCurrentMoskow(){
        return $('//*[@class="ui-e0" and contains(text(),"Мосвка")]');
    }

    get cityAfterChanging(){
        return $('//*[@class="ui-e0" and contains(text(),"Москва")]');
    }

    get changeCityLink(){
        return $('.ui-a3.ui-c6 .ui-d6');
    }

    get elementForClickChangeCity(){
        return $('.m5d.tsBodyL');
    }

    get elementForSelectCityMoskow(){
        return $('//*[@class="m5d tsBodyL" and contains(text(),"Москва") ]');
    }

    get elementForSelectCityMinsk(){
        return $('//*[@class="m5d tsBodyL" and contains(text(),"Минск") ]');
    }

    get favoritesLinkHeader(){
        return $('//*[@href="/my/favorites"]');
    }

    get orderElement(){
        return $('//*[@href="/my/orderlist"]');
    }


    async ClickToElement (element){
        await element.waitForClickable({ timeout:4000 });
        await element.click()
    }

    

    async changeCurrency (current, fieldForChange, name){
        await current.waitForClickable({ timeout:4000 });
        await current.click();
        await fieldForChange.waitForClickable({ timeout:4000 });
        await fieldForChange.click();
        await fieldForChange.addValue(name);
        await browser.keys('Enter');
    }



    async changeCity (linkForChanging, newCityElement){
        await linkForChanging.waitForClickable({ timeout:4000 });
        await linkForChanging.click();
        await this.elementForClickChangeCity.waitForClickable({ timeout:4000 });
        await this.elementForClickChangeCity.click();
        await newCityElement.click();
    }



}


module.exports = { Header };
