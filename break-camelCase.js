// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    let result = "";

    for (let letter of string) {
      if (letter == letter.toUpperCase()) {
        result += ` ${letter}`;
      } else {
        result += letter;
      };
    };
    return result;
};