import FourthBox from '../pageObjects/fourthBox';

require('cypress-xpath');



describe('Test the fourth component of example-4 pagee', () => {


  before(() => {
    cy.visit('http://localhost:3000/example-4');
  });

  beforeEach(() => {
    cy.reload();
  });


  it('Check title fourth box', () => {
    const titleOfFourthBox = FourthBox.getBoxTitle(4);
    titleOfFourthBox.should('have.text', ".trigger('mouseover')");
  });


  it('Check that nothing is selected', () => {
    cy.get(FourthBox.subtitle).should('have.text', 'Nothing selected');
  });


  it('Checking of hilighting option one', () => {
    cy.get(FourthBox.getOption(1)).trigger('mouseover');
    cy.get(FourthBox.getOption(1)).should('have.css', 'background-color', 'rgb(221, 221, 221)');
    cy.get(FourthBox.subtitle).should('have.text', 'Option One');
  });


  it('Checking of hilighting option two', () => {
    cy.get(FourthBox.getOption(2)).trigger('mouseover');
    cy.get(FourthBox.getOption(2)).should('have.css', 'background-color', 'rgb(221, 221, 221)');
    cy.get(FourthBox.subtitle).should('have.text', 'Option Two');
  });


  it('Checking of hilighting option three', () => {
    cy.get(FourthBox.getOption(3)).trigger('mouseover');
    cy.get(FourthBox.getOption(3)).should('have.css', 'background-color', 'rgb(221, 221, 221)');
    cy.get(FourthBox.subtitle).should('have.text', 'Option Three');
  });


}); 

