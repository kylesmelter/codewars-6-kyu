// Find the first character that repeats in a String and return that character.

// firstDup('tweet') => 't'
// firstDup('like') => undefined
// This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

// Another example:

// In 'translator' you should return 't', not 'a'.

// v      v  
// translator
//   ^   ^
// While second 'a' appears before second 't', the first 't' is before the first 'a'.

function firstDup (s) {
    // We'll start by using a for-loop to iterate over the input, 's'
    for(let i = 0; i <= s.length - 1; i++) {
      // Inside the loop we'll have an if-conditional that will use .indexOf() and 
      // .lastIndexOf() to check if the current value appears later on in the string,
      // and if it does we'll return that value
      if(s.indexOf(s[i]) !== s.lastIndexOf(s[i])) {
        return s[i];
      };
    };
    // At the end, we'll return 'undefined' in case our if-statement doesn't return
    // anything
    return undefined;
};