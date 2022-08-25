import Box from './box';

class ThirdBox extends Box {

  get subtitle(){
    return cy.get('[data-cy="box-3-selected-name"]');

}


}

module.exports = new ThirdBox(); 
