module.exports = class Box {

    getBoxTitle(box) {

        return cy.xpath(`(//*[@class="sc-dnqmqq fxWYjR"])[${box}]`);
        
    }
  
  };
