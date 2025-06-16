const { browser, test, expect } = require('@playwright/test');
test("Click one of the elements that is visible out of two",{tag:["@smoke", "@raju"]}, async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/disappearing_elements");

    const contactus = page.getByRole("link", { name: "Contact Us" });
    const portfolio = page.getByRole("link", { name: "Portfolio" });
    const gallery = page.getByRole("link", { name: "Gallery" });

    const element1 = page.locator('a[href="/docs/intro"]')
    const element2 = page.locator('a[href="/community/welcome"]')


    if (await page.locator('a[href="/docs/intro"]').isVisible()) {
        await gallery.click();
        console.log("clicked on Gallery")
    } 
    
    else if (await page.locator('a[href="/community/welcome"]').isVisible()) {
        await portfolio.click();
        console.log("clicked on Portfolio")
    }

    else{

           console.log("Both Elements not visible") 
    }


    //await expect(page).toHaveURL(/.*gallery|.*portfolio/);

   
});