
const { BasePage } = require('./BasePage');

class MainPage extends BasePage{

    get inputPromoCodeField () {
        return $('p.ui-a6a')
        }

    get siteGreetingImg () {
        return $('.a4.aac5')
    }

    get ButtonPromocodeEnter () {
        return $('.ui-f6.ui-f8.ui-k')
    }

    get popularThingsElement(){
        return $('.a4.a5.dx.tsHeadL')
    }


    async clickOnGreetingImg() {
        await this.siteGreetingImg.waitForClickable()
        await this.siteGreetingImg.click()
        
    }
}

module.exports = { MainPage }
