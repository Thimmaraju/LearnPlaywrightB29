const { test, expect } = require('@playwright/test');
import data from "../../testData/addjobtitle.json"

test.describe('Add Job Title Feature', () => {
    test('TC1223 - should add a new job title successfully', async ({ page }) => {

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.locator(`input[name='username']`).fill(process.env.ORG_USERNAME)
        await page.locator("input[type='password']").fill(process.env.ORG_PASSWORD)
        await page.locator("button[type='submit']").click()

        // Assertions
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()
        await page.locator("//span[normalize-space(text())='Job']").click()
        await page.locator("//a[normalize-space(text())='Job Titles']").click()
        await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        let randomtext = (Math.random() + 1).toString(36).substring(7);  // generate random 5 chars 
        await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(data.jobtitle+randomtext)
        await page.locator("//textarea[@placeholder='Type description here']").fill(data.jobDescription)
        await page.locator('button[type="submit"]').click()

        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')

    });
});