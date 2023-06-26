// A collatz sequence, starting with a positive integern, is found by repeatedly applying the following function to n until n == 1 :
// If n is even, n = n / 2. If n is odd, n = (n * 3) + 1 

// Create a function collatz that returns a collatz sequence string starting with the positive integer argument passed into the 
// function, in the following form:

// "X0->X1->...->XN"; Input: 4 Output: "4->2->1"; Input: 3 Output: "3->10->5->16->8->4->2->1"

function collatz(n){
    // To start, we'll have an if-conditional checking to see if the the input, 'n,' === 1, and if it does we'll return '1'
    if(n === 1) {
      return '1';
    };
    // We'll then create a variable, 'result,' which we'll be a string with an initial value of the input, 'n,' in string form 
    // followed by '->'
    let result = `${n}->`;
    // Next, we'll create a while-loop because we don't know how many iterations it will take to get 'n' to 1
    while(n !== 1) {
      // Inside the loop we'll have an if-conditional checking to see if the value of 'n' is even or odd. If even, we'll divide it 
      // by 2. If odd, we'll multiply 'n' by 3 and then add 1
      if(n % 2 === 0) {
        n = n / 2;
      } else {
        n = (3 * n) + 1;
      };
      // We'll then have another if-conditional that will check to see if 'n' === 1. If it does, we'll add '1' to 'result.' 
      // If it doesn't, we'll add 'n' + '->' to 'result'
      if(n === 1) {
        result += '1';
      } else {
        result += `${n}->`;
      };
    };
    // All we do now is return 'result!'
    return result;
  };