// DESCRIPTION:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary 
// representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    // We'll start by using .toString(2) on the input 'n,' which will create a binary representation of the number
    let binary = n.toString(2);
    // Next, we'll create a variable, 'count,' that will keep track of the number of "1's"
    let count = 0;
    // Then, we'll create a for-loop to iterate over 'binary'
    for(let i = 0; i <= binary.length - 1; i++) {
      // Inside the loop we'll have an if-conditional checking to see if the current value === '1,' and if it does we'll add 1 
      // to 'count'
      if(binary[i] === '1') {
        count += 1;
      };
    };
    // All we need to do now is return 'count!'
    return count;
};