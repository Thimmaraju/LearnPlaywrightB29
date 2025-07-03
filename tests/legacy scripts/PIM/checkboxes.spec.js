import { test, expect } from '@playwright/test';


const creds = ["Admin", "admin123"]
test('Verify Add Employee', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(creds[0]);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(creds[1]);
  await page.getByRole('button', { name: 'Login' }).click();
  //await expect(page.locator('#app')).toContainText('Time at Work');
  await page.getByRole('link', { name: 'PIM' }).click();

  

const arr = ['input[value="1"]', 'input[value="2"]', 'input[value="4"]']

//await page.locator(css).check()

for(let i=0; i<arr.length; i++){

     await page.locator(arr[i]).check({force:true})
}
 
});
