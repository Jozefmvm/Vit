require('cypress-xpath');


import ThirdBox from '../pageObjects/thirdBox';


describe('Test the third component of example-4 pagee', () => {


  before( () => {
    cy.visit('http://localhost:3000/example-4');
  });


  beforeEach( () => {
    cy.reload();
  });



  it('Should be appropriate text ".select()"', () => {
    const title = ThirdBox.getBoxTitle(3);
    title.should('have.text', '.select()');
  });


  it('Should be appropriate text "Nothing selected"', () => {
    ThirdBox.subtitle.should('have.text', 'Nothing selected');
  });


  it('Should be appropriate text "Option Two"', () => {
    cy.selectOption('Option Two');
    ThirdBox.subtitle.should('have.text', 'Option Two')
  });

  
  it('Should be appropriate text "Option Three"', () => {
    cy.selectOption('Option Three');
    ThirdBox.subtitle.should('have.text', 'Option Three')
  });


  it('Should be appropriate text "Option One" after selection Potion Three', () => {
    cy.selectOption('Option Three');
    cy.selectOption('Option One');
    ThirdBox.subtitle.should('have.text', 'Option One')
  });



});

