// //1. Encapsulation 

// class Employee {


//     empdetails(name, place, org) {

//         this.EmployeeName = name
//         this.EMployeePlace = place
//         this.EmployeeOrg = org

//     }

//     printEmployeeDetails() {

//         console.log(this.EmployeeName)
//         console.log(this.EMployeePlace)
//         console.log(this.EmployeeOrg)

//     }


// }

// const emp1 = new Employee()

// emp1.empdetails("Raju", "Blr", "DBS QA")

// emp1.printEmployeeDetails()


//Topic clean code principles

//camelcasing
//DRY
//SOLID
//KISS


//2. Inheritance 

// Base class / Parent class 

// derived class / child class

//1. Single inheritance 

// class A {

//     m1() {

//         console.log("this is M1 method")
//     }

//     m2() {

//         console.log("this is M2 method")
//     }

//     m3() {

//         console.log("this is M3 method")
//     }

//     m4() {

//         console.log("this is M4 method")
//     }

// }


// class B extends A{

//     m5() {

//         console.log("this is M5 method")
//     }

//     m6() {

//         console.log("this is M6 method")
//     }

//     m7() {

//         console.log("this is M7 method")
//     }

//     m8() {

//         console.log("this is M8 method")
//     }

// }

// class C extends A {


//     m9() {

//         console.log("this is M9 method")
//     }

//     m10() {

//         console.log("this is M10 method")
//     }


// }

// const gagan = new C()

// gagan.m1() // A
// gagan.m7() // B
// gagan.m10() //C

// 3. PolyMorphism 

// Method Overring 

// method Overloading 


// class A {

//     printHiMessage() {

//         console.log("Hey HI")
//     }

//     add(num1, num2) {

//         console.log(num1)
//         console.log(num2)
//         console.log(num1 + num2)

//     }

// }

// class B extends A{

//     printHiMessage() {

//         console.log("Hey Namaste")
//     }

//     add(num1, num2, num3) {

//         console.log(num1)
//         console.log(num2)
//          console.log(num3)
//         console.log(num1 + num2 + num3)

//     }

// }

// const obj = new B()

// obj.printHiMessage() // Method Overriding 

// obj.add(4,12,8) // method Overloading 

// 4. Prototyping 


class ABC {

    stname = "Shiva"
    stlastname = "xyz"


    m1(){
     
        console.log("This is simple m1 method")
    }

    
    m2(){
     
        console.log("This is simple m2 method")
    }
}

ABC.prototype.stplace = "Bangalore"

ABC.prototype.m3 = function(){
 console.log("This is simple m3 method")

}


const obj1 = new ABC()

console.log(obj1.stplace)

obj1.m3()

const obj2 = new ABC()

console.log(obj2.stplace)

obj2.m3()


// if(4>3){

  
// }

// const x = 20 

// x = 25

// console.log(x)