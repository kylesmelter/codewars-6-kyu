// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

// Examples
// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]

// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

// [1, 23, 3, 4, 7] should return [[1, 3]]

// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]

function twosDifference(input){
    // We'll first use .sort() to sort the numbers from smallest to largest
    let sorted = input.sort((a,b) => a - b);
    // Next, we'll create an empty array to add our values to
    let result = [];
    // Then we'll create a for-loop to iterate over our newly created 'sorted' array
    for(let i = 0; i <= sorted.length - 1; i++) {
      // Inside the loop we'll have an if-conditional that will use the .includes() method
      // to check if the current value + 2 exists within 'sorted,' and if it does we'll
      // use .push() to add the current value and the current value + 2 to our 'result' array
      if(sorted.includes(sorted[i] + 2)) {
        result.push([sorted[i], sorted[i] + 2])
      };
    };
    // All we need to do now is return 'result!'
    return result;
};