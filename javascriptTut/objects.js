//===============================================objects===========================================================
// let object = {name: "anas", age: 21}
// console.log(object);

// let fasterShip = {
//   'Fuel Type' : 'Turbo Fuel',
//   color: 'silver'
// }
// console.log(fasterShip);

//===========================================accessing properties==============================================

// let student = {
//     name: "anas",
//     age: 21,
// }

// console.log(student.name);
// console.log(student.age);
// console.log(student.grade);

// let spaceship = {
//   homePlanet: 'Earth',
//   color: 'silver',
//   'Fuel Type': 'Turbo Fuel',
//   numCrew: 5,
//   flightPath: ['Venus', 'Mars', 'Saturn']
// };

// // Write your code below

// let crewCount = spaceship.numCrew;
// let planetArray = spaceship.flightPath;

//============================================bracket notation======================================================

// let spaceship = {
//   'Fuel Type': 'Turbo Fuel',
//   'Active Duty': true,
//   homePlanet: 'Earth',
//   numCrew: 5
// };
// spaceship['Active Duty'];   // Returns true
// spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
// spaceship['numCrew'];   // Returns 5
// spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

// let returnAnyProp = (objectName, propName) => objectName[propName];
 
// console.log(returnAnyProp(spaceship, 'homePlanet')); // Returns 'Earth'

// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   'Active Mission' : true,
//   homePlanet : 'Earth', 
//   numCrew: 5
//  };

// let propName =  'Active Mission';

// // Write your code below
// let isActive = spaceship ['Active Mission'];

// console.log(isActive);
// console.log(spaceship['Active Mission'])

//==============================================property assignment====================================================

// const student = {name: "anas", age: 21}


// student.name = "dai";
// student.grade = "A";
// delete student.grade;

// console.log(student);

// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   homePlanet : 'Earth',
//   color: 'silver',
//   'Secret Mission' : 'Discover life outside of Earth.'
// };

// // Write your code below

// spaceship.color = "glorious gold";
// spaceship.numEngines = 2;
// delete spaceship['Secret Mission'];

//=================================================methods================================================

// const person = {
//   name: "Anas",
//   age: 21,
//   greet (){
//     return "Hello! my name is " + this.name;
//   }
// }

// console.log(person.greet());




// let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// // Write your code below
// const alienShip = {
//   retreat (){
//     console.log(retreatMessage);
// },
// takeOff (){
//   console.log("Spim... Borp... Glix... Blastoff!");
// }
// }

// alienShip.retreat();
// alienShip.takeOff();

//==================================================Nested objects========================================================

// const student = {
//   name: "Anas",
//   age: 21,
//   contact: {
//     email: "anas@example.com",
//     phone: "123-456-7890"
//   },
//   subjects: {
//     math: {
//       teacher: "Mr. Johnson",
//       grade: "A"
//     },
//     science: {
//       teacher: "Ms. Patel",
//       grade: "B+"
//     }
//   }
// };

// // Accessing nested properties
// console.log(student.contact.email);  // Outputs: anas@example.com
// console.log(student.subjects.math.teacher); // Outputs: Mr. Johnson

// const dqDai = {
//   teacher:{
//   name: "Avan",
//   age: 31,
//   },
//   disciplesOfAvan: {
//     dai:{
//     name: "Dai",
//     age: 12,
//     specialAttack: "Giga Stash",
//     },
//     popp:{
//     name: "Popp",
//     age: 15,
//     specialAttack: "Medroa",
//     },
//     maam: {
//       name: "Maam",
//       age: 16,
//       specialAttack: "Tiger shatter fist"
//     }

//   },

//   darkArmy:{
//     vearn:{
//     name: "Vearn",
//     age: "...",
//     specialAttack: "Demonic guard" 
//     },

//     hadlar:{
//       name: "Hadlar",
//       age: 320,
//       specialAttack:"Ultra-combustion-slash"
//     }

//   }



// }

// console.log(dqDai.disciplesOfAvan.maam.specialAttack);
// console.log(dqDai.darkArmy.vearn.specialAttack);

// let spaceship = {
//   passengers: [{
//     name: "anas"
//   }],
//   telescope: {
//     yearBuilt: 2018,
//     model: "91031-XLT",
//     focalLength: 2032 
//   },
//   crew: {
//     captain: { 
//       name: 'Sandra', 
//       degree: 'Computer Engineering', 
//       encourageTeam() { console.log('We got this!') },
//      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
//   },
//   engine: {
//     model: "Nimbus2000"
//   },
//   nanoelectronics: {
//     computer: {
//       terabytes: 100,
//       monitors: "HD"
//     },
//     'back-up': {
//       battery: "Lithium",
//       terabytes: 50
//     }
//   }
// }; 

// let capFave = spaceship.crew.captain['favorite foods'][0];

// let firstPassenger = spaceship.passengers[0]

//=======================================pass by reference===================================
// const spaceship = {
//   homePlanet : 'Earth',
//   color : 'silver'
// };
 
// let paintIt = obj => {
//   obj.color = 'glorious gold'
// };
 
// paintIt(spaceship);
 
// console.log(spaceship.color) // Returns 'glorious gold'

// const spaceship = {
//   homePlanet : 'Earth',
//   color : 'silver'
// };
 
// let newShip = obj => {
//   obj.color = "black";
// }

// newShip(spaceship);
// console.log(spaceship);

// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   homePlanet : 'Earth'
// };

// // Write your code below
// let greenEnergy = obj =>{
// obj['Fuel Type'] = 'avocado oil';
// }

// let remotelyDisable = obj =>{
//   obj.disabled = true;
// }

// greenEnergy(spaceship);
// remotelyDisable(spaceship);
// console.log(spaceship);

//===========================================looping through objects=====================================================
// let spaceship = {
//   crew: {
//     captain: { 
//       name: 'Lily', 
//       degree: 'Computer Engineering', 
//       cheerTeam() { console.log('You got this!') } 
//     },
//     'chief officer': { 
//       name: 'Dan', 
//       degree: 'Aerospace Engineering', 
//       agree() { console.log('I agree, captain!') } 
//     },
//     medic: { 
//       name: 'Clementine', 
//       degree: 'Physics', 
//       announce() { console.log(`Jets on!`) } },
//     translator: {
//       name: 'Shauna', 
//       degree: 'Conservation Science', 
//       powerFuel() { console.log('The tank is full!') } 
//     }
//   }
// }; 

// for...in
// for (let crewMember in spaceship.crew) {
//   console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
// }

// const dqDai = {
//   teacher:{
//   name: "Avan",
//   age: 31,
//   },
//   disciplesOfAvan: {
//     dai:{
//     name: "Dai",
//     age: 12,
//     specialAttack: "Giga Stash",
//     },
//     popp:{
//     name: "Popp",
//     age: 15,
//     specialAttack: "Medroa",
//     },
//     maam: {
//       name: "Maam",
//       age: 16,
//       specialAttack: "Tiger shatter fist"
//     }

//   },

//   darkArmy:{
//     vearn:{
//     name: "Vearn",
//     age: "...",
//     specialAttack: "Demonic guard" 
//     },

//     hadlar:{
//       name: "Hadlar",
//       age: 320,
//       specialAttack:"Ultra-combustion-slash"
//     }

//   }



// }

// for(let charcater in dqDai.disciplesOfAvan){
//   console.log(`${charcater}: ${dqDai.disciplesOfAvan[charcater].name} `  )


let array = [1, 2, 3, 4, 5];

array.map(num =>{
  return num * 2;
})

console.log(array);