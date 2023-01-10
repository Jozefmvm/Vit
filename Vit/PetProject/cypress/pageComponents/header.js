class header{
    

    constructor(){
        this.logoLink = () => cy.get(".icp-nav-link-inner");
        this.changeDeliveryLink = () => cy.get(".nav-a.nav-a-2.a-popover-trigger.a-declarative.nav-progressive-attribute");
        this.language = () => cy.get(".nav-a.nav-a-2.icp-link-style-2");
        this.cartIcon = () => cy.get(".nav-cart-icon.nav-sprite");
    }


    changeLanguagetoES(){
        this.language().trigger('mouseover');
        cy.contains('ES').click({force : true});
    }


    changeLanguagetoAr(){
        this.language().trigger('mouseover');
        cy.contains('AR').click({force : true});
    }


    changeLanguagetoEn(){
        this.language().click();
        cy.contains('English').click();
        cy.contains("Save Changes").click({force : true});
    }

    
}


module.exports = { header };
