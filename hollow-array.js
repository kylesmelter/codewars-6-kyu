// An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of 
// non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

// Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,
// else false.

function isHollow(x){
    // We'll start by creating 3 variables initially set to 0. 'Before' will be the count of numbers before any 0's appear, 
    //'zeroes' will be the count of 0's, and 'after' will be the count of numbers after the last 0 appears
    let before = 0;
    let zeroes = 0;
    let after = 0;
    // Next, we'll create a for-loop to iterate over the input array, 'x'
    for(let i = 0; i <= x.length - 1; i++) {
      // Inside the loop we'll use an if-conditional that will follow the rules in the description. If a number appears before 
      // any amount of 0's, we'll add 1 to 'before,' if a number === 0, we'll add 1 to 'zeroes,' and if a number appears after a 
      // 0, we'll add 1 to 'after'
      if(x[i] !== 0 && zeroes === 0) {
        before += 1;
      } else if(x[i] === 0) {
        zeroes += 1;
      } else if(x[i] !== 0 && zeroes > 0) {
        after += 1;
      };
    };
    // One final if-conditional will check if 'before' === 'after' (this checks to make sure there are an equal amount of numbers 
    // surrounding the zeroes), and if 'zeroes' >= 3, and if both of those conditions are true we'll return true. If not, we'll 
    // return false
    if(before === after && zeroes >= 3) {
      return true;
    } else {
      return false;
    };
};