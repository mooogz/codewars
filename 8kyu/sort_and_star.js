// Sort and Star
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// Pseudocode
// Takes in an array of any number of strings
// Iterate through the array and sort the strings in alphabetical order based on ASCII values
// Return the first alphabetical value as a string with *** between each letter

function twoSort(s) {
    return s.sort()[0].split('').join('***');
}