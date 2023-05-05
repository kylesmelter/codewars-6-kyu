// DESCRIPTION:
// An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

// eg.

// Array [11,4,9,2,8] is odd-heavy,
// because its odd elements [11,9] are greater than all the even elements [4,2,8]

// Array [11,4,9,2,3,10] is not odd-heavy,
// because one of its even elements (10 from [4,2,10]) is greater than two of
// its odd elements (9 and 3 from [11,9,3])

// Array [] is not odd-heavy,
// because it does not contain any odd numbers

// Array [3] is odd-heavy,
// because it does not contain any even numbers.
// write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.

function isOddHeavy(n){
    // We'll start by comparing the length of the input to 0, and if the length === 0
    // we'll return false;
    if(n.length === 0) {
      return false;
    };
    // Next, we'll create 2 arrays using the .filter() method. 1 will be all the odd numbers, 
    // and the other will be all the even numbers. We'll also sort the 'odds' array in ascending
    // order using the .sort() method so we can compare the lowest odd number to all the even numbers
    let odds = n.filter(x => x % 2 !== 0).sort((a,b) => a - b);
    let evens = n.filter(x => x % 2 === 0);
    // Then we'll check if the length of the 'odds' array === 0, and if it does we'll return false
    if(odds.length === 0) {
      return false;
    };
    // After that we'll check if the length of the 'evens' array === 0, and if it does we'll return true
    if(evens.length === 0) {
      return true;
    };
    // If all our if-statements are passed, we'll create a for-loop to iterate over our 'evens' array
    // so we can compare our lowest value in our 'odds' array to every value in our 'evens' array
    for(let i = 0; i <= evens.length - 1; i++) {
      // Inside the loop we'll have an if-statement to check the lowest value in our 'odds' array to
      // every value in our 'evens' array. If the lowest odd value is < the even value, we'll return false
      if(odds[0] < evens[i]) {
        return false;
      };
    };
    // If all our checks are passed, we'll return true!
    return true;
};