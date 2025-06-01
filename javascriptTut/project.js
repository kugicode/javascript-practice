// function random() {
//   return Math.floor(Math.random() * 6) + 1;
// }

// console.log(random()); // This will print a random number between 1 and 6




// function checker (num){
// if (num % 2 === 0){
//     return "The number is even!"
// }
// else{
//     return "The number is odd!"
// }
// }

// console.log(checker(3));


// function convert(Celsius) {
//   return `${Celsius}°C is ${(Celsius * 9/5) + 32}°F`;
// }

// console.log(convert(0));  // Output: "0°C is 32°F"
// console.log(convert(100)); // Output: "100°C is 212°F"


// function reverse(word){
// return word.split("").reverse().join("")
// }
// console.log(reverse("hello"));
// console.log(reverse("javascript"));
// console.log(reverse("anas"));



// function fizzBuzz (){
//     for(let i = 1; i<20; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("fizzBuzz")
//         }
//         else if(i % 3 === 0){
//            console.log("fizz")
//         }
//         else if (i % 5 === 0 ){
//             console.log ("Buzz")
//         }
//         else{
//             console.log(i)
//         }
//     }
// }

// fizzBuzz();


// function fizzBuzz() {
//     let result = [];
    
//     for (let i = 1; i <= 20; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result.push("FizzBuzz");
//         } else if (i % 3 === 0) {
//             result.push("Fizz");
//         } else if (i % 5 === 0) {
//             result.push("Buzz");
//         } else {
//             result.push(i);
//         }
//     }
    
//     return result.join("\n"); // Joins all results into a single string with line breaks
// }

// console.log(fizzBuzz());

// function factorial(n) {
//     if (n === 0) {
//         return 1; // Base case
//     }

//     let result = 1; // Start with 1
//     for (let i = n; i > 0; i--) {
//         result = result * i; // Multiply result by `i` in each iteration
//     }

//     return result;
// }

// console.log(factorial(5)); // Output: 120
// console.log(factorial(3)); // Output: 6
// console.log(factorial(0)); // Output: 1




// function factorial(n){
// if(n === 0){
//     return 1;
// }

// let result = 1;
// for (let i = n; i>0; i--){
//     result *= i // same as result = result * i :D

    
// }
// return result;
// }

// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(1));
// console.log(factorial(0));


// function palindrome(word) {
//     // Step 1: Convert to lowercase and remove non-alphanumeric characters
//     let cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");

//     // Step 2: Reverse the string
//     let reversedWord = cleanedWord.split("").reverse().join("");

//     // Step 3: Check if the reversed version matches the original cleaned version
//     return cleanedWord === reversedWord;
// }

// console.log(palindrome("Racecar")); // Output: true
// console.log(palindrome("hello")); // Output: false
// console.log(palindrome("A man, a plan, a canal, Panama")); // Output: true


// function add(a,b){
// return a+b;
// }

// console.log(add(2,5));

// for (let i = 1; i<=10; i++){
//     console.log(i);
// }




// let array = ["red", "blue", "green", "orange", "yellow"]

// console.log(array[2]);

// function reverse(word){
// return word.split("").reverse().join("");
// }

// console.log(reverse("javascript"));


// function checkNum(num){
//     if (num >= 1){
//         return "Positive number"
//     }
//     else if (num === 0){
//         return 0
//     }

//     else if (num<0){
//         return "Negative number"
//     }
// }

// console.log(checkNum(-1));


// function checkAge(num){
// return num<100 ? true : false
// }
// console.log(checkAge(1))


// if(num === 5){
//  console.log(true)   
// }
// else{
//     false
// }






// function fizzBuzz(){

//     for (let i = 1; i<=30; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }
//     else if(i % 5 === 0){
//         console.log("Fizz");
//     }
//     else if(i% 3 === 0){
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }
// }

// fizzBuzz();





// function fizzBuzz(){

// let array = []

//     for (let i = 1; i<=30; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         array.push("FizzBuzz");
//     }
//     else if(i % 5 === 0){
//         array.push("Buzz");
//     }
//     else if(i% 3 === 0){
//         array.push("Fizz")
//     }
//     else {
//        array.push(i);
//     }
// }
// return array;
// }

// console.log(fizzBuzz());


// function vowels(word){
// let words;
// words = word.toLowerCase()

// for (let i = 0; i<words.length; i++){
//     if(words[i] === "a" || "e" || "i" || "o" || "u"){
//     }
// }

// }

// console.log(vowels("Anas"));



function countVowels(word) {
    let words = word.toLowerCase(); 
    let vowelCount = 0; // Initialize a counter for vowels

    for (let i = 0; i < words.length; i++) { // Fix loop condition
        if (words[i] === "a" || words[i] === "e" || words[i] === "i" || words[i] === "o" || words[i] === "u") { 
            vowelCount++; // Increment vowel counter
        }
    }

    return vowelCount; // Return final count
}

console.log(countVowels("Anas")); // Output: 2
console.log(countVowels("JavaScript")); // Output: 3
console.log(countVowels("Sky")); // Output: 0