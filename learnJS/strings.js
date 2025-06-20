str = `raju's place "bangalore"`

//length 

str = "javascript"

console.log(str.length) // char count 

console.log(str[0]) // j

console.log(str.charAt(2))  //j

str1 = "Raju"
str3 = " "
str2 = "blr"

str3 = str1.concat(str3).concat(str2)  // Raju blr
  
str3 = str1 + " " + str2  // Raju blr

console.log(str3)

//<button  id ="xyz" >     Login   <

str4 = "     Login   "

console.log(str4.trim().length)

// trimStart()
//trimEnd()

str5 = "dfnlkvjbervkierbhfoiwjenhefTTTTR RTRTRYTRYUTRYTYFU"

str6 = str5.toUpperCase()

console.log(str6)

str7 = str5.toLowerCase()

console.log(str7)

st8 = "javascript"

str9 = st8.substr(0,4)

console.log(str9)

str = "Raju\n"+ "Shiva"


console.log(str)

console.log(st8.includes("raju") )  // true


str10 = "Bangalore"

str12 = "ekfnuih"

st11 = `Capital city ${str12} for KA is - ${str10}`

console.log(st11)

// fill(data.username)

arr = ["admin", "admin123"]

arr[0] = "Raju"

console.log(arr)


//strings are Immutable 

str = "sython"

str[0]= "p" // no error 

console.log(str)

// replace()
// replaceAll()

str = Number("10")  //10

price1 = Number("₹69,999".replace("₹", "").replace(",", "") )// 69999
price2 = Number("₹79,999".replace("₹", "").replace(",", ""))

total = price1 + price2

console.log(total)