// You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers 
//in descending order. Note that zero is an even number. If you have an empty array, you need to return it.

// For example:

// [5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

// odd numbers ascending:   [1, 3,       5   ]
// even numbers descending: [      8, 4,    2]

function sortArray(array) {
    // We'll start by creating an array of all the odd numbers in the input array, 'array'
    // using .filter()
    let odds = array.filter(x => x % 2 !== 0);
    // Then we'll do the same thing for all the even numbers
    let evens = array.filter(x => x % 2 === 0);
    // Next, we'll sort each of our new arrays according to the description (odds in ascending,
    // evens in descending)
    odds = odds.sort((a,b) => a - b);
    evens = evens.sort((a,b) => b - a);
    // Then we'll create an empty array, 'result,' to push our new values to
    let result = [];
    // Now we'll use a for-loop to iterate over the input array, 'array'
    for(let i = 0; i <= array.length - 1; i++) {
      // Inside the loop we'll have an if-conditional checking to see if the current value
      // is odd or even. If it's odd, we'll use .push() to add odds.shift() to our 'result'
      // array, and evens.shift() if it's even
      if(array[i] % 2 !== 0) {
        result.push(odds.shift());
      } else if(array[i] % 2 === 0) {
        result.push(evens.shift());
      } else {
        result.push(array[i]);
      };
    };
    // All we need to do now is return 'result!'
    return result;
};