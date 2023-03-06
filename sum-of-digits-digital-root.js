// DESCRIPTION:
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a 
// single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
  // We'll start by turning our number into a string so we can measure its length
  let str = n.toString();
  // Then we'll create a while loop that will run until the length of our number string is equal to 1
  while(str.length > 1) {
    // While looping, we'll split our string into an array of numbers so we're able to use the reduce method
    // before we turn the result back into a string
      str = str.split('').map(Number).reduce((acc, c) => acc + c, 0).toString();
  };
  // Now we just need to return the number version of our string!
  return Number(str);
};