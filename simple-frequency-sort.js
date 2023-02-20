// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.
// More examples in test cases.

// Good luck!

// Please also try Simple time difference

function solve(arr){
    let cache = {};
    
    for(let i = 0; i <= arr.length - 1; i++) {
      let current = arr[i];
      
      cache[current] = cache[current] + 1 || 1;
    }
    
    let sorted = arr.map(current => [current, cache[current]])
    
    sorted = sorted.sort((a,b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      return b[1] - a[1];
    });
    return sorted.map(s => s[0]);
};