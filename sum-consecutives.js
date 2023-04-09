// DESCRIPTION:
// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

// Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

// Same meaning: 1 == 1

// 1 != -1

// #Examples:

// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

// """So as you can see sum of consecutives 1 is 1 
// sum of 3 consecutives 4 is 12 
// sum of 0... and sum of 2 
// consecutives 3 is 6 ..."""

// [1,1,7,7,3] # should return [2,14,3]
// [-5,-5,7,7,12,0] # should return [-10,14,12,0]

function sumConsecutives(s) {
    // First we'll set up a counter to keep count of the sum of consecutive numbers
    let count = 0;
    // Next we'll create an empty array to push our values to
    let result = [];
    // Then we'll create a for-loop to iterate over the input array, s
    for(let i = 0; i <= s.length - 1; i++) {
      // Inside the loop we'll have an if-conditional to check if the current value of the
      // loop === the next value, and if it does we'll add the value of the current value
      // to our counter, count
      if(s[i] === s[i + 1]) {
        count += s[i];
      } else {
      // If the current value !== the next value, we'll still add the current value to our
      // counter, count. This will still make sure the last value in a string of consecutive
      // values still get added to the counter, count, but if even it's not in a string of
      // consecutive values, count will just be equal to that value before we push it to our
      // array, result. After pushing the value of 'count' to our array, we'll reset it back
      // to 0
        count += s[i];
        result.push(count);
        count = 0;
      };
    };
    // Now all we need to do is return 'result!'
    return result;
};