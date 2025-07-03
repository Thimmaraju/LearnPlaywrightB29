// playwright/test automation for https://rahulshettyacademy.com/AutomationPractice/
const { test, expect } = require('@playwright/test');

let page

test.describe('Rahul Shetty Academy Practice Page', () => {


  test.beforeEach(async ({ browser }) => {

   page = await browser.newPage()

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  })

 test.afterEach(async () => {

    console.log("test execution complted")
  })



  test('Radio button selection', async () => {

    await page.locator('input[value="radio2"]').check();

  
    await expect(page.locator('input[value="radio2"]')).toBeChecked();
  });

  test('Suggestion box autocomplete', async () => {

    await page.locator('#autocomplete').fill('Ind');
    await page.locator('.ui-menu-item div', { hasText: 'India' }).click();
    await expect(page.locator('#autocomplete')).toHaveValue('India');
  });

  test('Dropdown selection', async () => {

    await page.selectOption('#dropdown-class-example', 'option2');
    await expect(page.locator('#dropdown-class-example')).toHaveValue('option2');
  });

  test('Checkbox selection', async () => {

    await page.check('input#checkBoxOption1');
    await expect(page.locator('input#checkBoxOption1')).toBeChecked();
  });

  test('Alert and confirm popups', async () => {

    await page.fill('#name', 'Playwright');
    page.once('dialog', dialog => {
      expect(dialog.message()).toContain('Playwright');
      dialog.accept();
    });
    await page.click('#alertbtn');
    page.once('dialog', dialog => {
      expect(dialog.message()).toContain('Playwright');
      dialog.dismiss();
    });
    await page.click('#confirmbtn');
  });

  test('Show and hide element', async () => {

    await page.click('#hide-textbox');
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.click('#show-textbox');
    await expect(page.locator('#displayed-text')).toBeVisible();
  });

  test('Web table validation', async () => {

    const rows = await page.locator('#product tr').all();
    expect(rows.length).toBeGreaterThan(1); // header + data rows
    const firstRowText = await rows[1].textContent();
    expect(firstRowText).toContain('Rahul Shetty');
  });
});
