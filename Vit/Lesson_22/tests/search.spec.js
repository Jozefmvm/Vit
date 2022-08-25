const { test, expect } = require('@playwright/test');

const { SearchComponents } = require('../pageobgect/pagecomponent/searchComponents')

const searchcomponents = new SearchComponents();


test.describe('Check search components', () => {

    test.beforeEach(async ({ page }) => {

      await page.goto('https://playwright.dev/');
    });


    test ('Check search field by CSS', async({ page }) => {
        const searchField =  page.locator(searchcomponents.searchButtonFull);
        await expect(searchField).toHaveCSS('display', 'flex');
    })


    test ('Check text in search field', async({ page }) => {
      const searchField =  page.locator(searchcomponents.searchButton);
      await expect(searchField).toHaveText('Search')
  })

})
