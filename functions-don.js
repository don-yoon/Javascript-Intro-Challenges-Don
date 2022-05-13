// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".

//Function will return "polo" when called. No input required
const marco = () => {
    return "polo"
}
//Use console.log to invoke function
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

//Input will be person's name with a datatype of string
const greeting = (name) => {
    //using the syntax = (name) and ${} will let me introduce an input into the function in the form of a string
    return `Welcome, ${name}`
}
//Use console.log to invoke function and use a test name
console.log(greeting("Don")) //output "Welcome, Don"

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

//Input will be a number
const oddOrEven = (number) => {
    //return the output of a conditional statement if number is even "number is even" else "number is odd"
    //use modulo to determine even or odd
    if (number % 2 === 0){
        return "number is even"
    //if it isn't even the rest should be odd    
    } else {
        return "number is odd"
    }
    
}
//use console log to check multiple cases
console.log(oddOrEven(3)) //input 3 ==> output "number is odd"
console.log(oddOrEven(1312)) //input 1312 ==> output "number is even"


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

//function triple will take a number input and ouput that number times 3
const triple = (number) => {
    return number * 3
}

console.log(triple(3)) //input 3 ==> output 9
console.log(triple(12)) //input 12 ==> output 36

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

//Function multiply will take two number inputs and return their product
const multiply = (num1, num2) => {
    //multiply the two numbers
    return num1 * num2
}

console.log(multiply(2, 3)) //inputs 2 and 3 ==> 6
console.log(multiply(1256, 23)) //inputs 1256 and 23 ==> 28888

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

//Function will take two inputs and will check if the first number is divisible by the second.

const divisibleBy = (num1, num2) => {
    //use an if statement to check if modulo will output 0
    if (num1 % num2 === 0) {
        return `${num1} is divisible by ${num2}`
    }
    
}

console.log(divisibleBy(10,5)) //input 10 and 5 ==> 10 is evenly divisible by 5

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

//function assignGrade will take a number grade and ouput the letter grade
const assignGrade = (grade) => {
    //if statements for ranges of grades
    if (grade === 100){
        return "perfect"
        //each else if statement checks letter grade range
    } else if (grade < 100 && grade >= 90) {
        return "A"
    } else if (grade < 90 && grade >= 80 ) {
        return "B"
    } else if (grade < 80 && grade >= 70 ) {
        return "C"
    } else if (grade < 70 && grade >= 60 ) {
        return "D"
    } else {
        return "F"
    }

}
    console.log(assignGrade(100)) // input 100 ==> perfect
    console.log(assignGrade(0))  // input 0 ==> F
    console.log(assignGrade(76)) // input 76 ==> c




// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

//function input requries 2 strings
const isLonger = (string1, string2) => {
    //Check which string is longer using if statement
    if (string1.length > string2.length){
        return string1
    //this step is needed in case user inputs strings with same lengths
    } else if (string2.length > string1.length){
        return string2
    //everything else will mean that both strings are the same length
    } else {
        return "Both strings are same length"
    }
    
}

console.log(isLonger("cat", "dog")) // input cat, dog ==> Both strings are same length
console.log(isLonger("Xylophone", "Rubber Duck")) // input Xylophone, Rubber Duck ==> Rubber Duck


// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

//Similar to previous function, instead of string we will input two numbers
const greaterNum = (num1, num2) => {
    //Check which number is greater using if statement
    if (num1 > num2){
        return num1
    //this step is needed in case user inputs same numbers
    } else if (num2 > num1){
        return num2
    //everything else will mean that both numbers are the same
    } else {
        return "Both numbers are the same"
    }
    
}

console.log(greaterNum(4, 5)) //input 4, 5 ==> 5
console.log(greaterNum(4, 4)) //input 4, 4 ==> Bother numbers are the same

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (string) => {
    return string.toUpperCase()
}
console.log(yelling("loud noises"))

// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.

const helloWorld = (langCode) => {
    if(langCode === "en" || langCode === undefined) {
        return "Hello World!"
    } else if (langCode === "es") {
        return "¡Hola Mundo!"
    } else if (langCode === "fr") {
        return "Bonjour monde!"
    } else if (langCode === "ar") {
        return "مرحبا بالعالم!"
    } else if (langCode === "uk") {
        return "Привіт Світ!"
    } else if (langCode === "nl") {
        return "Hallo Wereld!"
    }
}
console.log(helloWorld())

// (b) Have your function default to returning English.

//function will default to english, please check line 158. Used logical operator or to include when no input is detected

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

const pluralizer = (num, string) => {
    if (num > 1) {
        return num + ` ${string}`
    } else if 
}

// pluralizer(5, "cat")
// // expected output: "5 cats"

// pluralizer(1, "dog")
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".