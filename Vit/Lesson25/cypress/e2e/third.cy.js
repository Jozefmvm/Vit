require('cypress-xpath');


import ThirdBox from '../pageObjects/thirdBox';


describe('Test the third component of example-4 pagee', () => {


  before( () => {
    cy.visit('http://localhost:3000/example-4');
  });


  beforeEach( () => {
    cy.reload();
  });



  it('Check title of third box', () => {
    const title = ThirdBox.getBoxTitle(3);
    title.should('have.text', '.select()');
  });


  it('Check that nothing selected', () => {
    ThirdBox.subtitle.should('have.text', 'Nothing selected');
  });


  it('Check after select Option Two', () => {
    cy.selectOption('Option Two');
    ThirdBox.subtitle.should('have.text', 'Option Two')
  });

  
  it('Check after select Option Three', () => {
    cy.selectOption('Option Three');
    ThirdBox.subtitle.should('have.text', 'Option Three')
  });


  it('Check after change selection from Option Three to Option One', () => {
    cy.selectOption('Option Three');
    cy.selectOption('Option One');
    ThirdBox.subtitle.should('have.text', 'Option One')
  });



});

