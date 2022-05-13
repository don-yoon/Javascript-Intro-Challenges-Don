// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Consider the variable:

// var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.

// Write the code that will add "granola" to the end of array without altering the original array.

// Write the code that will return a subset of the array containing only "chips" and "dip".

// Write the code that will add "beans" to the "chips" and "dip" array.

// Consider the variable:

// var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.

// Write the code that will add the number 12 to the end of the array.

// Write the code that will remove the first number from the array.

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

// Consider the variable:

// var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.

// Write the code that finds the index of the last appearance of the number 2.

// Write the code that returns the number at the third index.

// Consider the variable:

var characters = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the characters array together into a string.

// console.log(characters.join(""))
// console.log(characters)

// var stringChar = characters.join("")
// console.log(stringChar)

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

console.log(characters)
var charsReversed = characters.reverse() // mutator
console.log(charsReversed)
console.log(characters)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.

console.log(charsReversed.join("*"))
console.log(charsReversed) // accesssor

// Write the code that brings all the letters in the charsReversed array together into a string without separators.

console.log(charsReversed.join(""))

// Create two arrays consisting of three first names of your cohort members in each.

var learnStudentsA = ["CJ", "Sean", "Valerie"]
var learnStudentsB = ["Don", "Michael", "Nicholas"]

// Write the code that sorts the names in alphabetical order.

console.log(learnStudentsA.sort()) //mutator
console.log(learnStudentsB.sort())


// Write the code that sorts the names in reverse alphabetical order.

console.log(learnStudentsA.reverse()) //mutator
console.log(learnStudentsB.reverse())

// Write the code that sorts all the names in alphabetical order in a single array.

var allLearnStudents = learnStudentsA.concat(learnStudentsB)
allLearnStudents.sort()
console.log(allLearnStudents)

// Consider the variables:

 var numbers = [42, 221, 71, 7, 18, 87]
 var oddIndexes = []

// Write the code that logs the values from the numbers array that are at odd indexes.

//i = 1, 3, 5
console.log(numbers[1])
console.log(numbers[3])
console.log(numbers[5])


// Write the code that adds the values from odd indexes into the oddIndexes array.

console.log(oddIndexes =[numbers[1], numbers[3], numbers[5]])