// DESCRIPTION:
// Build a function findNestedMaximum that finds the maximum value in an array containing both numbers and nested arrays. The nested arrays themselves can contain both numbers and further nested arrays. Some of the arrays may be empty but at least one number will be present amongst all the arrays.

// For example, findNestedMaximum([4, -3, [10], [[-5, 6], 18]]) should return 18.

function findNestedMaximum(arr) {
    // Let's start by creating an array that takes the input array and flattens it to
    // infinity levels deep to get rid of all nested arrays
    let array = arr.flat(Infinity);
    // Then we'll use Math,max.apply to find the largest value and return it
    return Math.max.apply(Math, array);
};