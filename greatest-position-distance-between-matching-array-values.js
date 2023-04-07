// DESCRIPTION:
// The goal of this Kata is to return the greatest distance of index positions between matching number values in an array or 0 if there are no matching values.

// Example: In an array with the values [0, 2, 1, 2, 4, 1] the greatest index distance is between the matching '1' values at index 2 and 5. Executing greatestDistance against this array would return 3. (i.e. 5 - 2)

// Here's the previous example in test form:

// Test.assertEquals(greatestDistance([0, 2, 1, 2, 4, 1]), 3);
// This is based on a Kata I had completed only to realize I has misread the instructions. I enjoyed solving the problem I thought it was asking me to complete so I thought I'd add a new Kata for others to enjoy. There are no tricks in this one, good luck!

var greatestDistance = function(data) {
    // Let's start by creating a variable, result, that will hold the value of the greatest
    // distance between index positions of the same value, and we'll have it initially set
    // to 0
    let result = 0;
    // Then we'll use a for-loop to iterate over the input array
    for(let i = 0; i <= data.length - 1; i++) {
      // Inside the loop we'll create a variable, difference, that will hold the value
      // of the current value's index, and subtract it from that value's last index in 
      // the array to give us the difference in indices  
      let difference = data.lastIndexOf(data[i]) - data.indexOf(data[i]);
      // Next is an if-conditional. If the value of 'difference' is > than the value
      // of 'result,' 'result' = 'difference'
      if(difference > result) {
        result = difference;
      };    
    };
    // All we need to do now is return the value of 'result'!
    return result;
};