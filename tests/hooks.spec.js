
const { test, expect } = require('@playwright/test');




test.describe(" Group 1", () => {


    test.beforeAll(() => {
        console.log("Before 1st test");
    });

    test.afterAll(() => {
        console.log("After all tests");
    });

    test.beforeEach(() => {
        console.log("beforeEach hook");
    });

    test.afterEach(() => {
        console.log("After Each test");
    });


    test("test1 ", () => {

        console.log("test1")
    })

    test("test2 ", () => {

        console.log("test2")
    })


    test("test3 ", () => {

        console.log("test3")
    })


})


test.describe(" Group 2", () => {


    test("test4 ", {tag : "@smoke"}, () => {

        console.log("test4")
    })

    test("test5 ", () => {

        console.log("test5")
    })

})


