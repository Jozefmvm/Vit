const { search } = require('../pageComponents/searhComponent');
const Search = new search();


describe('Tests searchComponent of Amazon.com', () =>{

    before( () => {
    cy.visit('https://www.amazon.com/');
});


it('Shoul be visible searchField on the page', () => {
    Search.searchField().should('be.visible');
});


it('Shoul be word "socks" in link after searching "socks"', () => {
    Search.searhSocks();
    cy.location('href').should('include', 'socks');
});


it('Shoul be word "socks" in results line after searching "socks"', () => {
    Search.searchSocksAfterSearching();
    Search.resultOfSearching().should('have.text', '"socks"');
});


it('Should be "Health & Household" in filter of searching after changing', () => {
    Search.setFilter();
    Search.searhSelectList().should('have.focus')
    Search.searhSelectListCheck().should('have.text','Health & Household');

})


it('Should be "All Departments" in filter after changing', () => {
    Search.setFilterAll();
    Search.searhSelectListCheck().should('have.text', 'All Departments');
})


it('Should be "car" in link after searching', () => {
    Search.searhCar();
    cy.location('href').should('include', 'car');
    Search.resultOfSearching().should('have.text','"car"');
})



});
