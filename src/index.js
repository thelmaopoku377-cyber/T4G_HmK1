//prompt the user for their name, age, and email address, and store the values in variables
let Name = prompt("Enter your name:"); // takes input from the user
let age = prompt("How old are you"); //takes input from the user
let email = prompt("Enter your email address:"); // takes input from the user

//alert the user's input
alert(`Hello ${Name}, you are ${age} years old and your email address is ${email}.`);

// A. Store your name inside a variable and log it
let name = "Thelma";
console.log(name);

// B. Store your age inside a variable and log it
let myAge = 25;
console.log(myAge);

// C. Add two numbers
let sum = 10 + 5;
console.log(sum);

// D. Subtract two numbers
let difference = 20 - 7;
console.log(difference);

// E. Divide two numbers
let quotient = 30 / 6;
console.log(quotient);

// F. Multiply two numbers
let product = 4 * 8;
console.log(product);

// G. Find the remainder of 15 % 4
let remainder = 15 % 4;
console.log(remainder);

// H. Store a boolean value
let isStudent = true;
console.log(isStudent);

// I. Set variable to a number and log its type
let numVar = 100;
console.log(typeof numVar);

// J. Set variable to a string and log its type
let strVar = "Hello World";
console.log(typeof strVar);


//ASSIGMENT10

//User details
let userName = prompt("Enter your name:");
let userAge = Number (prompt("Enter your age:"));
let userEmail = prompt("Enter your email:");

//Check age and display the appropriate message
if (age < 12){
   alert(
    `Hi ${username}, you are ${userAge} years old and you are too young to register.Sorry😔😔`
   );
}else if (age >= 12 && age < 18){
    alert(
        `Hi ${userName}, you are ${userAge} years old and you have limited options to register for.We will keep in touch via your email: ${email}.👋🏾👋🏾`
    );
}else {
    alert(
        `Hi ${userName}, you are ${userAge} years old and you can register for any option for your choosing. We will keep in touch via your email: ${email}.👋🏾👋🏾 `
    );
}
