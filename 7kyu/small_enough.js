// * Small enough? - Beginner

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// * Pseudocode
// Takes in an array and a number - the limit
// Iterate through array checking that each item is not higher than the limit
// If they are all below or equal, return true, otherwise false

function smallEnough(a, limit){
    return a.find(i => i > limit) ? false : true;
}