// //https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion 
// //why string to number conversion is confusing
// //basic operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

// //concatination of two strings
// let str1 = "hello";
// let str2 = " shreya";
// let str3 = str1 + str2;
// console.log(str3);

// //operations
// console.log("1"+"2");
// console.log("1"+2);
// console.log(2+"1");
// console.log("1"+2+2); //if the starting of this operation is with string then it will convert all other numbers in string
// console.log(2+2+"1"); //if the starting of this operation is number then it will convert all the strings in number

//prefix and postfix
/*If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing. */

let num1 = 3;
let num2 = num1++;
console.log(num1);
console.log(num2);

/* If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.*/
let num3 = 3;
let num4 = ++num3;
console.log(num3);
console.log(num4);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment