// const goat = {
//     dietType: "herbivore",
//     makeSound() {
//         console.log("baaa");
//     },
//     diet(){
//         console.log(this.dietType);
//     }
// }

// goat.makeSound();
// goat.diet();

// const robot = {
//   model: "1E78V2",
//   energyLevel: 100,

//   provideInfo() {
//     return `I am ${this.model} and my current energy level is ${this.energyLevel}`
//   }
// };

// console.log(robot.provideInfo());

// const robot = {
//   energyLevel: 100,
//   checkEnergy () {
//     console.log(`Energy is currently at ${this.energyLevel}%.`)
//   }
// }

// robot.checkEnergy();

// const robot = {
//   _model: '1E78V2',
//   _energyLevel: 100,
//   get energyLevel (){
//     if (typeof this._energyLevel === 'number'){
//       return "My current energy level is " + this._energyLevel;
//     }
//     else{
//       return "System malfunction: cannot retrieve energy level"
//     }
//   }
// };

// console.log(robot.energyLevel)


// const robot = {
//   _model: '1E78V2',
//   _energyLevel: 100,
//   _numOfSensors: 15,
//   get numOfSensors(){
//     if(typeof this._numOfSensors === 'number'){
//       return this._numOfSensors;
//     } else {
//       return 'Sensors are currently down.'
//     }
//   },
//     set numOfSensors (num){
//       if (typeof num === 'number' && num >= 0 ){
//         return this._numOfSensors = num;
//       }
//   }
  
// };

// const robot = {
//   _model: '1E78V2',
//   _energyLevel: 100,
//   _numOfSensors: 15,
//   get numOfSensors(){
//     if(typeof this._numOfSensors === 'number'){
//       return this._numOfSensors;
//     } else {
//       return 'Sensors are currently down.'
//     }
//   },
//     set numOfSensors (num){
//       if (typeof num === 'number' && num >= 0 ){
//        this._numOfSensors = num;
//       }
//       else {
//         console.log("Pass in a number that is greater than or equal to 0");
//       }

//   }
  
// };

// robot.numOfSensors = 100;

// console.log(robot.numOfSensors);


//=======================================factory functions=========================================

// const monsterFactory = (name, age, energySource, catchPhrase) => {
// return {
//     name: name,
//     age: age,
//     energySource: energySource,
//     catchPhrase: catchPhrase
// }

// };

// const tiger = monsterFactory("Gomechan", 12, "goldenpower", "beee");

// console.log(tiger.age);


// const robotFactory = (model, mobile) =>{
// return{
//   model: model,
//   mobile: mobile,
//   beep(){
//     console.log("Beep Boop");
//   }
// }
// }

// const tinCan = robotFactory("P-500", true);
// tinCan.beep();

//==============================================property value shorthand====================================================
// const robotFactory = (model, mobile) => {
//   return {
//     model,  //shorthand
//     mobile,
//     beep() {
//       console.log('Beep Boop');
//     }
//   }
// }

// // To check that the property value shorthand technique worked:
// const newRobot = robotFactory('P-501', false)
// console.log(newRobot.model)
// console.log(newRobot.mobile)



//=======================================Destructed assignment===============================================

// const student = {
//     name: "dai",
//     age: 12,
//     specialAttack: "Gigastrash",

//     otherStuff: {
//         otherAttacks: "AvanStrash",
//         bestfriends: "gomechan"
//     }
// }

// const attack = student.otherStuff.otherAttacks  
// // const {otherAttacks} = student.otherStuff
// console.log(otherAttacks);

// const robot = {
//   model: '1E78V2',
//   energyLevel: 100,
//   functionality: {
//     beep() {
//       console.log('Beep Boop');
//     },
//     fireLaser() {
//       console.log('Pew Pew');
//     },
//   }
// };

// // const {functionality} = robot;

// // functionality.beep();

// // const bot = robot.functionality.fireLaser()
// const { fireLaser } = robot.functionality;
// fireLaser()


//========================================Built-in-objects Methods============================================

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)

console.log(newRobot);