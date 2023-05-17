// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

function reverseVowels(str) {
    // We'll first start by creating an array, 'vowels' that will store uppercase and
    // lowercase versions of each vowel that will make it easier to check if the current
    // value while iterating over the input 'str' is a vowel instead of using a lengthy
    // if-conditional
    let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    // Next, we'll turn the input 'str' into an array using the .split() method, and
    // then we'll use the .filter() method to filter all the vowels from the input 'str'
    // into a separate array, 'vowelsArray,' before we use the .reverse() method so we have
    // all the vowels in reverse order of appearance
    let vowelsArray = str.split('').filter(x => vowels.includes(x)).reverse();
    // Now we'll create an empty array, 'result,' that we'll use to push values to while
    // iterating
    let result = [];
    // Then we'll use a for-loop to iterate over the input 'str'
    for(let i = 0; i <= str.length - 1; i++) {
      // Inside the loop we'll create an if-conditional that will use the .includes() method
      // to check if our array, 'vowels,' includes the current value of the loop, and if it
      // does we'll use the .push() method combined with the .shift() method to grab the first
      // vowel from 'vowelsArray' and add it to our 'result' array. If the current value is not
      // a vowel, we'll just use the .push() method to add it to our 'result' array
      if(vowels.includes(str[i])) {
        result.push(vowelsArray.shift());
      } else {
        result.push(str[i]);
      };
    };
    // All we need to do now is use the .join() method on our 'result' array to turn it into
    // a string and return it!
    return result.join('');
};