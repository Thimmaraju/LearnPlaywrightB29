// // class className{


// //    // Varibales 

// //    // Methods 

// // }

// //const obj1 = new className()

// //const obj2 = new className()

// class calculator{

//     x = 20 

//     y = 30

//     add(num1, num2){

//         console.log(num1+num2) 
//     }

//     substarct(num1, num2){

//         console.log(num1-num2) 
//     }

//     devide(num1, num2){

//         console.log(num1/num2) 
//     }

//     login(username, password){


//     }
// }

// //You need to create object of this class or Instance of the class

// const cal1 = new calculator()

// cal1.add(2,7)

// cal1.devide(15,5)

// console.log(cal1.x)  // 20

// cal1.login()

// const cal2 = new calculator()


// cal2.add(3,8)


// class employee {

//     username= "Raju"

//     password= "G"

//     raju(){

//         console.log("Raju")
//         console.log(this.password)
//     }

//     printMessage() {

//         this.raju()
//         console.log("This is a simple Method")
//     }

//     constructor(username, password) {

//         console.log(username, password)
//     }

//     createEmployee() {

//       this.printMessage()

//      console.log("Create Employee logic here");


//     }


// }

// const emp1 = new employee("tejaswini", "xyz")

// //emp1.createEmployee()

// emp1.raju()


// const emp2 = new employee("Gagan", "M")

// const emp3 = new employee("Shiva", "Abc")

// consstructor is a method 
// but we dont call that method, after you create object of the class
// Automatically constructor will be called 
// Empty constructor will be there by default 


class student {


    static x = "Abc"  // Static variable
     y = "xyz" // non static variable

    static m1() {  // static method

        console.log("this Method is M1")
    }

     m2() { //non static method

        console.log("this Method is M2")
    }


    static m3() {

        console.log("this Method is M3")
    }

     m4() {

        console.log("this Method is M4")
    }

}

// student.m1()

// student.m2()

const  stu1 = new student()

stu1.m2()

student.m1()