const {test, expect} = require('@playwright/test');


// browser - global fixtures - (variables available accross all project)
test('Basics - test', async({browser, page}) => {

    // Open fresh instance of browser (same as incognito, without cookies, etc)
    // We are able to add cookies inside of newContext()


    // If we are not required to insert cookie or something predefined, then we can only use page fixture and it will do the job
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator("[type='password']").fill('learning');
    await page.locator('#signInBtn').click();

    // await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    console.log(await page.locator('.card-body a').nth(0).textContent());
    await expect(page.locator('.card-body a').nth(0)).toContainText('iphone X');



});