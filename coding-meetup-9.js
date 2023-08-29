// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
//   { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
//   { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
// ];
// your function should return true as there is at least one developer from each age group.

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer up to 199.

function isAgeDiverse(list) {
    // We'll start by creating an array, 'result,' that will store a value for
    // each age group, and all values will initially be set to 0
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // Next, we'll iterate over the parameter, 'list,' using a for-loop
    for(let i = 0; i <= list.length - 1; i++) {
      // Inside the loop we'll have an if-conditional checking to see which
      // age group each developer belongs to, and then we'll use .push() to add
      // 1 to the applicable age group in our 'result' array
      if(list[i].age > 12 && list[i].age < 20) {
        result[0] += 1;
      } else if(list[i].age > 19 && list[i].age < 30) {
        result[1] += 1;
      } else if(list[i].age >= 30 && list[i].age < 40) {
        result[2] += 1;
      } else if(list[i].age >= 40 && list[i].age < 50) {
        result[3] += 1;
      } else if(list[i].age >= 50 && list[i].age < 60) {
        result[4] += 1;
      } else if(list[i].age >= 60 && list[i].age < 70) {
        result[5] += 1;
      } else if(list[i].age >= 70 && list[i].age < 80) {
        result[6] += 1;
      } else if(list[i].age >= 80 && list[i].age < 90) {
        result[7] += 1;
      } else if(list[i].age >= 90 && list[i].age < 100) {
        result[8] += 1;
      } else if(list[i].age >= 100) {
        result[9] += 1;
      };
    };
    // Down at the bottom, we'll have one more if-statement using the .every()
    // method to see if every value in 'result' is at least 1, and if so we'll
    // return true. If not, we'll returrn false
    if(result.every(x => x >= 1)) {
      return true;
    } else {
      return false;
    };
};