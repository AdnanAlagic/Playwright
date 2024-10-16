import { test, expect } from '@playwright/test';
import { LandingPage } from '../mnet/PageObjects/LandingPage';

//json - string - js object (best way because of standards utf-8 etc.)
const dataSet = JSON.parse(JSON.stringify(require("../Utils/loginData.json")));
const secondDataSet = JSON.parse(JSON.stringify(require("../Utils/loginDataParametrised.json")));


//if we want to run one test for multiple datasets

/*
for (const data of secondDataSet) {
  test(`test ${data.city}`, async ({ page }) => {

    const landingPage = new LandingPage(page);
  
    landingPage.goTo();
  
    await page.getByRole('button', { name: 'Akzeptieren' }).click();
  
  
    await page.getByPlaceholder('Hier eingeben...').click();
    await page.getByPlaceholder('Hier eingeben...').pressSequentially(data.city);
  
    await page.waitForSelector('.gas-dropdown-item');
  
  
    await page.locator('.gas-dropdown-item', { hasText: '80336 München' }).click();
  
  
    await page.getByRole('link', { name: data.street }).click();
    await page.getByRole('link', { name: data.number }).click();
  });
}
*/

//If we want to run speicific test, use anotation @Web
// npx playwright test --grep "@Web"

test('@Web test', async ({ page }) => {

  const landingPage = new LandingPage(page);

  landingPage.goTo();

  await page.getByRole('button', { name: 'Akzeptieren' }).click();


  await page.getByPlaceholder('Hier eingeben...').click();
  await page.getByPlaceholder('Hier eingeben...').pressSequentially(dataSet.city);

  await page.waitForSelector('.gas-dropdown-item');


  await page.locator('.gas-dropdown-item', { hasText: '80336 München' }).click();


  await page.getByRole('link', { name: dataSet.street }).click();
  await page.getByRole('link', { name: dataSet.number }).click();
});
