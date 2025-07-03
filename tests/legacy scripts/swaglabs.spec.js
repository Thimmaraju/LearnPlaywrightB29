import { test, expect } from '@playwright/test';

test('Verify login with vaid creds', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  console.log("URL Launched")
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');

  console.log("username entered")
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');

    console.log("password entered")
  await page.getByRole('button', { name: 'LOGIN' }).click();
    console.log("clicked on login button")
  await expect(page.getByText('Products')).toBeVisible();

  console.log("Verified products are visible")
});


test('Verify login with invalid creds',{tag: "@raju"}, async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('fbjerhgferjhgberhj');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
