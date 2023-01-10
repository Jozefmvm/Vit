const { home } = require('../pageObjects/homePage');
const Home = new home();


describe('Tests home page Amazon.com', () =>{


beforeEach( () => {
    cy.visit('https://www.amazon.com/');
});


it('Shoul be visible major img on the page and have css "text-decoration"', () => {
    Home.majorImg().should('be.visible')
    .should('have.css', 'text-decoration');
});


it('Shoul be "customer" in link after clikc on "Easy returns"', () => {
    Home.clickOnHomeLink(Home.easyReternsLink());
    cy.location('href').should('include', 'customer');
});


it('Shoul be "Electronics" in banner after click on "Electronics"', () => {
    Home.clickOnHomeLink(Home.electronicsLink());
    Home.PageBanner().should('contain.text', 'Electronics');
});


it('Shoul be "Beauty and Personal Care" in banner after click on "Beauty picks"', () => {
    Home.clickOnHomeLink(Home.beautyPicksLink());
    Home.PageBanner().should('contain.text', 'Beauty and Personal Care');
});


it('Shoul be "fitness" in link after clikc on "For your Fitness Needs"', () => {
    Home.clickOnHomeLink(Home.fitnessLink());
    cy.location('href').should('contain','fitness');
});


it('Shoul be visible new banner after clikc on left arrow', () => {
    Home.clickOnHomeLink(Home.goToLeftSideLink());
    Home.discoverOurBeautyLink().should('be.visible');
});



});