// let name = "Anas"; // Declares a variable 'name' and assigns it the string "Anas"
// let age = 21; // Declares a variable 'age' and assigns it the number 21

// console.log(`My name is ${name} and I'm ${age} years old!`); // Logs a formatted string to the console


// let width = 4;
// let length = 5;

// console.log("The area of the rectangle is " + width * length); // Corrected message


// let number = 4; // Declares a variable 'number' and assigns it the value 4

// if (number % 2 == 0) { // Checks if the number is even
//     console.log("Even"); // Logs "Even" if the condition is true
// } else {
//     console.log("Odd"); // Logs "Odd" if the condition is false
// }


//methods in javascript.

//console.log("hello".toUpperCase());
//console.log("     thishasspaces      ".trim());
// console.log("ANAS".toLowerCase());

//Built in object in javaScript.

// console.log(Math.random()); // prints a number between 0 and 1.
// console.log(Math.random() * 50); // Prints number between 0 and 50.
// console.log (Math.floor(Math.random() *50)); // floor and random are methods that belong to the Math object.
// console.log(Number.isInteger(22));


// let num = Math.floor(Math.random() * 10) + 1;
// console.log(num);


// let price;
// console.log(price); //undefined
// price = 350;
// console.log(price);

// let a = 5;
// a += 5; //increments a by 5.
// a -= 2; //subtracts a by 2.
// a++; // increments a by 1
// a--; //decrements a by 1
// console.log(a);


// you could you typeof operator to check the type of data type in a variable.

// let newVariable = "me";

// console.log(typeof newVariable);

// newVariable = 1;

// console.log(typeof newVariable);


//------------------------------------------------------ truthy and falsy -----------------------------------------------------

// let strong = true; // This is a truthy value falsy values are false, 0, "", nan, undefined, null.
// if(strong){ //truthy values are true, non zero number(1,-5,99), non empty string "hi", object and arrays[]{},functions.
// console.log("Yess! :D");
// }
// else{
//     console.log("No! :(");
// }

// let age = 0;

// if (age){
//     console.log("You're " + age + " years old!");
// }
// else{
//     console.log("Impossible! :(");
// }

// let isCorrect = true;

// if (isCorrect === true){
//     console.log("Correct");
// }
// else{
//     console.log("Wrong");
// }

// if (isCorrect){
//     console.log("Correct");
// }
// else{
//     console.log("Wrong");
// }


// isCorrect ? console.log("Correct!") : console.log("Wrong!") // This is a ternary operator which is a shorter way to write an if statement.

// let name = "Anas";

// if (name === "Anas"){
// console.log("Hello, Anas!")
// }
// else{
//     console.log("No!");
// }

// name === "Anas" ? console.log("Hello, Anas") : console.log("No!");

//------------------------------------------------switch statements----------------------------------------------------------

// let grade = 'd';

// switch (grade){
// case "A":
// console.log("You got 70% +");
// break;
// case "B":
//     console.log("You got 60-69%");
//     break;
//     case "C":
//         console.log("You got 50-59%");
//     break;
//     default:
//         console.log("Invalid grade");
//     break;
//     }

//-----------------------------------------------------defualt parameter in functions--------------------------------------------------

// function greeting(name = 'Guest'){
// console.log(`Hello, ${name}!`);
// }

// greeting("Anas");
// greeting();

// function calcArea(width, height){
// console.log(width * height);
// }

// calcArea(2, 3);


//---------------------------------------Return--------------------------------
// function rectangleArea(width, height){
// let area = width * height;
// return area; // sends back the value to the call.
// }

// console.log(rectangleArea(2,2));

//--------------------------------------helper functions--------------------------------------------


// function deskCount(s, s){
// return s * s;
// }

// function costOfDesks(rows, columns){
//  return deskCount(rows, columns) * 100   
// }

// totalPrice = costOfDesks(5, 5);
// console.log(totalPrice);
// //Helper function allow functions to be called in another function.



//----------------------------function experession------------------------

// const weekend = function(day){
//     if(day === 'Saturday' || day === 'Sunday'){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(weekend('Saturday'));

//-----------------------------Arrow functions---------------------------

// const plantNeedsWater = (day) => {
//     if(day === 'Wednesday'){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(plantNeedsWater('Wednesday'));

