// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Pseudocode
// Take in a string
// Turn string into array
// Sort by string length
// Return length of first index

function findShort(s){
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
}

findShort("bitcoin take over the world maybe who knows perhaps");