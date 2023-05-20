// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

// Task:
// Give you a number array(element range:1-99, array length range: 6-40), please do a "Symmetric Sort" with it.

// rule: sort the number, the first smallest number at the left side, the second smaller number at the right side, and so on...

// Example:
// example1:                        example2:

// array=[1,2,3,4,5,6,7,8,9]        array=[1,1,2,2,3,3,4,4,5]

// after sort, should return:       after sort, should return:

//       [1,3,5,7,9,8,6,4,2]              [1,2,3,4,5,4,3,2,1]

function sc(array){
    // Let's start by creating two empty arrays, 'frontHalf' and 'backHalf,' that we will
    // merge at the end
    let frontHalf = [];
    let backHalf = [];
    // Next, we'll sort the input array from smallest to largest using .sort()
    let sorted = array.sort((a,b) => a - b);
    // Then we'll use a for-loop to iterate over our sorted array, 'sorted'
    for(let i = 0; i <= sorted.length - 1; i++) {
      // Inside the loop we'll have an if-conditional to check if the value of i is even
      // or odd. If it's even we'll use the .push() method to add it to our 'frontHalf'
      // array, and if it's odd we'll the .unshift() method to add it to our 'backHalf'
      // array
      if(i % 2 === 0) {
        frontHalf.push(sorted[i]);
      } else {
        backHalf.unshift(sorted[i]);
      };
    };
    // Finally, we'll use the spread operator to merge our two arrays and return it!
    return [...frontHalf, ...backHalf];
};