//Array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


//The Array object, enables storing a collection of multiple items under a single variable name
/*JavaScript arrays are resizable 
JavaScript arrays are not associative arrays
JavaScript arrays are zero-indexed
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies). */

/*A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 

A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.*/


 const myArr = [0,1,2,3,4,5]
// const myArr1 = ["apple","banana"]
// const myArr2 = new Array(1,2,3,4)
// const myArr3 = [2,"hello",true]

// console.log(myarr1[0]);

//Array Methods

// myArr.push(6);  //Add the element
// myArr.push(8)
// myArr.pop();    //Removes the last element

// myArr.unshift(7);   //Add the element at the start of array
// myArr.shift();      //Removes the first element

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()       //Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log(newArr);



console.log("A",myArr);

const myn1 = myArr.slice(1,4)
console.log(myn1);
console.log("B",myArr);   //B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,4)
console.log(myn2);
console.log("C",myArr);  //C [ 0, 5 ]

/*The difference between slice and splice :slice() is used to extract parts of an array without modifying it, whereas splice() is used to change the content of an array by removing, replacing, or adding elements. */



