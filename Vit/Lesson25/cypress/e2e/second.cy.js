require('cypress-xpath');


import SecondBox from '../pageObjects/secondBox';



describe('Test the second component of example-4 page', () => {


  before( () => {
    cy.visit('http://localhost:3000/example-4');
  });


  beforeEach( () => {
    cy.reload();
  });


  it('Check title of the second box', () => {
    const titleSecondBox = SecondBox.getBoxTitle(2);
    titleSecondBox.should('have.text', '.check() and .uncheck()');
  });


  it('Check that nothin selected in first box after reload', () => {
    SecondBox.numberOfChoosenBoxes.should('have.text', '0');
  });


  it('Check checkbox after selection the first option', () => {
    SecondBox.checkOption(2);
    SecondBox.getCheckBox(2).should('be.checked');
    SecondBox.getCheckBox(1).should('not.be.checked');
    SecondBox.getCheckBox(3).should('not.be.checked');
    SecondBox.numberOfChoosenBoxes.should('have.text', '1');
  });


  it('Check options after check and unchek option', () => {
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


  it('Check checkbox after selection all options', () => {
    SecondBox.checkOption(1);
    SecondBox.checkOption(2);
    SecondBox.checkOption(3);
    SecondBox.getCheckBox(1).should('be.checked');
    SecondBox.getCheckBox(2).should('be.checked');
    SecondBox.getCheckBox(3).should('be.checked');
    SecondBox.numberOfChoosenBoxes.should('have.text', '3');
  });



}); 
