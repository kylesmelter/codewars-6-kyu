// You are given an array of unique numbers. The numbers represent points. The higher the number the higher the points. 
// In the array [1,3,2] 3 is the highest point value so it gets 1st place. 2 is the second highest so it gets second place. 
// 1 is the 3rd highest so it gets 3rd place.

// Your task is to return an array giving each number its rank in the array.

// input // [1,3,2]
// output // [3,1,2]
// rankings([1,2,3,4,5]) // [5,4,3,2,1]
// rankings([3,4,1,2,5])//  [3,2,5,4,1]
// rankings([10,20,40,50,30]) //  [5, 4, 2, 1, 3]
// rankings([1, 10]) //   [2, 1]
// rankings([22, 33, 18, 9, 110, 4, 1, 88, 6, 50]) // [5, 4, 6, 7, 1, 9, 10, 2, 8, 3]

function rankings(arr){
    // We'll start by making a copy of the input, 'arr,' using .slice() so we don't 
    // mutate the original input
    let sliced = arr.slice();
    // Next, we'll use .sort() to sort our 'sliced' array from largest to smallest
    let sorted = sliced.sort((a,b) => b - a);
    // Then we'll create an empty array, 'holder,' so we can push values and their indexes
    // (ranks) to while iterating
    let holder = [];
    // Now we'll create a for-loop to iterate over our 'sorted' array
    for(let i = 0; i <= sorted.length - 1; i++) {
      // Inside the for-loop we'll use .push() to add the value and its index (rank) to our
      // 'holder' array
      holder.push([sorted[i], (i + 1)]);
    };
    // Next, we'll create a second empty array, 'result,' that will store the values and their
    // indexes (ranks) while iterating through the input, 'arr'
    let result = [];
    // We'll use another for-loop to iterate over the input, 'arr'
    for(let i = 0; i <= arr.length - 1; i++) {
      // Inside the loop we'll have another for-loop that will iterate through our 'holder'
      // array so we can compare the curent value of arr[i] with each value in 'holder'
      for(let j = 0; j <= holder.length - 1; j++) {
        // Inside this loop we'll use an if-conditional to see if the current value of a[i]
        // matches the first value of any of the subarrays in holder[j][0], and if there is a 
        // match we'll push the second value (holder[j][1]) in that subarray (which is the 
        // rank of that value) to 'result'
        if(arr[i] === holder[j][0]) {
          result.push(holder[j][1]);
        };
      };
    };
    // Now, we just need to return 'result!'
    return result;
};