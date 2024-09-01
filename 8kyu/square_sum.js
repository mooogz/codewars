// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.

// Pseudocode:
// Takes in an array of numbers
// Iterate through the numbers, squaring each
// Return the result of adding all the squared numbers together

function squareSum(numbers){
    return numbers.map(n => n * n).reduce((sum, current) => sum + current, 0)
}

