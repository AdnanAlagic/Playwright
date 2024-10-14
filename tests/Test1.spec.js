const {test, expect} = require('@playwright/test');


// browser - global fixtures - (variables available accross all project)
test.only('First test', async({browser, page}) => {

    // Open fresh instance of browser (same as incognito, without cookies, etc)
    // We are able to add cookies inside of newContext()


    // If we are not required to insert cookie or something predefined, then we can only use page fixture and it will do the job
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');



});