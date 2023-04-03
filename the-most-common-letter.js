// DESCRIPTION:
// Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

// If such letters are two or more, choose the one that appears in the string( earlier.

// For example:

// ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
// ('real talk bro', 'n') => 'neal talk bno'
// ('great job go ahead', 'k') => 'grekt job go khekd'

function replaceCommon(string, letter) {
    // We'll start by creating a new variable, string2, that will be a joined version
    // of the input string so we can eliminate any spaces
    let string2 = string.split(' ').join('');
    // Next we'll create a cache object that will keep track of the count of each
    // letter
    let letters = {};
    // Then we'll use a for-loop to iterate over our string2 variable
    for(let i = 0; i <= string2.length - 1; i++) {
    // Inside the loop we'll create a variable, value, that will hold the current
    // value of i 
      let value = string2[i];
    // Next we'll add one to the count of each letter if it already exists in our
    // cache, letters, or we'll set the count to one for that letter if it's not
    // already in our cache  
      letters[value] = letters[value] + 1 || 1;
    };
    // Then we'll create an empty array, holder, that we'll push our key-value pairs
    // to as we iterate over our cache object
    let holder = [];
    // Here we'll iterate over our cache object and push the key-value pairs to our
    // array, holder, because arrays are easier to work with
    for(let key in letters) {
      holder.push([key, letters[key]]);
    };
    // Once we have all the key-value pairs as arrays within our array, holder, we'll
    // sort them based off the count in descending order using the .sort() method
    let sorted = holder.sort((a,b) => b[1] - a[1]);
    // Then we'll create a value, replaced, that will hold the letter with the highest count
    let replaced = sorted[0][0];
    // Next we'll create a variable, result, that will be an empty string we can add
    // the letters of our new string to
    let result = '';
    // Then we'll use another for-loop to iterate over the input string to help create
    // our new string, result.
    for(let i = 0; i <= string.length - 1; i++) {
    // Inside the loop we'll use an if-conditional to check if the current value
    // is equal to the value of 'replaced,' and if it is, we'll add the input letter
    // to 'result' instead of the current value. If the current value does not equal
    // 'replaced,' then we'll simply add the current value to 'result'
      if(string[i] === replaced) {
        result += letter;
      } else {
        result += string[i];
      };
    };
    // All we need to do now is return 'result!'
    return result;
};