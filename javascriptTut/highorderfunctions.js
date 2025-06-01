const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i<=5; i++){
        if(2+2 != 3){
            console.log("Something has gone very wrong :(");
        }
    }

};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();

console.log(isTwoPlusTwo.name);// to figure out our previous function name

const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

console.log(higherOrderFunc(anotherFunc
));




const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
let checkA = val + 2;
let checkB = func(val);

if (checkA === checkB){
  return checkB
}
else{
  return "inconsistent results";
}
}

console.log(checkConsistentOutput(addTwo, 2));