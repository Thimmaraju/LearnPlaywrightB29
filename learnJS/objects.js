

car ={

    model : "2025",
    make : "Nissan",
    number: "3456945678",
    color: "RED",
    doors : "5"
}

console.log(car.number)

console.log(car['color']) // car.color

car['color'] = "Grey" // Updating the property values 

console.log(car['color'])

console.log(car.ownername) // Undefined

car['ownername'] = "Ashwini" // Adding new property to 

console.log(car.ownername) 

//car.number.substr(4,8)

delete car['make']

console.log(car.make) 


user = {

    firstname : "Raju",
    lastname: "G",
    place: "blr"

}

delete user['place']


menuitems = {

    menu1 : "Admin",
    menu2 : "PIM",
    menu3 :"Leave"
}

//for in 

for(let item in menuitems){

    console.log("loop starts ")
    console.log(item)
    console.log("loop Ends ")
}

//data driven testing 
// CEO1 
// CFO1
// COO1

// {


// }

// str1 = "Raju"

// str2 = "Purushottam"

// str3 = `${str1} and ${str2} are friends`

// console.log(str3)