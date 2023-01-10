class search {


    constructor(){
        this.searchField = () => cy.get(".nav-search-field");
        this.searhSelectList = () => cy.get(".nav-search-dropdown.searchSelect.nav-progressive-attrubute.nav-progressive-search-dropdown");
        this.resultOfSearching = () => cy.get(".a-section > .a-color-state");
        this.searhSelectListCheck = () => cy.get(".nav-search-label.nav-progressive-content");
    }


    searhSocks(){
        this.searchField().click().type("socks").type('{enter}');
    }


    searchSocksAfterSearching(){
        this.searchField().clear().type("socks").type('{enter}');
    }


    setFilter(){
        this.searchField().clear().type('{enter}');
        this.searhSelectList().select('Health & Household',{force: true});
        
    }


    setFilterAll(){
        this.searhSelectList().select('All Departments',{force: true});
        
    }


    searhCar(){
        this.searchField().click().type("car").type('{enter}');
    }


}


module.exports = { search };
