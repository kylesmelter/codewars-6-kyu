// We want to create a function, which returns an array of functions, which return their index in the array. 
// For better understanding, here an example:

// var callbacks = createFunctions(5); // create an array, containing 5 functions

// callbacks[0](); // must return 0
// callbacks[3](); // must return 3
// We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. 
// Can you spot, what's wrong with it? A test fixture is also available

function createFunctions(n) {
    // We'll first create an empty array, 'result,' to push our values to
    let result = [];
    // We'll then have a for-loop to count up to the input, 'n'
    for (let i = 0; i < n; i++) {
      // Inside the loop we'll push a new function using the value of i
      result.push(() => i);
    };
    // All we need to do now is return 'result!'
    return result;
};