// Cat years, Dog years
// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// Pseudocode
// Takes in an integer of how many human years the cat/dog has lived
// Cat - First year: Add 15. Second year: Add 9. After, add 4 every year.
// Dog - First year: Add 15. Second year: Add 9. After, add 5 every year.

let humanYearsCatYearsDogYears = function(humanYears) {
    let arr = [];
    let catYears = 0;
    let dogYears = 0;
    if (humanYears < 2) {
        catYears += 15;
        dogYears += 15;
        arr.push(humanYears, catYears, dogYears);
    } else {
        catYears = (15 + 9) + 4 * (humanYears - 2);
        dogYears = (15 + 9) + 5 * (humanYears - 2);
        arr.push(humanYears, catYears, dogYears);
    }
    return arr;
  }