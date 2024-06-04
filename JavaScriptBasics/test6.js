//Dates

let newDate = new Date();
// console.log(newDate);        //2024-06-04T01:35:45.783Z
// console.log(newDate.toString()); //Tue Jun 04 2024 01:35:45 GMT+0000 (Coordinated Universal Time)
// console.log(newDate.toDateString()); //Tue Jun 04 2024
// console.log((newDate.toJSON()));  //2024-06-04T01:35:45.783Z
// console.log(newDate.toLocaleDateString());  //6/4/2024
// console.log(newDate.toLocaleString());  //6/4/2024, 1:35:45 AM
// console.log(typeof newDate);  //object

// let createdDate = new Date(2024, 0, 20);
// console.log(createdDate.toDateString()); //Sat Jan 20 2024 

// let createdDate = new Date(2024, 0, 20,5, 3);
// console.log(createdDate.toLocaleString()); //1/20/2024, 5:03:00 AM it will give you time also

//let createdDate = new Date("06-20-2003");
// console.log(createdDate.toLocaleString()); //6/20/2003, 12:00:00 AM

// let createdDate = new Date("06-20-2003");
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(createdDate.getDate());

//to convert in seconds
// console.log(Math.floor(Date.now()/1000));

 let newOne = new Date()
// console.log(newOne);
// console.log(newOne.getMonth()+1);
// console.log(newOne.getDay());


//by pressing ctrl_space it shoes properties
newOne.toLocaleString('default',{
    weekday:"short"
})




