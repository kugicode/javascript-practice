//=======================================forEach Method==========================================
// const groceries = ["brown sugar", "salt", "cranberries", "walnuts"]

// groceries.forEach(function(groceryItem){
//   console.log(' - ' + groceryItem);
// })

// const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// // Iterate over fruits below

// fruits.forEach((yum) =>{
// console.log("I want to eat a " + yum);
// })

//======================================map Method================================

// const numbers = [1, 2, 3, 4, 5]; 

// const bigNumbers = numbers.map((num) =>{
// return num * 20;
// });
// console.log(numbers);
// console.log(bigNumbers);

// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// // Create the secretMessage array below
// const secretMessage = animals.map(word =>{
// return word[0];
// });

// console.log(secretMessage.join(''));



// const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// fruits.forEach((yum) =>{
// console.log("I want to eat a " + yum)
// });




// const numbers = [1, 2, 3, 4, 5]; 

// const bigNumbers = numbers.map((num) =>{
// return num * 10;
// });

// console.log(numbers);
// console.log(bigNumbers);

// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];


// const secretMessage = animals.map((word) =>{
// return word[0];
// });
// console.log(secretMessage.join(''));

//================================================filter method========================================================

// const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

// const shortWords = words.filter(word =>{
// return word.length<6
// });

// console.log(words);
// console.log(shortWords);

// const names = ["anas", "dai", "maam"];
// let name = "popp";
// console.log(name.length<5)
// ;
// console.log(names);

// const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// // Call .filter() on randomNumbers below
// const smallNumbers = randomNumbers.filter((num) =>{
// return num<250
// });

// const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// // Call .filter() on favoriteWords below

// const longFavoriteWords = favoriteWords.filter((word) => {
// return word.length>7;
// });

//====================================.findindex========================================

// const jumbledNums = [123, 25, 78, 5, 9]; 

// const lessThanTen = jumbledNums.findIndex((num) => {
// return num<10;
// });

// console.log(jumbledNums);
// console.log(lessThanTen);
// console.log(jumbledNums[3])

// const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// const foundAnimal = animals.findIndex(word =>{
// return word === 'elephant';
// });

// const startsWithS = animals.findIndex(word => {
// return word[0] === "s";
// });

//=======================================reduce method===============================================

// const numbers = [1, 4, 7, 10];
// const summedNumbers = numbers.reduce((accumulator, currentValue) =>{
// return accumulator + currentValue;
// },2);
// console.log(numbers);
// console.log(summedNumbers);

// const newNumbers = [1, 3, 5, 7];

// const newSum = newNumbers.reduce((accumulator, currentValue) => {
// console.log('The value of accumulator: ', accumulator);
// console.log('The value of currentValue: ', currentValue);
// return accumulator + currentValue;
// }, 10);

// console.log(newSum);

// const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// // Something is missing in the method call below

// console.log(words.some((word) => {
//   return word.length < 6;
// }));

// // Use filter to create a new array
// const interestingWords = words.filter(word => {
//   return word.length<5
// })


// // Make sure to uncomment the code below and fix the incorrect code before running it

//  console.log(interestingWords.every((word) => { return word.length>5 } ));

//==================================================================================================================

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word);

// // Choose a method that will return a new array
// const smallerNums = nums.map(num => num - 5);

// // Choose a method that will return a boolean value
// nums.some(num => num < 0);











// let spaceship = {
//     crew: {
//     captain: { 
//         name: 'Lily', 
//         degree: 'Computer Engineering', 
//         cheerTeam() { console.log('You got this!') } 
//         },
//     'chief officer': { 
//         name: 'Dan', 
//         degree: 'Aerospace Engineering', 
//         agree() { console.log('I agree, captain!') } 
//         },
//     medic: { 
//         name: 'Clementine', 
//         degree: 'Physics', 
//         announce() { console.log(`Jets on!`) } },
//     translator: {
//         name: 'Shauna', 
//         degree: 'Conservation Science', 
//         powerFuel() { console.log('The tank is full!') } 
//         }
//     }
// }; 

// // Write your code below
// for (let crewMember in spaceship.crew){
//   console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
// }

// for (let crewMember in spaceship.crew){
//   console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
// }


// let array = [1, 2, 3, 4, 5];

// let newArray = array.map(num =>{
//   return num * 2;
// })

// console.log(newArray);