
const { BasePage } = require('./BasePage');

class BusketPage extends BasePage{


    get itemInBusket(){
        return $('.rd6.dr7.r7d.ds0.tsBodyM.ua9')
    }

    get amountOfThingsPage(){
        return $('.ui-q5.ui-q6 .ui-r .ui-r0')
    }

    get amountOfThingsHeaderBusket(){
        return $('//*[@href="/cart"]/*[@class="tsCaptionBold c6w"]')
    }

    get clearBusket(){
        return $('//*[@class="ra3 r3a"][contains(text(), "Удалить выбранные")]')
    }

    get verificationOfClearing(){
        return $('//*[@class="ui-f6"]/*[@class="ui-j3"][contains(text(), "Удалить")]')
    }

    get emptyBusketConfirmation(){
        return $('.ar4 .ra4')
    }


    get popUpWinpowClose(){
        return $('//*[@class="ui-f6 ui-g7 ui-j0"]')
    }

    async clearingOfBusket(){
        if (this.popUpWinpowClose.isDisplayed()){
           await this.popUpWinpowClose.click()
           await browser.pause(2000)
           await this.clearBusket.click()
           await browser.pause(2000)
           await this.verificationOfClearing.click()
        }
        else{
           await this.clearBusket.waitForClickable()
           await this.clearBusket.click()
           await this.verificationOfClearing.waitForClickable()
           await this.verificationOfClearing.click()
        }
    }

    async clearingAfterPrevious(){
        await browser.pause(3000)
        await this.clearBusket.click()
        await browser.pause(3000)
        await this.verificationOfClearing.click()

    }



}

module.exports = { BusketPage }
