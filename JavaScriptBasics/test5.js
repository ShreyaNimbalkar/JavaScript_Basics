// //Number and Maths in JavaScript

// const num1 = 200;      //common type to define number
// console.log(num1);
// console.log(typeof num1);

// const num2 = new Number(300);   //Specifically we give type of variable
// console.log(num2);  //[Number: 300]

// console.log(num2.toString().length);  //when we convert the number in string then prototypes of strings can be applied on number

// console.log(num1.toFixed(2));  //we can use toFixed method in e-commarce websites to make the number in round figure upto 2 decimal points

// const num3 = 145.6783
// console.log(num3.toPrecision(4));  //145.7
// /*Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// Number of significant digits. Must be in the range 1 - 21 */

// const num4 = 100000000000;
// console.log(num4.toLocaleString('en-IN')); //1,00,00,00,00,000
// /*it adds the comma to that number en-IN menas it converts that number by Indian standards */

// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number


//*******************************************Maths************************************** 

// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(1.6)); 
// console.log(Math.ceil(1.2)); //it will convert that number in topmost number means max number that can be roundup
// console.log(Math.floor(1.9)); //it will convert that number in lowest number it can roundup
// console.log(Math.min(2,4,5,1,6));
// console.log(Math.max(3,10,43,22));

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10)+1);

const min =10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math