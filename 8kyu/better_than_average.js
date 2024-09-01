// How good are you really?

// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

// Pseudocode
// Takes in two parameters:
//      an array of integers representing other students' test points & a single number (your points)
// Find the average of the array and compare to your points
// Return true if your points are higher than the class average

function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((sum, current) => sum + current, 0) / classPoints.length < yourPoints;
}