// This Kata is intended as a small challenge for my students

// All Star Code Challenge #23

// There is a certain multiplayer game where players are assessed at the end of the game for merit. Players are ranked according to an internal scoring system that players don't see.

// You've discovered the formula for the scoring system!

// Create a function called scoring() that takes an array of Player objects and returns an array of player names, in order of descending score (highest score is index 0, 2nd highest is index 1, etc.).

// Each player's score is calculated as follows:

// Each normal kill is worth 100 points
// Each assist is worth 50 points
// Each point of damage done is worth 0.5 points
// Each point of healing done is worth 1 point
// The longest kill streak is worth 2^N, where N is the number of kills of the streak
// Environmental kills are worth 500 points (These are counted separately from normal kills)
// For each of the above statistic, a Player object contains a respective "key:value" pairing. All values except the 'name' are integers.

// var player1 = {
//   name: "JuanPablo",
//   normKill: 5,
//   assist: 12,
//   damage: 3200,
//   healing: 0,
//   streak: 4,
//   envKill: 1
// }
// var player2 = {
//   name: "ProfX",
//   normKill: 2,
//   assist: 14,
//   damage: 600,
//   healing: 1500,
//   streak: 0,
//   envKill: 0
// }
// scoring([player1, player2]); 
// //["JuanPable","ProfX"]
// // Scores of 3216 and 2701, respectively.
// Note:
// Assume the input array will ALWAYS have a properly constructed Player object (no missing keys or values)
// Names will not contain unusual characters nor repeat (names are unique)
// Players with the same score should be sorted by the order they appear in the array
// For simplicity, for a kill streak of 0 the kill streak calculation will yield 1 (or 20) points

function scoring(array){
    // We'll start by creating an empty array to push our values to after looping through
    // the input array
    let result = [];
    // Next we'll create a for-loop to iterate over the input array
    for(let i = 0; i <= array.length - 1; i++) {
      // Inside the loop we'll create an object that will hold the names and total scores
      // of each player
      let person = {
        name: array[i].name,
        score: (array[i].normKill * 100) + (array[i].assist * 50) + (array[i].damage * 0.5) + (array[i].healing) + (Math.pow(2, array[i].streak)) + (array[i].envKill * 500),
      };
      // After logging the name and total score for each player, we'll push that player
      // to our 'result' array
      result.push(person);
    };
    // Once we have all the players in our 'result' array we'll use the .sort() method
    // to everyone by their total score from greatest to smallest
    let sorted = result.sort((x,y) => y.score - x.score);
    // Then we'll create another empty array that we'll push the names of each player to
    // after iterating over the 'sorted' array
    let placements = [];
    // After that we'll create one more for-loop that will iterate over our 'sorted' array
    // so we can grab the name of each player and use the .push() method to fill our 
    // 'placements' array
    for(let i = 0; i <= sorted.length - 1; i++) {
        placements.push(sorted[i].name);
    };
    // All that's left to do is return our 'placements' array!
    return placements;
};