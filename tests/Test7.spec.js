const { test, expect } = require('@playwright/test');
const exp = require('constants');
 
test('add margin left to an element', async ({ page }) => {
    await page.goto('https://www.m-net.de/privatkunden');
    await page.getByRole('button', { name: 'Akzeptieren' }).click();

    await page.evaluate(() => {
        const element = document.querySelector('#navbarDropdownMenuLogin'); 
        if (element) {
          element.style.marginLeft = '10px';  
        }
      });

    expect (await page.screenshot()).toMatchSnapshot('landing.png');
   
  });
