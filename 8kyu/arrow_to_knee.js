// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// Test cases
// Test.assertEquals(ArrowFunc([84,101,115,116]), 'Test', 'Convert those numbers to letters')
// Test.assertEquals(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]), 'FUS ROH DAH', 'Keep it up!')

var ArrowFunc = function(arr) {
    return arr.map(i => String.fromCharCode(i)).join('');
}