const { browser, test, expect } = require('@playwright/test');


test.describe("Group 1 ", () => {


    test.only("test1 ", () => {

        console.log("test1")
    })

    test("test2 ", () => {

        console.log("test2")
    })
})




test.describe("Group 2 ", () => {


    test.skip("test3 ", () => {

        console.log("test3")
    })

    test("test4 ", () => {
        console.log("test4")
    })

     test.skip("test5 ", () => {

        console.log("test4")
    })

     test("test6 ", () => {

        console.log("test4")
    })


     test("test7 ", () => {

        console.log("test4")
    })

     test("test8 ", () => {

        console.log("test4")
    })
})

// Annotattion

//.onlty 