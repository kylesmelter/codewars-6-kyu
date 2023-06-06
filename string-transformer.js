// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
    // We'll start by splitting the string into an array of individual letters and spaces
    let array = str.split('');
    // Next, we'll create an empty array, 'result,' to push our values to
    let result = [];
    // Then, we'll create a for-loop so we can iterate over our newly created array, 'array'
    for(let i = 0; i <= array.length - 1; i++) {
      // Inside the loop we'll have an if-conditional checking to see if the current value
      // is uppercase, and if it is we'll use .push() to add a lowercase version of it to our
      // 'result' array. If the current value is lowercase, we'll add an uppercase version 
      // of it to 'result' array. And if the current value is neither of those, we'll simply
      // use .push() to add it to our 'result' array
      if(array[i] === array[i].toUpperCase()) {
        result.push(array[i].toLowerCase());
      } else if(array[i] === array[i].toLowerCase()) {
        result.push(array[i].toUpperCase());
      } else {
        result.push(array[i]);
      };
    };
  // Now we'll use .join() to turn our 'result' array back into a string of individual 
  // words
  result = result.join('');
  // Now we can use .split() to turn 'result' back into an array so we can reverse the order
  // of the words before we use .join() to transform it back into a string
  return result.split(' ').reverse().join(' ');
};