// One of the first chain emails I ever received was about a supposed Cambridge University study that suggests your brain can read words no matter what order the letters are in, as long as the first and last letters of each word are correct.

// Your task is to create a function that can take any string and randomly jumble the letters within each word while leaving the first and last letters of the word in place.

// For example,

// mixwords('Winter is coming') // returns 'Wntier is cminog' or 'Wtiner is conimg'
// mixwords('Hey, friends!') // returns 'Hey, fierdns!' or 'Hey, fernids!'
// All punctuation should remain in place
// Words smaller than 3 letters should not change
// Letters must be randomly moved (and so calling the function multiple times with the same string should return different values
// Parameters that are not strings should return undefined
// The tests do the following things to ensure a valid string is returned:

// Check that the string returned is not equal to the string passed (you may have to revalidate the solution if your function randomly returns the same string)
// Check that first and last letters of words remain in place
// Check that punctuation remains in place
// Checks string length remains the same
// Checks the function returns undefined for non-strings
// Checks that word interiors (the letters between the first and last) maintain the same letters, albeit in a different order
// Checks that letters are randomly assigned.

function mixwords(str){
    // We'll first check if the type of the parameter, 'str,' is a string, and 
    // if it's not we'll return undefined
    if (typeof str !== 'string') {
        return undefined;
    };

    // Next, we'll create an array, 'dividedString,' so we can iterate through the
    // string by individual words 
    let dividedString = str.split(' ');

    // Then we'll create an array, 'array,' that we can use to push our new words to
    let array = [];

    // Now we'll create a for-loop to iterate over our 'dividedString' array
    for (let i = 0; i < dividedString.length; i++) {
      // Inside the loop we'll have an if-conditional checking the length of the
      // word and performing the applicable actions  
      if (dividedString[i].length <= 3) {
        array.push(dividedString[i]);
      } else if (dividedString[i].length > 3) {
        let mixed = dividedString[i].split('').slice(1, dividedString[i].length - 1).sort(() => Math.random() - 0.5).join('');
        let combine = dividedString[i][0] + mixed + dividedString[i].slice(-1);
        array.push(combine);
      };
    };
    // Now we'll use .join(' ') to turn the array back into a string and return it!
    return array.join(' ');
};