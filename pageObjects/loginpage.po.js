import { expect } from "playwright/test"


exports.loginPage = class loginPage{


    constructor(page){

        this.page = page
        this.usernameIput = page.locator('//input[@name="username"]')
        this.passwordInput = page.locator('//input[@name="password"]')
        this.loginButton = page.locator('//button[@type="submit"]')
        this.logo = page.getByAltText('company-branding')
        this.loginerror = page.locator("//p[text()='Invalid credentials']")

    }

    async launchUrl(){

        await this.page.goto("/web/index.php/auth/login")
    }

    async loginwithcreds(usernmame, password ){

        await this.usernameIput.fill(usernmame)
        
        await this.passwordInput.fill(password)
        await this.loginButton.click()

    }

    async loginError(){

        await expect(this.loginerror).toBeVisible()
    }

    async loginSucces(){

        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    }
}