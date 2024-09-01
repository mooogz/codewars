// Do I get a bonus?

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

// Pseudocode
// Take in an integer and a boolean
// If bonus === true, multiply salary x 10
// Return new salary prefixxed with \u00A3

// function bonusTime(salary, bonus) {
//     if (bonus === true) {
//         console.log(`£${salary * 10}`);
//     }
// }

bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`;