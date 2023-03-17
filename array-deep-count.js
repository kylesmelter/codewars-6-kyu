// DESCRIPTION:
// You are given an array. Complete the function that returns the number of ALL elements within an array, 
// including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.

function deepCount(array) {
    // Let's start by creating a variable, count, that will count the length of our input array
    let count = array.length;
    
    // Next we'll create a for loop that will loop through our input array
    for (const element of array) {
      // If the current value of the array while looping is an array, we'll run our function again, but this
      // time the input parameter will be the array we encountered while looping. Our count parameter will also
      // be updated by adding the length of the new input array  
      if (Array.isArray(element)) {
        count += deepCount(element);
      };
    };
    // All we need to do now is return our count variable!
    return count;
};