//---------------------------------concise body Arrow functions-------------------------------------------

// const squareNum = (num) =>{
//     return num * num;
// } 

// const sqaureNum = num => num * num;


//Function decleration
// function isValid(age){
// return age>= 18 ? "You're an adult" : "Kid!";

// }
// console.log(isValid(22));

//function expression
// const isValid = function(age){
//     return age>= 18 ?"You're an adult" : "Kid!";
// }

// console.log(isValid(2));

//arrow function
// const isValid = age =>{
// return age>= 18 ? "You're an adult" : "Kid!";
// }

// console.log(isValid(21));

//concise arrow function
// const isValid = age => age >= 18 ? "You're an adult" : "Kid";

// console.log(isValid(2));

//--------------------------------------------------Blocks and scope-----------------------------------------------------

// const city = 'London';

// const logCitySkyline = () =>{
// let skyscraper = 'Big ben';
// return 'The stars over the ' +skyscraper + ' in ' + city;
// }

// console.log(logCitySkyline());

//----------------------------------------scope pollution------------------------------------

// let num = 50

// const logNum = () =>{
//    let  num = 100;//this is wrong
//     console.log(num);
// }

// logNum();
// console.log(num);

//------------------------------practice good scoping------------------------------
// const logSkyColor = () =>{
//     const dusk = true;
//     let color = 'blue';
//     if(dusk){
//     let color = 'pink';
//     console.log(color);
//     }
//     console.log(color);
// }

//---------------------------------Arrays-----------------------------
// let names = ["Dai", "Popp", "Maam"];
// console.log(names[2][1]);

//-------------------------Update elements----------------------
// let age = [21, 22, 23];

// age[2] = 20;

// console.log(age);

//-------------------------------------Arrays with let and const-----------------------------------------

// let manga = ['DQ dai', 'Toriko', 'Hoshin engi']; 
// const characters = ['Dai', 'Toriko', 'Taikobo'];

// manga[1] = 'Saint seiya';
// manga = ['DQ dai'];
// console.log(manga);

// characters[2] = 'Supushan';
// characters = ['Komatsu'];
// console.log(characters);

//----------------------------The .length property--------------------------------------
// const names = ['Dai', 'Popp', 'Maam'];
// console.log(names.length); //3

//------------------------------The .push Method---------------------------------------
// const names = ['dai', 'popp', 'maam'];
// names.push('hyunckel', 'crocodine');
// console.log(names);

//-------------------------The .pop Method---------------------------------------

// let char = ["dai", "popp", "maam"];
// const removed = char.pop();
// // console.log(char);
// console.log(removed)

//---------------------The .map Method------------------------------

// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map (num => num * 2);

// console.log(doubled); // ✅ Prints: [2, 4, 6, 8, 10]

//-------------------------The slice Method-------------------------------

// const names = ["Dai", "Popp", "Maam", "Hyunckel", "Leona"];

// let editted = names.slice(-4);
// console.log(editted);

//==========================The indexOf Method=================================
// const level = [21, 22, 31, 45, 50];

// const indexLevel = level.indexOf(50);

// console.log(indexLevel);

//=============================arrays and functions===============================

// const names = ["dai", "popp", "maam"];

// function addName (arr){
// arr.push("avan");
// }

// addName(names);
// console.log(names);

// function removeElement(newarr){
// newarr.pop();
// }

// removeElement(names);
// console.log(names);


//===============================Nested arrays============================

// const nestedArr = [[1], [2, 3]];
// console.log(nestedArr[1][1]);

// const numberClusters =[[1,2], [3,4], [5,6]];
// const target = numberClusters[2][1];
// console.log(target);

//======================================.length for last element.=========================================
// const fruits = ["apples", "banana", "oranges"];
// console.log(fruits[fruits.length - 1]); // Output: "oranges"

//==========================================.join Method=====================================
// const elements = ["fire", "water", "air"];
// const join = elements.join("-");

// console.log(join);

//================================================.push============================================
// const animals = ["lion", "bear", "zebra"];

// animals.push("tiger");
// console.log(animals[animals.length -1]);


//=====================================.splice Method=========================================
// const elements = ["Fire", "Water", "Air"];

// elements.splice(2 , 1);
// console.log(elements);


