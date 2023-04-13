// This Kata is intended as a small challenge for my students

// Your family runs a shop and have just brought a Scrolling Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get some more business.

// The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates movement.

// You're father is far too busy with the business to worry about such details, so, naturally, he's making you come up with the text strings.

// Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.

// rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
// Note: The original string should be included in the output array The order matters. Each element of the output array should be the rotated version of the previous element. The output array SHOULD be the same length as the input string The function should return an emptry array with a 0 length string, '', as input

function rotate(str){
    // We'll start by creating an if-conditional to check if the length of the input
    // string === 0, and if it does we'll return an empty array
      if(str.length === 0) {
        return [];
      };
      // If the input string's length > 0, we'll create an empty array, result, that we
      // can push our values to
      let result = [];
      // Next we'll create a while-loop that will run as long as result.length !== 
      // str.length
      while(result.length !== str.length) {
        // Inside the loop we'll create a variable, letter, that will hold the first
        // letter in the string using the .slice() method
        let letter = str.slice(0, 1);
        // Then we'll reset the value of the input string to a sliced version of the 
        // original string, but it will now start with the second letter + the rest of
        // the string, and then we'll add the value of 'letter' at the end
        str = str.slice(1) + letter;
        // Then we'll push the value of str to our 'result' array
        result.push(str);
      };
    // Once the while-loop has finished we're ready to return our 'result' array!
      return result;
};