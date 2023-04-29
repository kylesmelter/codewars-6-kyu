// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There are preloaded dictionary you can use, named NATO
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

function to_nato(words) {
    // First we'll start by turning all characters into their lowercase versions because
    // that's what the dictionary is using before using the .split() method to turn it into
    // an array to iterate over
    let lowerCase = words.toLowerCase().split('');
    // Next we'll create an empty placeholder array that we can use to help filter out
    // any empty spaces
    let array = [];
    // Then we'll use a for-loop to iterate over our 'lowercase' array, and use the .push()
    // method to add any value other than an empty space to our placeholder array, 'array'
    for(let i = 0; i <= lowerCase.length - 1; i++) {
      if(lowerCase[i] === ' ') {
        continue;
      } else {
        array.push(lowerCase[i]);
      };
    };
    // Then we'll create another empty array, 'result,' that will hold the final values
    let result = [];
    // Now we'll create a for-of loop to iterate over our placeholder array, 'array,'
    // and compare the current value to the keys contained in the dictionary, 'NATO,' and
    // if there's a match we'll push the value of that key to our 'result' array. And to 
    // account for any punctuation, we'll also use the .push() method to push any other value
    // to our 'result' array
    for(let key of array) {
      if(key in NATO) {
        result.push(NATO[key]);
      } else {
        result.push(key);
      };
    };
    // All we need to do now is return a joined version of our 'result' array!
    return result.join(' ');
};