// Divide and Conquer

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// Pseudocode
// Takes in an array containing numbers and strings
// Add the numbers
// Convert strings to numbers and subtract the total from the total of numbers

function divCon(x){
    return x.filter(i => typeof i === 'number').reduce((a, b) => a + b, 0) - x.filter(i => typeof i === 'string').map(i=> Number(i)).reduce((a, b) => a + b);
}

// solution with clear variables, easier to read
// function divCon(x){
//     let numTotal = x.filter(i => typeof i === 'number').reduce((a, b) => a + b, 0);
//     let stringTotal = x.filter(i => typeof i === 'string').map(i=> Number(i)).reduce((a, b) => a + b);
//     return numTotal - stringTotal;
// }