// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// Pseudocode
// Takes in two integers where b is always larger than a
// Return an array with a at the start, b at the end, and integers in between

function between(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
  }