// const tableSpoonsOfFlour = 5; //Used a constant variable so that the variable does not change
// let added = 0; // Used let so that it can change during the do block.

// do{
//     added++; //Increments added by 1
//     console.log(added + " table spoon of flour was added"); //This is the message that will run till the while is false.
// } while(tableSpoonsOfFlour>added); // tablespoon variable is 5 so this will not stop till added is also 5

let color = ["red", "blue", "green"];




color.forEach((c, index) => {
    console.log(`${index + 1}. My fav color is ${c}`);
});