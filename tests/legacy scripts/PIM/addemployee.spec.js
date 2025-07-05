import { test, expect } from '@playwright/test';

import data from "../../../testData/addemployee.json"

const creds = ["Admin", "Admin123"]
test('Verify Add Employee',{tag: ["@smoke", "@raju"]}, async ({ page }) => {
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

// Regualr expression 
// Set 
// Map

//----------------------------------------------------

// Part 1
// Manual 

// Agile 

// API testing 
// SQL 

// Part2 
// Automation

// Javascript 
// Playwright

// programs 

// str = "Javascript"



// str = "madam"

// revstr = str.split("").reverse().join("")

// if(str == revstr){

//   console.log("Palindrom")
// }

// str1 = "mary"  // arry / sort /join  - amry
// str2 = "army"  // arry /sort / join  - amry

// arr = [34,56,76,54,87,9]

// arr = [2,5,6,2,3,4,5,3,6,2]

// //new arry 

// str = "this is a sentence"

// await page.locator(xpth).pressSequenctially("Raju", {delay: 3000})

