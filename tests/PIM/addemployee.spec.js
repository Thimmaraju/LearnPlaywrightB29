import { test, expect } from '@playwright/test';

import data from "../../testData/addemployee.json"

const creds = ["Admin", "Admin123"]
test('Verify Add Employee', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(creds[0]);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(creds[1]);
  await page.getByRole('button', { name: 'Login' }).click();
  //await expect(page.locator('#app')).toContainText('Time at Work');
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(data.firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(data.lastname);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});


// page.locator(xpath/ CSS)
// page.getByRole('button', { name: 'Save' })
// page.getBytext()
// page.getBylabel()
// page.getByPlaceHolder()

// await page.locator("input[name='username']").fill("Admin")
// await page.getByPlaceholder("Username").fill("Admin")