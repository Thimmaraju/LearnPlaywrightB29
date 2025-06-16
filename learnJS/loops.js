

// console.log("Raju")
// console.log("Raju")
// console.log("Raju")
// console.log("Raju")
// console.log("Raju")
// console.log("Raju")
// console.log("Raju")
// console.log("Raju")

// for(initilization ; condition ; increment /decreemnt) {

//     //block of code 
// }

for(let i=1 ; i<1 ; i++){

    console.log(i)

     console.log("Raju")

}


arr = ['input[value="0"]', 'input[value="2"]', 'input[value="4"]']

//await page.locator(css).check()

for(let i=0; i<arr.length; i++){

     await page.locator(arr[i]).check()
}