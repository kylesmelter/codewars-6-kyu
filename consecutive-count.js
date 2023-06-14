// I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. 
// Return the length of the longest segment of consecutive keys in the given items.
// The items and the key will be either an integer or a string. If the key does not appear in the items, return 0
// Examples
// 90000, 0           -->  4
// "abcdaaadse", "a"  -->  3
// "abcdaaadse", "z"  -->  0
function getConsectiveItems(items, key){
    // We'll start by creating a variable, 'count,' that will keep track of the consecutive
    // appearances of 'key'
    let count = 0;
    // Next, we'll create a variable, 'value,' that will keep track of the largest consecutive
    // number of appearances of 'key'
    let value = 0;
    // Then, we'll make sure both 'items' and 'key' are strings
    items = items.toString();
    key = key.toString();
    // After that, we'll create a for-loop to iterate over the input, 'items'
    for(let i = 0; i <= items.length - 1; i++) {
      // Inside the loop we'll have an if-conditional checking to see if the current value
      // is === 'key,' and if it is we'll add 1 to 'count.' If it's not, we'll reset 'count'
      // back to 0
      if(items[i] === key) {
        count += 1;
      } else {
        count = 0;
      };
      // After checking to see if the current value matches 'key,' we'll check to see if 'count'
      // is > 'value,' and if it is we'll set 'value' equal to 'count'
      if(count > value) {
        value = count;
      };
    };
    // All we need to do now is return 'value!'
    return value;
  };