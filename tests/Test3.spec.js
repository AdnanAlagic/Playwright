const { test, expect } = require('@playwright/test');

// Form fields manipulations:
// radio buttons, dropdowns..

test('Validations of input fields - test', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator("[type='password']").fill('learning');

    // Radio buttons
    await page.locator("[value='user']").check();

    // Static dropdowns
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption('consult');

    // Assertion radio button
    await expect(page.locator("[value='user']")).toBeChecked();


    //Assertion - if element has class with specific text
    const link = page.locator("[href*='documents-request']");
    await expect(link).toHaveAttribute('class','blinkingText');

    

    await page.pause();
});