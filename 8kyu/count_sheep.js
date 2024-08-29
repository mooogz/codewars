// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// Pseudocode
// num is the amount of sheep to count
// repeat the string 'num sheep...' num amount of times

var countSheep = function (num) {
    let murmur = '';
    for (let i=1; i <= num; i++) {
      murmur += `${i} sheep...`;
    }
  return murmur;
}