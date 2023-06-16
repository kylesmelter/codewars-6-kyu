// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

function onlyDuplicates(str) {
    // We'll start by creating an emtpy string, 'result,' that we'll add our duplicates to
    let result = '';
    // Next, we'll iterate over input, 'str'
    for(let i = 0; i <= str.length - 1; i++) {
      // Inside the loop we'll have an if-conditional that will use the .lastIndexOf and
      // .indexOf() methods to see if the last index occurrence of the current value !==
      // the first index occurrence of the current value, and if that's true we'll add
      // the current value to 'result'
      if(str.lastIndexOf(str[i]) !== str.indexOf(str[i])) {
        result += str[i]
      };
    };
    // All we need to do now is return 'result!'
    return result;
};