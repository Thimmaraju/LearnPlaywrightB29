const { test, expect } = require('@playwright/test');
import { loginPage } from "../pageObjects/loginpage.po"

import logindata from "../testData/login.json"

let page
let login



test.describe("Verify login funtionality", async () => {

    test.beforeEach(async ({ browser }) => {

        page = await browser.newPage()

        login = new loginPage(page)

        await login.launchUrl()
    })

    test("Verify Login with Valid Credential", async () => {

        await login.loginwithcreds(logindata.username, logindata.password)

        await login.loginSucces()

    })

    test("Verify Login with Valid username and Invalid password ", async () => {

        await login.loginwithcreds(logindata.username, logindata.wrongpassword)

        await login.loginError()

    })


    test("Verify Login with Inalid username and valid password ", async () => {

        await login.loginwithcreds(logindata.wrongusername, logindata.password)

        await login.loginError()

    })

    test("Verify Login with Inalid username and invalid password ", async () => {

        await login.loginwithcreds(logindata.wrongusername, logindata.wrongpassword)

        await login.loginError()

    })


})