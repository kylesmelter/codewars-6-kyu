// Consider the following class:

// var Animal = { 
//     name: "Cat", 
//     numberOfLegs: 4 
// }
// Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of 
// the original list, sorted first by the animal's number of legs, and then by its name.

// If null is passed, the method should return null. If an empty list is passed, it should return an empty list back.

function sortAnimal(animal) {
    // We'll start by creating an if-conditional checking to see if the input, 'animal,' is
    // either 'null' or empty. If 'null,' we'll return null, and if empty we'll return an
    // empty array []
    if(animal === null) {
      return null;
    } else if (animal.length === 0) {
      return [];
    };
    // If we get past the if-conditional, we can return the input, 'animal,' after we've
    // used .sort() to it by the number of legs of each animal, and if any animals have the
    // same amount of legs, we'll use .localeCompare() to sort them by name in alphabetical
    // order
    return animal.sort((a,b) => a.numberOfLegs - b.numberOfLegs || a.name.toString().localeCompare(b.name.toString()));
};