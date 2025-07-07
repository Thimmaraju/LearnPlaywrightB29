import { expect } from "playwright/test"

exports.addEmployeePage = class addEmployeePage {


    constructor(page) {

        this.page = page
        this.PIMMenu = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')
        this.addemployeesubmenu = page.locator("//a[text()='Add Employee']")
        this.firstnameInput = page.locator('//input[@name="firstName"]')
        this.lastnameInput = page.locator('input[name="lastName"]')
        this.saveButton = page.locator('button[type="submit"]')
        this.personaldetails = page.locator("//h6[text()='Personal Details']")
        this.firstnameError = page.locator("(//span[text()='Required'])[1]")
        this.lastanemError = page.locator("(//span[text()='Required'])[2]")
        this.successmEssage = page.locator("//*[text()='Successfully Saved']")

    }

    async navigatePIM() {

        await this.PIMMenu.click()

    }

    async navigateAddEmployee() {

        await this.addemployeesubmenu.click()

    }

    async createEmployee(firstname, lastname) {

        await this.firstnameInput.fill(firstname)
        await this.lastnameInput.fill(lastname)

        //upload file 
        await this.saveButton.click()
    }

    async verifySuccess() {

        await expect(this.successmEssage).toBeVisible()
    }

    async verifyErrorMsgMandatoryFileds(){
          await this.saveButton.click()
          await expect(this.firstnameError).toBeVisible()
          await expect(this.lastanemError).toBeVisible()

    }

}

