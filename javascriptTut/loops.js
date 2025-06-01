//============================for loops===============================
// for(let i = 0; i < 4 ; i++){
//     console.log(i);
// }

//================================Practice on math.floor and random=============================================
// let random = Math.floor( Math.random()*10) +1;
// console.log(random);

//================================reverse for loop===============================

// for (let a = 9; a >= 0; a--){
//     console.log(a);
// } //reverse for loop.

//=====================================looping through arrays====================================

// const elements = ["fire", "water", "earth"];

// for (let i = 0; i<elements.length; i++){
//     console.log(elements[i]);
// }

// const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// // Write your code below
// for (let i = 0; i< vacationSpots.length; i++){
//   console.log("I would l to visit " + vacationSpots[i]);
// }

//===============================================Nested loops=======================================================
// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both arrays have the number: ' + yourArray[j]);
//     }
//   }
// }


// const names = ["dai", "popp", "maam"];
// const favFemaleChars = ["leona", "maam", "leira"];

// for (let i = 0; i<names.length; i++){

//     for(let arr = 0; arr<favFemaleChars.length; arr++){
//         if(names[i]===favFemaleChars[arr]){
//             console.log(favFemaleChars[arr] + " is in both lists");
//         }
//     }
// }


// for (counter = 0; counter<10; counter++){
//     console.log(counter);
// }

// for (counter = 9; counter>=0; counter--){
//      console.log(counter);
// }

// const cities = ["london", "dubai", "tokyo"];

// for(let i = 0; i<cities.length; i++){
//     console.log(cities[i] + " is a city");
// }

//=================================Nested loops==========================================
// const bobsFollowers = ["anas", "dai", "popp", "maam"];
// const tinasFollowers = ["anas", "dai", "leona"];
// let mutualFollowers= [];
// for(let i = 0; i<bobsFollowers.length; i++ ){
//   for(let j = 0; j<tinasFollowers.length; j++){
//     if(bobsFollowers[i] === tinasFollowers[j]){
//       mutualFollowers.push(bobsFollowers[i]);
//     }
//   }
// }

//==============================================while loops=================================================
// const cards = ['diamond', 'spade', 'heart', 'club'];

// // Write your code below

// let currentCard;
// while(currentCard != 'spade'){
//   currentCard = cards[Math.floor(Math.random() * 4)];
//   console.log(currentCard);
// }


// const num = [1,2,3,4];

// let currentNum;
// while(currentNum != 3){
//     currentNum = num[Math.floor(Math.random()*4)];
//     console.log(currentNum);
// }


//================================================do while loops==============================================

// let countString = '';
// let i = 0;

// do {
//   countString = countString + i;
//   i++;
// } while (i < 5);

// console.log(countString);


// const firstMessage = 'I will print!';
// const secondMessage = 'I will not print!'; 

// // A do while with a stopping condition that evaluates to false
// do {
//  console.log(firstMessage)
// } while (true === false);

// // A while loop with a stopping condition that evaluates to false
// while (true === false){
//   console.log(secondMessage)
// }


// let cupsOfSugarNeeded = 3;
// let cupsAdded = 0;

// do {
//  cupsAdded++
//  console.log(cupsAdded + ' cup was added') 
// } while (cupsAdded < cupsOfSugarNeeded);

//=================================The break keyword==================================

// for (let i = 0; i < 99; i++) {
//   if (i > 2 ) {
//      break;
//   }
//   console.log('Banana.');
// }

// console.log('Orange you glad I broke out the loop!');




// const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// // Write your code below
// for (let i = 0; i < rapperArray.length; i++){
//   console.log(rapperArray[i]);
//   if (rapperArray[i] === 'Notorious B.I.G.'){
//     break;
//   }
// }

// console.log("And if you don't know, now you know.");
