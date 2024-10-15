import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    

  await page.goto('https://www.m-net.de/privatkunden');
  
  // Accept cookies or privacy modal
  await page.getByRole('button', { name: 'Akzeptieren' }).click();
  
  // Click on the input field and type in '80336' character by character
  await page.getByPlaceholder('Hier eingeben...').click();
  await page.getByPlaceholder('Hier eingeben...').pressSequentially('80336'); // Type slowly to trigger dropdown
  
  // Wait for the dropdown to appear
  await page.waitForSelector('.gas-dropdown-item');  // Ensure dropdown is loaded
  
  // Click on the dropdown item with '80336 München'
  await page.locator('.gas-dropdown-item', { hasText: '80336 München' }).click();
  
  // Optionally, continue with other actions
  await page.getByRole('link', { name: 'Beethovenplatz' }).click();
  await page.getByRole('link', { name: '4' }).click();
});
