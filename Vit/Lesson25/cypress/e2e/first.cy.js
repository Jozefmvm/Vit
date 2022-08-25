require('cypress-xpath');



describe('Test the first component of example-4 page', () => {

  const subTitleOfFirstBox = '(//*[@class="sc-htoDjs jiqlbg"]/p)[1]';
  const selectedItemText = '.sc-htoDjs:nth-child(1) p:nth-child(3) span';
  const optionOne = '[data-cy="box-1-items-list"] > :nth-child(1)';
  const optionTwo = '[data-cy="box-1-items-list"] > :nth-child(2)';
  const optionThree = '[data-cy="box-1-items-list"] > :nth-child(3)';


  before( () => {
    cy.visit('http://localhost:3000/example-4');
  });


  beforeEach( () => {
    cy.reload();
  });



  it('Shoul be appropriate text "Click to highlight, double click to select"', () => {
    cy.xpath(subTitleOfFirstBox).should('have.text', 'Click to highlight, double click to select');
  });


  it('Shoul be appropriate text "Nothing selected"', () => {
    cy.get(selectedItemText).should('have.text', 'Nothing selected');
  });


  it('Should be appropriate background-color before "rgba(0, 0, 0, 0)" and after click "rgb(221, 221, 221)"', () => {
    cy.get(optionOne).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get(optionOne).click();
    cy.get(optionOne).should('have.css', 'background-color', 'rgb(221, 221, 221)');
  });


  it('Should be appropriate text "Option One"', () => {
    cy.get(optionOne).dblclick();
    cy.get(selectedItemText).should('have.text', 'Option One');
  });


  it('Should be appropriate background-color before "rgba(0, 0, 0, 0)" and after click "rgb(221, 221, 221)"', () => {
    cy.get(optionTwo).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get(optionTwo).click();
    cy.get(optionTwo).should('have.css', 'background-color', 'rgb(221, 221, 221)');
  });


  it('Should be appropriate text "Option Two"', () => {
    cy.get(optionTwo).dblclick();
    cy.get(selectedItemText).should('have.text', 'Option Two');
  });


  it('Should be appropriate background-color before "rgba(0, 0, 0, 0)" and after click "rgb(221, 221, 221)"', () => {
    cy.get(optionThree).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get(optionThree).click();
    cy.get(optionThree).should('have.css', 'background-color', 'rgb(221, 221, 221)');
  });


  it('Should be appropriate text "Option Three"', () => {
    cy.get(optionThree).dblclick();
    cy.get(selectedItemText).should('have.text', 'Option Three');
  });


});
