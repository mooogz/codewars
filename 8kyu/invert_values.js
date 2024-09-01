// Invert values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.

// Pseudocode
// Takes in array of positive and/or negative numbers
// Iterate through the array, changing each value to its opposite value
// Return the inverted array

function invert(array) {
    console.log(array.map(i => i * -1 ))
 }

 invert([1, -2, 3, -4, 5])