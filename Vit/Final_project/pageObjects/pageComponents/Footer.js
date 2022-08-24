const { BasePage } = require('../BasePage');


class Footer extends BasePage{

    get vacanciesFooterLink(){
        return $('//*[@href="https://job.ozon.ru/"]');
    }

    get litersFooterLink(){
        return $('//*[@href="https://www.litres.ru/"]');
    }

    get routeFooterLink(){
        return $('//*[@href="http://route256.ozon.ru/?utm_source=ozon&utm_medium=organic&utm_campaign=footer"]');
    }
    
}


module.exports = { Footer }
