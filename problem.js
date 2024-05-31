"use strict"

//1.Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo"; 
console.log(carName);

// 2.On one single line, declare three variables with the following names and values:

let userInfo = {    
  firstName : "John",
  lastName : "Doe",
  age : 35,
}
console.log(userInfo);


// 3.Use the correct assignment operator that will result in x being 50 (same as x = x * y).

let a= 10;
let b= 5;
let x =a*b ;
console.log( "The result of x is : " + x);


// 4.1. Use comments to describe the correct data type of the following variables:

let length = 16; // data type  is Number. 
console.log(typeof length);

let lastName = "Johnson"; // data type is String . 
console.log(typeof lastName);

const x1 = {
  firstName: "John",  
  lastName: "Doe"
};    // data type  is Object. 

console.log( typeof x1);


//5. Execute the function named `myFunction`.
function myFunction() {
  alert("Hello World!");
}
myFunction()


// 6. Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

let person = {
  name:"John",
  age: 50,
}
alert(person.name + " is"+ person.age );

//7. The <button> element should do something when someone clicks on it. Try to fix it!

// <button onclick=" "> Click me.</button> 


// 8.Array Related Question .

// Alert the number of items in an array, using the correct Array property: 

 const cars = ["Volvo", "Jeep", "Mercedes"];
 console.log(cars.length);


// 2. Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"]; 
  Brand [0]= "Ford";
  console.log(Brand);

//9. Math Related Problems.

  //1. Use the correct Math method to create a random number.
  let p = Math.random();
  console.log(p);

//2. Use the correct Math method to return the largest number of 10 and 20.
let q = Math.max(10, 20);
console.log(q);

//3. Use the correct Math method to get the square root of 9.
let r = Math.sqrt(81); // 81 is the root of nine
console.log(r);

//10 .comparison operator related problems! 

//1. Choose the correct comparison operator to alert true, when x is greater than y. 
  let x2 = 10;
  let y1 = 5;

  if(x2 > y1){
  alert(" True");

}else{
  alert("false");
}
console.log(x2);
 

//2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let age= 18;
let mssagMe= age > 18? "Your Old is enough": "Too young";
console.log(mssagMe);
