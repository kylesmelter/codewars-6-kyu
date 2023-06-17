// You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to 
//attend the next coding meetup that you are organising.

// Your task is to return:

// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 
//'Asia', 'Europe', 'Oceania'. false otherwise. For example, given the following input array:

// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];
// your function should return true as there is at least one developer from the required 5 geographic zones.

// Notes: The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will 
//always start with upper-case 'A'.

// This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed 
//to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, 
//every, find, findIndex. Other approaches to solving the katas are of course possible.

function allContinents(list) {
    // Let's start by creating an empty array, 'countries,' that will hold the 'country'
    // value for each developer included in 'list'
    let countries = [];
    // Next, we'll create a for-loop to iterate over the input, 'list'
    for(let i = 0; i <= list.length - 1; i++) {
      // Inside the loop we'll use .push() to add the value of 'country' for each developer
      // to our 'countries' array
      countries.push(list[i].continent);
    };
    // Once we've finished looping, we'll turn our 'countries' array into a set using
    // 'new Set()' and 'countries' as the input. Sets get rid of any duplicates and 
    // keep only unique values, so we'll know if every country is represented if the size
    // of the set === 5
    let set = new Set(countries);
    // And here we have the if-conditional to check if the size === 5, and if it does
    // we'll return true. If not, we'll return false
    if(set.size === 5) {
      return true;
    } else {
      return false;
    };
};