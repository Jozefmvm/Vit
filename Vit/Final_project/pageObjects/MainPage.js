
const { BasePage } = require('./BasePage');

class MainPage extends BasePage{

    get inputPromoCodeField () {
        return $('//*[contains(text(), "Введите промокод")]')
        }

    get siteGreetingImg () {
        return $('.a4.caa5')
    }

    get ButtonPromocodeEnter () {
        return $('//*[@class="ui-a3 ui-a5 ui-e7"]/*[contains(text(), "Вход или регистрация")]')
    }

    get popularThingsElement(){
        return $('.a4.a5.dx1.tsHeadL')
    }

}

module.exports = { MainPage }
