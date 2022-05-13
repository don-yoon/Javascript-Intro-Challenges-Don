// Challenges
// Create a for loop that logs each number from 1 - 20.

for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// Create a for loop that logs every other number from 1 - 20.

for (let i = 1; i <= 20; i+=2) {
    console.log(i)
}

// Create a for loop that logs the result of each number from 1 - 20 tripled.

for (let i = 1; i <= 20; i++) {
    console.log(i * 3)
}

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    } else {
        console.log("odd")
    }
}

// 6 % 2 = 0
// to find an even number using %(modulo) something % 2 must equal 0
// 6 % 4 means what is the remainder after doing 6 / 4?

// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc

// Consider this variable:

const nums = [3, 57, -9, 20, 67]

// Create the code that will log the largest number from the array.

// we need it to check the value in index 3 and compare to value of the next index which is 57
// and then we want it to compare those values and HOLD the larger one until it goes through the entire array

var largestNumber = nums[0];

for (let i = 0; i < nums.length; i++) {
    if (largestNumber < nums[i+1]) {
            largestNumber = nums[i+1]
    }
}
console.log(largestNumber)

// Create the code that will log the smallest number from the array.

var smallestNum = nums[0]

for (let i = 0; i < nums.length; i++) {
    if (smallestNum > nums[i +1]) {
            smallestNum = nums[i+1]
    }
}
console.log(smallestNum)

// Create the code that will log the remainder of each number when divided by 2.

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] % 2)
}

// Expected output: 1, 1, -1, 0, 1
// Consider this variable:

const myString = "learn student"

// Create the code that will log the number of times the letter "e" occurs in the string.
var count = 0
var myStringArray = myString.split("") // accessor
console.log(myStringArray)

for (let i = 0; i < myStringArray.length; i++) {
    if(myStringArray[i] === "e" ){
        //console.log(i, myStringArray[i])
        count = count + 1
        //console.log(count)
    }
}
console.log(count)

// Create the code that will log every other character in the string.

for (let i = 0; i < myStringArray.length; i = i + 2){
    
        console.log(myStringArray[i])
    
}

// STRETCH Challenges

// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.

for (i = 5; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i, "even")
    } else {
        console.log(i, "odd")
     }
 }

// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc

// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.

for(i = 0; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
    } else if (i % 3 === 0) {
        console.log("fizz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(i)
    }
}

//ORDER MATTERS WATCH WHICH CONDITIONAL STATEMENT THE LOOP HITS FIRST


// for(i = 0; i <= 100; i++){
//     if (i % 3 === 0) {
//         console.log("fizz")
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzbuzz")
//     } else if (i % 5 === 0) {
//         console.log("buzz")
//     } else {
//         console.log(i)
//     }
// }



// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc