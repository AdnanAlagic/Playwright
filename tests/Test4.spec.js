const { test, expect } = require('@playwright/test');

// Handling child window, when link is opened in another tab

test('Handling child window', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    //Listen if any page is opened, and then cathing that page in variable
    //It should be before clicking on new page


    //If number of steps needs to be parallely executed, then we use Promise.all
    //In our case, problem is that we have to define waitForEvent before clicking on page link.
    //We are not able to set await on that link because that is listener, so we can not wait to execution to be done since in another step we are clicking on link

    //After fulfilling the promise, on returns new page and stores into var newPage, since second parameter is only click, it nothing returns
    
    const [newPage] = await Promise.all(
    [
        context.waitForEvent('page'),
        page.locator("[href*='documents-request']").click()
    ])

    const text = await newPage.locator('.red').textContent();
    const splited = text.split('@'); // now we have array with two elements, before and after @
    const email = splited[1].split(' ')[0];
    
    // Now we are able to do something on parent page, with values that we grabbed

    const cleanEmail = email.split('.')[0];
    await page.locator('#username').fill(cleanEmail);

    await page.pause();
});