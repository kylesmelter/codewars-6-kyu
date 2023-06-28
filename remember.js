// Write a function that takes a string and returns an array of the repeated characters (letters, numbers, whitespace) in the string.

// If a charater is repeated more than once, only show it once in the result array.

// Characters should be shown by the order of their first repetition. Note that this may be different from the order of first 
// appearance of the character. Characters are case sensitive. For F# return a "char list"

// Examples:
// remember("apple") => returns ["p"]
// remember("apPle") => returns []          // no repeats, "p" != "P"
// remember("pippi") => returns ["p","i"]   // show "p" only once
// remember('Pippi') => returns ["p","i"]   // "p" is repeated first

function remember(str) {
    // We'll start by creating two empty arrays, one for singles, 'array,' and one for  multiples, 'doubles'
    let array = [];
    let doubles = [];
    // Then we'll create a for-loop to iterate over the input, 'str'
    for(let i = 0; i <= str.length - 1; i++) {
      // Inside the loop we'll have an if-conditional checking to see if the current value is included in 'array' AND not included 
      // in 'doubles.' If that's true we'll push the current value to 'doubles'
      if(array.includes(str[i]) && !doubles.includes(str[i])) {
        doubles.push(str[i]);
      };
      // We'll also push the current value to 'array,' so our if-conditional will work correctly
      array.push(str[i]);
    };
    // All we need to do now is return 'doubles!'
    return doubles;
  };