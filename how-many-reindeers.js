// Santa puts all the presents into the huge sack. In order to let his reindeers rest a bit, he only takes as many reindeers with 
// him as he is required to do. The others may take a nap.

// Two reindeers are always required for the sleigh and Santa himself. Additionally he needs 1 reindeer per 30 presents. 
// As you know, Santa has 8 reindeers in total, so he can deliver up to 180 presents at once (2 reindeers for Santa and the 
// sleigh + 6 reindeers with 30 presents each).

// Complete the function reindeers(), which takes a number of presents and returns the minimum numbers of required reindeers. 
// If the number of presents is too high, throw an error.

// Examples (input -> output / error)
// 0 -> 2
// 1 -> 3
// 30 -> 3
// 200 -> throws an error

function reindeers(presents) {
    // We'll start by creating a variable, 'count,' that will have an initial 
    // value of 2 because we always need at least 2 reindeer
    let count = 2;
    // Next, we'll use Math.ceil() with 'presents' / 30, because each reindeer is
    // able to carry 30 presents
    count += Math.ceil(presents / 30);
    // Now, we'll use an if-conditional to check if 'count' is > 8, and if it is
    // we'll throw an error. But if 'count' is < 8, we'll return 'count!'
    if(count > 8) {
      throw error;
    } else {
      return count;
    };
};