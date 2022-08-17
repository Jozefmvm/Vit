require('cypress-xpath');


import SecondBox from '../pageObjects/secondBox';



describe('Test the second component of example-4 page', () => {


  before( () => {
    cy.visit('http://localhost:3000/example-4');
  });


  beforeEach( () => {
    cy.reload();
  });


  it('Should be appropriate text ".check() and .uncheck()"', () => {
    const titleSecondBox = SecondBox.getBoxTitle(2);
    titleSecondBox.should('have.text', '.check() and .uncheck()');
  });


  it('Should be appropriate text "0"', () => {
    SecondBox.numberOfChoosenBoxes.should('have.text', '0');
  });


  it('Should be appropriate text "1"', () => {
    SecondBox.checkOption(2);
    SecondBox.getCheckBox(2).should('be.checked');
    SecondBox.getCheckBox(1).should('not.be.checked');
    SecondBox.getCheckBox(3).should('not.be.checked');
    SecondBox.numberOfChoosenBoxes.should('have.text', '1');
  });


  it('Should be appropriate text "0" after check and unchec', () => {
    SecondBox.checkOption(1);
    SecondBox.checkOption(3)
    SecondBox.getCheckBox(1).should('be.checked');
    SecondBox.getCheckBox(3).should('be.checked');
    SecondBox.uncheckOption(1);
    SecondBox.uncheckOption(3);
    SecondBox.getCheckBox(1).should('not.be.checked');
    SecondBox.getCheckBox(2).should('not.be.checked');
    SecondBox.getCheckBox(3).should('not.be.checked');
    SecondBox.numberOfChoosenBoxes.should('have.text', '0');
  });


  it('Should be appropriate text "3" after check all options and should be checked', () => {
    SecondBox.checkOption(1);
    SecondBox.checkOption(2);
    SecondBox.checkOption(3);
    SecondBox.getCheckBox(1).should('be.checked');
    SecondBox.getCheckBox(2).should('be.checked');
    SecondBox.getCheckBox(3).should('be.checked');
    SecondBox.numberOfChoosenBoxes.should('have.text', '3');
  });



}); 
