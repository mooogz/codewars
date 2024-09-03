// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Pseudocode
// Takes in a string
// Turn string into an array and filter
// Return true if array lengths match

function XO(str) {
    let x = str.split('').filter(i => i === 'x' || i === 'X');
    let o = str.split('').filter(i => i === 'o' || i === 'O');
    return x.length === o.length;
}