// Task
// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer).
// x and y are non-zero integers, therefore the given point never lies on the axes.

// There are four quadrants:

// First quadrant, the quadrant in the top-right, contains all points with positive X and Y
// Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
// Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
// Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y

const quadrant = (x, y) => (x > 0 && y > 0) ? 1 : (x < 0 && y > 0) ? 2 : (x < 0 && y < 0) ? 3 : 4