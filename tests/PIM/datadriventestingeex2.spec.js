import { test, expect } from '@playwright/test';



const employees = {

   emp1 : {
           firstname: "Raju",
		   lastname: "G"
          
		  },
	emp2 : {
           firstname: "Shiva",
		   lastname: "T"
          
		  }

}

for (let employee in employees ){

    test(`Add employee test - ${employee} `, async ({ page }) => {
 
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.locator('//input[@name="username"]').fill("Admin");
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill("admin123");
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole("link", { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(employees[employee].firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(employees[employee].lastname);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

});


}
