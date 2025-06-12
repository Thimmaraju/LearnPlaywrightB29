import { test, expect } from '@playwright/test';

import logindata from "../testData/login.json"

test("Verify Login with Valid Credential", async ({page})=>{
   const username = "Admin"
    //Actions 
    await page.goto("/web/index.php/auth/login")

    await page.locator(`input[name='username']`).fill(username)

    await page.locator("input[type='password']").fill(process.env.ORG_PASSWORD)

    await page.locator("button[type='submit']").click()

    // Assertions
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  
    await page.close()
    
   

})


test("Verify Login with Valid Username and Invalid Password", async ({page})=>{

    //Actions 
    await page.goto("/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("Admin")

    await page.locator("input[type='password']").fill("dfjrn")

    await page.locator("button[type='submit']").click()

    // Assertions
    
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})



test("Verify login with Invalid Username and InValid Password", async ({page})=>{

    //Actions 
    await page.goto("/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("bjhbhj")

    await page.locator("input[type='password']").fill("gnjr")

    await page.locator("button[type='submit']").click()

    // Assertions
    
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})

test("Verify login with Invalid Username and Valid Password", async ({page})=>{

    //Actions 
    await page.goto("/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("dsfesf")

    await page.locator("input[type='password']").fill("admin123")

    await page.locator("button[type='submit']").click()

    // Assertions
    
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})
