const { header } = require('../pageComponents/header')
const Header = new header();


describe('Tests header Amazon.com', () =>{

    before( () => {
    cy.visit('https://www.amazon.com/');
});


it('Shoul be visible logolink on the page', () => {
   Header.logoLink().should('be.visible');
});


it ('Should be visible changedeliverlink on the page', () => {
    Header.changeDeliveryLink().should('be.visible');
})


it ('Should be visible cart icon on the page', () => {
    Header.cartIcon().should('be.visible');
})


it ('Should be checked "ES" in link', () => {
    Header.changeLanguagetoES();
    cy.location('href').should('include', 'es_US');
})


it ('Should be checked "AR" in link', () => {
    Header.changeLanguagetoAr();
    cy.location('href').should('include', 'ar_AE');
})


it ('Should be checked "EN" in link', () => {
    Header.changeLanguagetoEn();
    cy.location('href').should('include', 'en_US');
})


});