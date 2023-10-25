// Pete and his mate Phil are out in the countryside shooting clay pigeons with a shotgun - amazing fun.

// They decide to have a competition. 3 rounds, 2 shots each. Winner is the one with the most hits.

// Some of the clays have something attached to create lots of smoke when hit, guarenteed by the packaging to generate 'real excitement!' (genuinely this happened). None of the explosive things actually worked, but for this kata lets say they did.

// For each round you will receive the following format:

// [{P1:'XX', P2:'XO'}, true]

// That is an array containing an object and a boolean. Pl represents Pete, P2 represents Phil. X represents a hit and O represents a miss. If the boolean is true, any hit is worth 2. If it is false, any hit is worth 1.

// Find out who won. If it's Pete, return 'Pete Wins!'. If it is Phil, return 'Phil Wins!'. If the scores are equal, return 'Draw!'.

// Note that as there are three rounds, the actual input (x) will look something like this:

// [[{P1:'XX', P2:'XO'}, true], [{P1:'OX', P2:'OO'}, false], [{P1:'XX', P2:'OX'}, true]]

function shoot(x) {
    // We'll start by creating variables for both Pete and Phil's score, and they
    // will initially be set to 0
    let peteScore = 0;
    let philScore = 0;

    // Next, we'll create a for-loop to iterate over the parameter, 'x
    for (let i = 0; i < x.length; i++) {
      // Inside the loop we'll create variables, 'p1' and 'p2' that will keep track
      // of each player's score for the current loop 
      let p1 = 0;
      let p2 = 0;

      // We'll then create a second for-loop to iterate through the object in each
      // subarray, and we'll add 1 to the score if it's equal to 'X'
      for (let j = 0; j < 2; j++) {
        if (x[i][0].P1.charAt(j) === "X") {
          p1++;
        };
        if (x[i][0].P2.charAt(j) === "X") {
          p2++;
        };
      };

      // Now we'll create an if-conditional to see the boolean equals true, and if
      // it does we'll multiply the score by 2
      if (x[i][1]) {
        p1*=2;
        p2*=2;
      };

      peteScore+=p1;
      philScore+=p2;

    };

    // We'll have a final if-conditional created so we can return the correct
    // winner!
    if (peteScore > philScore) {
      return 'Pete Wins!';
    };
    if (peteScore < philScore) {
      return 'Phil Wins!';
    } else {
      return 'Draw!';
    };
};