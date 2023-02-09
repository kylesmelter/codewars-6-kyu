// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    let occurrences = {};
  
  for(let i = 0; i <= arr.length - 1; i++) {
    let value = arr[i];
    
    occurrences[value] = occurrences[value] + 1 || 1;
  };
  
  console.log(occurrences);
  
  let valuesArray = Object.values(occurrences);
  
  let highestValue = Math.max.apply(Math, valuesArray);

  let keysArray = [];
  
  for(let key in occurrences) {
    if(occurrences[key] === highestValue) {
      keysArray.push(key);
    };
  };
  
  keysArray = keysArray.map(Number);
  
  return Math.max.apply(Math, keysArray);
};