
const { BasePage } = require('./BasePage');

class BusketPage extends BasePage{


    get itemInBusket(){
        return $('.dr9.rd9.sd.sd2.tsBodyM.ua9');
    }

    get amountOfThingsPage(){
        return $('.ui-q5.ui-q6 .ui-r .ui-r0');
    }

    get amountOfThingsHeaderBusket(){
        return $('//*[@href="/cart"]/*[@class="tsCaptionBold w8c"]');
    }

    get clearBusket(){
        return $('//*[@class="ra3 r3a"][contains(text(), "Удалить выбранные")]');
    }

    get verificationOfClearing(){
        return $('//*[@class="ui-a3"]/*[@class="ui-e0"][contains(text(), "Удалить")]');
    }

    get emptyBusketConfirmation(){
        return $('.ar4 .ra4');
    }

    get popUpWinpowClose(){
        return $('//*[@class="ui-a3 ui-b4 ui-d8"]');
    }


    async clearingOfBusket(){
        if (this.popUpWinpowClose.isDisplayed()){
           await this.popUpWinpowClose.click();
           await this.clearBusket.waitForClickable({ timeout:5000 });
           await this.clearBusket.click();
           await this.verificationOfClearing.waitForClickable({ timeout:4000 });
           await this.verificationOfClearing.click();
        }
        else{
           await this.clearBusket.waitForClickable({ timeout:5000});
           await this.clearBusket.click();
           await this.verificationOfClearing.waitForClickable({ timeout:4000 });
           await this.verificationOfClearing.click();
        }
    }

    
    async clearingAfterPrevious(){
        await this.clearBusket.waitForClickable({ timeout:4000 });
        await this.clearBusket.click();
        await this.verificationOfClearing.waitForClickable({ timeout:4000 });
        await this.verificationOfClearing.click();
    }



}

module.exports = { BusketPage }
