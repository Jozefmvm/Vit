const { footer } = require('../pageComponents/footer');
const Footer = new footer();


describe('Tests footer Amazon.com', () =>{


    beforeEach( () => {
    cy.visit('https://www.amazon.com/');
});


it('Shoul be "jobs" in adress line after click  on careers link footer', () => {
    Footer.clickOnLink(Footer.careersFooterLink());
    cy.location('href').should('include', 'jobs');
});


it('Shoul be "business" in adress line after click  on careers link footer', () => {
    Footer.clickOnLink(Footer.sellFooterBusinessLink());
    cy.location('href').should('include', 'business');
});


it('Shoul be "reload" in adress line after click  on careers link footer', () => {
    Footer.clickOnLink(Footer.reloadFooterBalanceLink());
    cy.location('href').should('include', 'reload');
});


it('Shoul be "order" in adress line after click  on order link footer', () => {
    Footer.clickOnLink(Footer.ordersFooterLink());
    cy.location('href').should('include', 'order');
});



});
