// //Strings in JavaScript

// //basic syntax to concatenation of strings
// console.log("Hello"+" World");

const name = "Shreya ";
const age = 22;

// console.log(name + age + " This is my introduction");

//modern syntax of strings
//string interpolation(by using back ticks and to define variable ${})

console.log(`My name is ${name}and my age is ${age}`);

//second type of declaring the string
const dogName = new String('Bruno');
console.log(dogName);  //[String: 'Bruno']

// console.log(dogName[0]);  //to get the letter om 0th index
// console.log(dogName.__proto__); 
// console.log(dogName.length);
// console.log(dogName.toUpperCase());
// console.log(dogName.charAt(4));  //which character is on that position
// console.log(dogName.indexOf('o'));  //to check the position of that character

const newName = dogName.substring(0,2); //we will get two characters it will take 0 and 1 index letters
console.log(newName);

const anotherName = dogName.slice(-4,3);  //we can give negative values also
console.log(anotherName);

const newStringOne = "    Shreya    ";
console.log(newStringOne);
console.log(newStringOne.trim());  //it removes extra space
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim


const email = "abc@gmail-com";
console.log(email.replace('-','.'));  //it will replace the - by .

console.log(email.includes('abc'));   //to check that word is included or not

const seperator = "hii-hello-world";
console.log(seperator.split('-')); //it will create an array we can split on the bases of space also
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


/*when we write same line in console we get 
String {'Bruno'}
0: "B"
1: "r"
2: "u"
3: "n"
4: "o"
length: 5
[[Prototype]]: String
[[PrimitiveValue]]: "Bruno" 
this type of output it shows all the prototypes og that string and length of that word*/