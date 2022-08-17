import FourthBox from '../pageObjects/fourthBox';

require('cypress-xpath');



describe('Test the fourth component of example-4 pagee', () => {


  before(() => {
    cy.visit('http://localhost:3000/example-4');
  });

  beforeEach(() => {
    cy.reload();
  });


  it('Should be appropriate text ".trigger("mouseover")"', () => {
    const titleOfFourthBox = FourthBox.getBoxTitle(4);
    titleOfFourthBox.should('have.text', ".trigger('mouseover')");
  });


  it('Should be appropriate text "Nothing selected"', () => {
    cy.get(FourthBox.subtitle).should('have.text', 'Nothing selected');
  });


  it('Should be appropriate text "Option One"', () => {
    cy.get(FourthBox.getOption(1)).trigger('mouseover');
    cy.get(FourthBox.getOption(1)).should('have.css', 'background-color', 'rgb(221, 221, 221)');
    cy.get(FourthBox.subtitle).should('have.text', 'Option One');
  });


  it('Should be appropriate text "Option Two"', () => {
    cy.get(FourthBox.getOption(2)).trigger('mouseover');
    cy.get(FourthBox.getOption(2)).should('have.css', 'background-color', 'rgb(221, 221, 221)');
    cy.get(FourthBox.subtitle).should('have.text', 'Option Two');
  });


  it('Should be appropriate text "Option Three"', () => {
    cy.get(FourthBox.getOption(3)).trigger('mouseover');
    cy.get(FourthBox.getOption(3)).should('have.css', 'background-color', 'rgb(221, 221, 221)');
    cy.get(FourthBox.subtitle).should('have.text', 'Option Three');
  });


}); 

