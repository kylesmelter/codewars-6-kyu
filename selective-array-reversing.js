// Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.

// E.g

// selReverse([1,2,3,4,5,6], 2)
//  //=> [2,1, 4,3, 6,5]
// if after reversing some portions of the array and the length of the remaining portion in the array is not up to the length argument, just reverse them.

// selReverse([2,4,6,8,10,12,14,16], 3)
//  //=> [6,4,2, 12,10,8, 16,14]
// selReverse(array, length)

// array - array to reverse
// length - length of each portion to reverse
// Note : if the length argument exceeds the array length, reverse all of them, if the length argument is zero do not reverse at all.

function selReverse(array, length) {
    // If the length of the array = 0, we simply return the array without reversing it.
    if(array.length === 0) {
        return array;
    };
    // Next, we'll create an empty array that will act as a holder for our first loop
    let holder = [];
    
    // Then we'll loop through the array in pieces equal to the length parameter
    for(let i = 0; i <= array.length - 1; i += length) {

        // Using the slice method, we'll push separate arrays to our 'holder' array. 
        // The arguments for our slice method will begin with the current value of i,
        // and the second argument will be i + length
        holder.push(array.slice(i, i + length));
    };

    // Next, we'll create another empty array, but this will be the one that stores
    // our reversed pieces from our 'holder' array after looping through it
    let result = [];

    // We'll loop through our 'holder' array and push a reversed version of the current
    // piece to our 'result' array
    for(let i = 0; i <= holder.length - 1; i++) {
        result.push(...holder[i].reverse());
    };

    // All that's left to do is return our 'result' array!
    return result;
};