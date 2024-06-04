// //Comparison of datatypes in javascript
// console.log(2<3);
// console.log(2<=3);
// console.log(2>3);
// console.log(2>=3);
// console.log(2==3);
// console.log(2!=3);

// console.log("2">1); 
// /*It will convert that string in number and then it will compare it but try to compare two same datatype values in typescript it does not allow you to compare different datatypes*/

// //try to avoid this type of conversions try to write clean code
// console.log(null > 0);  //false
// console.log(null == 0); //false
// console.log(null >= 0); //true the reason is below
// /* An equality check == and comparisons > < >= <= work differently.
// comparisons convert null to a number, treating it as 0.*/

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0); //In all the cases it will print false

//strict check === it will not only check values but also datatype
console.log("2"===2); // in this case it will check datatypes and print false

