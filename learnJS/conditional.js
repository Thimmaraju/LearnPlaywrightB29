

// condition - true 

const { PassThrough } = require("stream");

// if(condition){

//     //block of code 
// }

if (false) {

    console.log("Raju");
    console.log("Gagan");


}

else {

    console.log("Jamuna")

}

// condition1 - Pass 
// task1 
// condition2  - Pass
// task2 
// condition3 - Pass
// Task3 

// else if()


if (4 > 6) {

    console.log("RAJu")
}
else if ("4" === 4) {

    console.log("Purushottam")
}
else if (false) {

    console.log("tejaswini")
}
else {

    console.log("All conditions failed")
}

//switch

switch ("gagan") {


    case "gagan": {

        console.log("Gagan here")

    }
        break;


    case "Tejaswini": {

        console.log("Tejaswini here")

    }

        break;
    case "jamuna": {

        console.log("Jamuna here")

    }

        break;
    case "aswini": {

        console.log("Ashwini here")
    }

        break;

    default: {

        console.log("No case matched")
    }
        break;
}


switch ("chromium") {


    case "chromium": {

        console.log("Chromium Browser")

    }

        break;

    case "chromium": {

        console.log("Firefox browser")

    }

        break;
    case "webkit": {

        console.log("Webkit Browser here")

    }

        break;

    default: {

        console.log("No Browser matched")
    }
        break;
}