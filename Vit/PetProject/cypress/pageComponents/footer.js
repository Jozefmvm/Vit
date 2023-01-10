class footer{
    

    constructor(){
        this.careersFooterLink = () => cy.get('a[href*="https://www.amazon.jobs"]');
        this.sellFooterBusinessLink = () => cy.get('a[href^="https://services.amazon.com/amazon"]');
        this.reloadFooterBalanceLink = () => cy.get('a[href^="/gp/browse.html?node=10232440011&ref"]');
        this.ordersFooterLink = () => cy.get('a[href^="https://www.amazon.com/gp/css/order"]');
    }

    clickOnLink(link){
        link.click()
    }

}

module.exports = { footer };
