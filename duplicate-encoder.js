// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character 
// appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore 
// capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is 
// the expected result, not the input!

function duplicateEncode(word){
    // First, we'll convert the input, 'word,' to lowercase using .toLowerCase()
    word = word.toLowerCase();
    // Next, we'll create an empty string variable, 'result,' to add our new values to
    let result = '';
    // Then we'll create a for-loop to iterate over 'word'
    for(let i = 0; i <= word.length - 1; i++) {
      // Inside the loop we'll have an if-conditional leveraging the .indexOf() and
      // the .lastIndexOf() methods. If those two !== each other, we'll add ')' to 'result,'
      // and if they do we'll add '(' to 'result'
      if(word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
        result += ')';
      } else {
        result += '(';
      };
    };
    // All we need to do now is return 'result!'
    return result;
};