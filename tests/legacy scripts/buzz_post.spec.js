const { test, expect } = require('@playwright/test');

test('OrangeHRM Buzz post as Admin', async ({ page }) => {
  // 1. Open OrangeHRM login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // 2. Login as Admin
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await page.waitForURL('**/dashboard');

  // 3. Go to Buzz module
  await page.click('a[href="/web/index.php/buzz/viewBuzz"]');
  await page.waitForURL('**/buzz/viewBuzz');

  // 4. Enter greetings text in "What\'s on your mind?"
  const greeting = 'Hello from Playwright!';
  await page.click('textarea[placeholder="What\'s on your mind?"]');
  await page.fill('textarea[placeholder="What\'s on your mind?"]', greeting);
  await page.click('button:has-text("Post")');

  // 5. Verify it is posted
  // Wait for the post to appear
  const postLocator = page.locator('.oxd-buzz-post .oxd-buzz-post-body-text');
  await expect(postLocator.first()).toHaveText(greeting, { timeout: 10000 });
});
