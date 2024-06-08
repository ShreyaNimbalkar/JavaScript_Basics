const fruits = ["apple","banana","watermelon"];
const flowers = ["rose","sunflower","lotus"];

// fruits.push(flowers)

// console.log(fruits);
// //it combines both arrays in this form  [ 'apple', 'banana', 'watermelon', [ 'rose', 'sunflower', 'lotus' ] ] it changes in existing array
// console.log(fruits[3][1]);   //sunflower

// const combined = fruits.concat(flowers)
// console.log(combined);      //[ 'apple', 'banana', 'watermelon', 'rose', 'sunflower', 'lotus' ]

// /*concat:Combines two or more arrays. This method returns a new array without modifying any existing arrays. */

// const newElement = [...fruits,...flowers]    //spread operator
// console.log(newElement);

const newArr1 = [1,2,3,[4,5],6,7,[8,9,[3,4,5]]]
const newArr2 = newArr1.flat(Infinity)
console.log(newArr2);

/*The maximum recursion depth
Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. */

console.log(Array.isArray("Shreya"));  //checks this is array or not
console.log(Array.from("Shreya"));    //converts into array
console.log(Array.from({name:"shreya"}));   //it will print empty because it does not know to convert key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3 ));    //A set of elements to include in the new array object.Returns a new array from a set of elements.