// Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function redarr(). 
// Sort the channels in an alphabetical order, remove duplicates and, finally, return an object where each channel (object's value) 
// is assigned to a whole number (objects's key), starting with 0.

// Examples:

// var arr = ["BBC1", "BBC2", "MTV"];

// redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}

// var arr = ["BBC1", "BBC1", "BBC2", "MTV"];

// redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}

function redarr(arr) {
    // We'll start by using .sort() to sort the values in 'arr' in alphabetical order
    // and storing it in a new variable, 'sorted'
    let sorted = arr.sort();
    // Next, we'll turn our 'sorted' array into a Set so we can eliminate all any duplicates
    sorted = new Set(sorted);
    // Then we'll turn 'sorted' back into an array using the spread operator
    sorted = [...sorted];
    // All we need to do now is use Object.assign() with 'sorted' passed in as a parameter
    // to turn 'sorted' into an object and return it!
    return Object.assign({}, sorted);
};