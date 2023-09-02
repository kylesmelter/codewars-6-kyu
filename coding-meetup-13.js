// You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

// Your task is to return either:

// true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
//   { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
// ];
// your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

// Notes:

// The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
// The input array will always be valid and formatted as in the example above.
// Each of the 3 programming languages will always be represented.

function isLanguageDiverse(list) {
    // We'll start by creating an array, 'languages,' that will store the 
    // count of each language for JavaScript, Python, and Ruby, all initially
    // set to 0
    let languages = [0, 0, 0];
    // Next, we'll create a for-loop to iterate over the parameter, 'list'
    for(let i = 0; i <= list.length - 1; i++) {
      // Inside the loop we'll have an if-conditional created to capture
      // the count of each of the three languages, and 1 to the count of each
      // applicable language
      if(list[i].language === 'JavaScript') {
        languages[0] += 1;
      } else if(list[i].language === 'Python') {
        languages[1] += 1;
      } else if(list[i].language === 'Ruby') {
        languages[2] += 1;
      };
    };
    // At the end, we'll have another if-conditional created to see if any of
    // the languages are greater than 2x the other two, and if any of them are
    // we'll return false. If not, we'll return true
    if(languages[0] > 2 * languages[1] || languages[0] > 2 * languages[2] || 
       languages[1] > 2 * languages[0] || languages[1] > 2 * languages[2] ||
       languages[2] > 2 * languages[0] || languages[2] > 2 * languages[1]) {
      return false;
    } else {
      return true;
    };
};