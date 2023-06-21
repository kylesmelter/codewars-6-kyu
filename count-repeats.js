// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

// Note: This includes any characters

// Examples
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1

function countRepeats(str) {
    // We'll start by creating an empty array, 'result,' that we can push our values to
    let result = [];
    // Next, we'll create a for-loop to iterate over the input, 'str'
    for(let i = 0; i <= str.length - 1; i++) {
      // Inside the loop we'll have an if-conditional checking to see if the current value
      // !== the previous value, and if that's true we'll use .push() to add the current value
      // to 'result'
      if(str[i] !== str[i - 1]) {
        result.push(str[i]);
      };
    };
    // All we need to do now is return the difference in length between the input, 'str,'
    // and our 'result' array
    return str.length - result.length;
};