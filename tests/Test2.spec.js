const {test, expect} = require('@playwright/test');


// API call, rendering of api call results
// Service based acrh.

// npx playwright test tests/Test2.spec.js

test('Service based acrh - working with items that loads from api - test', async({page}) => {

    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator("#userPassword").fill('Iamking@000');
    await page.locator('#login').click();



    // allTextContents() does not support automatic wait

    // Wait until all netowork call are made
    //await page.waitForLoadState('networkidle');

    // Another way, only for single element, can not be used for multiple elements
    await page.locator(".card-body b").first().waitFor();

    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);


});