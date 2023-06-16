// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you 
//are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];
// write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of 
//all characters in their first names, the result will be an odd number:

// [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]
// Explanation of the above:

// Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
// Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
// Notes:

// Preserve the order of the original list.
// Return an empty array [] if there is no developer with an "odd" name.
// The input array and first names will always be valid and formatted as in the example above.

function findOddNames(list) {
    // We'll first create an empty array, 'result,' so we can push our developers whose
    // names meet the criteria to
    let result = [];
    
    // Next, we'll create a for-loop to iterate over the input, 'list'
    for(let i = 0; i <= list.length - 1; i++) {
      // Inside the loop we'll create a variable, 'count,' that will keep a running
      // sum of the character code values in each developer's first name
      let count = 0;
      // To grab the value of each character in each developer's first name, we'll
      // split their first name into an array, and then we'll use .map() so we're able
      // to look at each individual character, and then we'll use .charCodeAt() to grab
      // its numerical value and add that value to 'count'
      let nameChars = list[i].firstName.split('').map(x => {
        count += x.charCodeAt();
      });
      // Once we've iterated through the first name, we'll have an if-conditional to see
      // if the value of 'count' is odd, and if it is we'll push the current value of
      // 'list' to our 'result' array
      if(count % 2 !== 0) {
        result.push(list[i]);
      };
    };
    // Lastly, we'll have one more if-conditional at the end checking to see if the length
    // of 'result' === 0, and if it is we'll return '[].' Otherwise, we'll return 'result!'
    if(result.length === 0) {
      return [];
    } else {
      return result;
    };
};