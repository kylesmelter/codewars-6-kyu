// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

function isIntArray(arr) {
    // We'll check if the input's type is no an object or if the input == null,
    // and if it does we'll return false
    if (typeof(arr) !== 'object'|| arr == null) {
        return false;
    };
      
    // Then we'll create a for-loop to iterate over the input  
    for (var i = 0; i < arr.length; i++)
      // Inside the loop we'll check if the current value does not equal an integer,
      // and if that's true we'll return false  
      if (arr[i] !== parseInt(arr[i])) {
        return false;
      };
    // If we make it to the end, we'll return true!  
    return true;
};