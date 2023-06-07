// You have to sort the inner content of every word of a string in descending order.

// The inner content is the content of a word without first and the last char.

// Some examples:

// "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me"        -->  "wiat for me"
// "this kata is easy"  -->  "tihs ktaa is esay"
// Words are made up of lowercase letters.

// The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.

function sortTheInnerContent(words) {
    // First, we'll use .split() to turn the input, 'words,' into an array of separate words
    let array = words.split(' ');
    // Next, we'll create an empty array, 'result,' to push our values to
    let result = [];
    // Then, we'll use a for-loop to iterate over our newly created array, 'array'
    for(let i = 0; i <= array.length - 1; i++) {
      // Inside the loop we'll have an if-conditional checking to see if the length of the
      // current value is > 3
      if(array[i].length > 3) {
        // We'll use .slice() to grab the first and last letters in the word
        let first = array[i].slice(0, 1);
        let last = array[i].slice(-1);
        // We'll also use .slice() to grab the middle of the word before using .split() so we're able to use
        // .sort() along with .localeCompare() in order to sort the letters in descending order before
        // using .push() to add it to our 'result' array
        let middle = array[i].slice(1, -1).split('').sort((a,b) => b.toString().localeCompare(a.toString())).join('');
        result.push(first + middle + last);
      } else {
        // If the length of the current value is < 3 we can just use .push() to add it to 'result'
        result.push(array[i]);
      };
    };
    // All that's left to do is use .join() on 'result' to turn it into a string and return it!
    return result.join(' ');
};