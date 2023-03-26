// Happy Holidays fellow Code Warriors!
// Santa has just revealed his master plan! His goal was to automate as many of his tasks as possible by posting them as challenges in the #hackingholidays section of Codewars. Thanks to the solutions from these challenges, Santa has completed his tasks a week before Christmas! You know what that means...Party at Santa's place! All that's left is to invite everyone. Santa sent out a large amount of invitations, and is patiently waiting for responses.

// Who's attending the Party?
// Write a function called getAttendees that takes two arguments:

// Array containing all the names of the people Santa invited
// An array of responses (objects) with the following structure:
// {name: 'Easter Bunny', response: 'declined'}
// getAttendees should return an array containing the names of all the people who accepted Santa's invitation and the names of those who did not respond to the invitation. Santa is very positive, so he is assuming those who did not respond will show up. Anyone who declined the invitation will not be attending the party. If nobody is attending the party, return an empty array [].

// Example:
// Javascript/CoffeeScript:

// getAttendees( ['Easter Bunny', 'Tooth Fairy', 'Frosty the Snowman', 'Jack Frost'] ,
//    [ 
//      {name: 'Easter Bunny', response: 'declined'}, 
//      {name: 'Jack Frost', response: 'declined'}, 
//      {name: 'Tooth Fairy', response: 'accepted'} 
//    ] );// => returns ['Tooth Fairy', 'Frosty the Snowman']

function getAttendees(peopleInvited, responses){
    // Let's first create an empty array where we can push the names of the people
    // who have declined Santa's invitation
    let replies = [];
    // Then let's create another empty array where we can push the names of the
    // people who have accepted Santa's invitation
    let yes = []
    // To finish setting up, let's create a third empty array where we can push
    // the names of the people who didn't reply
    let noReplies = [];
    // Now we'll create a for-loop that will iterate over the 'responses' array
    for(let i = 0; i <= responses.length - 1; i++) {
        // Inside the loop we'll have an if-conditional set up to check the value of
        // response for each person, and if they accepted the invite we'll push their
        // name to our 'yes' array
        if(responses[i].response === 'accepted') {
            yes.push(responses[i].name);
        } else {
        // If the person didn't accept, we'll push their name to the 'replies' array
            replies.push(responses[i].name);
        };
    };
    // We'll create another for-loop to iterate over the 'peopleInvited' array
    for(let i = 0; i <= peopleInvited.length - 1; i++) {
        // We'll create a variable within the for-loop that will hold the current value
        // of each iteration
        let current = peopleInvited[i];
        // We'll also create an if-conditional to catch all the people who didn't reply,
        // and push their name(s) to our 'noReplies' array
        if(!replies.includes(current) && !yes.includes(current)) {
            noReplies.push(current);
        };
    };
    // All that's left to do is join our 'yes' and 'noReplies' arrays into a single array
    // and return it!
    return [...yes, ...noReplies];
};