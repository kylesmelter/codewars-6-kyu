// For a given DNA genetic code represented by a string, count the number of times the letters A (adenine), C (cytosine), G (guanine) and T (thymine) appears and return and object.

// The input string may contain both upper and lower case characters.

// For example:


// var genCode = 'aCCggT';

// getCountedNucleotides(genCode); // return {A: 1, C: 2, G: 2, T: 1}
// Also, should a nucleotide type not be present within the string, it should still be present in the object returned with it's value as 0. For example:


// var genCode = 'ACG';

// getCountedNucleotides(genCode); // return {A: 1, C: 1, G: 1, T: 0}

function getCountedNucleotides(genCode){
    // We'll start by creating an object containing each nucleotide value as keys with their
    // initial values set to 0
    let result = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    };
    // Next, we'll turn every value in the input, 'genCode,' to uppercase so they match the
    // keys in our 'result' object
    let uppercase = genCode.toUpperCase();
    // Now we'll use a for-loop to iterate over 'uppercase'
    for(let i = 0; i <= uppercase.length - 1; i++) {
      // Inside the loop we'll create a variable, 'current,' that will hold the current
      // value of the loop
      let current = uppercase[i];
      // Then we'll add 1 to the value for the applicable key that === 'current,' if that
      // value is > 0, or we'll make the value 1 if the value is 0
      result[current] = result[current] + 1 || 1;
    };
    // Now we just need to return 'result!'
    return result;
};