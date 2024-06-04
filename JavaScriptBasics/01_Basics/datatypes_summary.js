// /*if you need to define variable datatype then it is statically typed(typescript) and we do not need to define datatype of variable then it is Dynamically-typed (javascript)*/


// /*how the data is stored in memory and how we access the data on that basis datatypes are catecorized */

// //primitive datatypes
// //7 types
// /*string, number, boolean, null, undefined, symbol(to make the value unique), bigInt(to convert the big values) */
// const num1 = 100;
// const num2 = 1.2;
// const isOnline = true;
// const loggedEmail = null;
// let num3;
// let name = "abc";

// const id =Symbol('321');
// const anotherId =Symbol('321');

// console.log(id === anotherId); //if we give the same values but id and anotherId will return differnt

// const bigNumber = 6423469328491476537n;


// //non-primitive datatypes(reference)
// /*Array, objects, functions */

const fruits = ["apple","banana","orange"]; //array

let myObj ={
    name : "shreya",
    age :22
}

const myFunction = function(){
    console.log("hello world");
}
myFunction(); 

//to check the datatype of any variable we use "typeof"
console.log(typeof myFunction);
/*Undefined	="undefined"
Null =	"object"
Boolean =	"boolean"
Number =	"number"
String =	"string"
Object = (native and does not implement [[Call]])	"object"
Object = (native or host and does implement [[Call]])	"function"
Object = (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string". */

//https://262.ecma-international.org/5.1/#sec-11.4.3


//*****************************************************************************************

//Stack and Heap memory in JavaScript

/*stack memory is used in "primitive datatypes" and heap memory is used in "non-primitive datatypes" */

//when you use stack memory then you get a copy of your variable
//when you use heap memory then you get reference of original value what you will change it will change in original memory

let myDogName = "Bruno";

let anotherName = myDogName;
anotherName = "Moti";

console.log(myDogName);
console.log(anotherName);
/*We get the different values because in stack memory it gives us a copy of a variable to make changes but it does not change the orginal value*/

let userOne = {
    email:"userone123@gmail.com",
    age:22
};

let userTwo = userOne;
userTwo.email = "usertwo321@gmail.com"; //in objects if we need to change the specific value we use ".valueName"

console.log(userOne.email);
console.log(userTwo.email);
// console.log(userTwo);

/*We get the same value in userOne email and userTwo email because in heap memory it takes reference of original value and directly nake changes in original value */