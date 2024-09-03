// Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// Pseudocode
// takes in a string
// split string into an array of letters
// reverse array of letters
// join back into string, so string is in reverse order
// split the string back into an array of words
// reverse the words back to correct order
// join back to string

function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' '); 
}