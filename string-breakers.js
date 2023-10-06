// I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

// Example: 

// N = 5;

// String = "This is an example string";

// Return value:
// Thisi
// sanex
// ample
// strin
// g

// Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'

function stringBreakers(n, string) {
    // We'll reset the parameter, 'string's,' value to a string with 0 spaces
    // using .split(' ') and .join('')
    string = string.split(' ').join('');
    
    // Next, we'll create an empty array, 'result,' to push our values to while
    // looping
    let result = [];
    
    // Now, we'll create a for-loop so we can iterate over 'string'
    for(let i = 0; i <= string.length - 1; i += n) {
      // Inside the loop, we'll use .push() to add segments of 'n' to our 
      // 'result' array
      result.push(string.slice(i, i + n));
    };
    
    // Now all we need to do is use .join() with backticks!
    return result.join(`\n`);
};