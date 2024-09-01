// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// Pseudocode
// Take in a name represented by a string containing two words
// Get the beginning letter of the first name and beginning letter of last name
// Return a new string with the two letters separated by a .

function abbrevName(name){
    let split = name.split(' ');
    return (`${split[0][0]}.${split[1][0]}`.toUpperCase());
}