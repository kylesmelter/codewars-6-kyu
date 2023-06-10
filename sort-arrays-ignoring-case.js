// Sort the given array of strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
    // All we have to do here is use the .lowerCase() and .localeCompare() methods inside
    // the .sort() method and return it!
    let result = names.sort((a,b) => a.toString().toLowerCase().localeCompare(b.toLowerCase()));
    
    return result;
};