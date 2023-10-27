// Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

// You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

// Examples

// 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
//                True       True       False      True       False
                   
//         --> ['a','b','d']
    
// 'DIGEST'--> ['D','I','E','T']
// All input will be valid strings of length > 0. Leading zeros in binary should not be counted.

function moreZeros(s){
    // We'll first create an array from the string parameter, 's.' This array will contain the binary
    // representations of each letter in the string
    let array = s.split('').map(x => x.charCodeAt(0).toString(2));
    // We'll now eliminate any duplicates from the array by creating a Set
    let set = new Set(array);
    // Now we'll turn the Set back into an array so we're able to iterate over it
    set = [...set];
    // Next, we'll create an empty array to push our values to
    let result = [];
    // Then we'll create a for-loop to iterate over our array
    for(let i = 0; i <= set.length - 1; i++) {
      // Inside the array we'll create an if-conditional that will check to see if the current value
      // contains more '0s' than '1s,' and if it does we'll convert the binary number back to its
      // alphabet representation and push it to our array, 'result'
      if(set[i].split('').filter(x => x === '0').length > set[i].split('').filter(x => x === '1').length) {
        result.push(String.fromCharCode(parseInt(set[i], 2)));
      };
    };
    // All we need to do now is return 'result!'
    return result;
};