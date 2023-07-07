// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive 
// integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n. If it is 
// the case we will return k, if not return -1. Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p){
    // We'll start by creating a variable, 'count,' that will keep a running total of the sum of our powered numbers
    let count = 0;
    // Next, we'll turn the input, 'n,' into an array of numbers using .toString(), .split(), and .map()
    let array = n.toString().split('').map(Number);
    // Once we have our array of numbers created, we'll iterate over it using a for-loop
    for(let i = 0; i <= array.length - 1; i++) {
      // To find the value we're going to add to 'count,' we'll use Math.pow() to calculate the current value of the loop to the 
      // power of 'p'
      count += Math.pow(array[i], p);
      // We'll then set 'p' = 'p' + 1 so the next iteration will have the new value of 'p'
      p = p + 1;
    };
    // Now we'll use an if-conditional to see if 'count' is divisible by 'n', and if it is we'll return 'count' / n. If not, 
    // we'll return -1
    if(count % n === 0) {
      return count / n;
    } else {
      return -1;
    };
  };