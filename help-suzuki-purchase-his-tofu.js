// Help Suzuki purchase his Tofu!

// Suzuki has sent a lay steward to market who will purchase some items not produced in the monastary gardens for the 
// monks. The stewart has with him a large box full of change from donations earlier in the day mixed in with some 
// personal items. You will be given a string of items representing the box.

// Sort through the items in the box finding the coins and putting aside anything else. You will be given a data 
// structure similar to the one below.

// box = 'mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon 
// mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon 
// mon'

// Return the following in your solution. [count of mon coins in box, count of monme coins in box,sum of all coins 
// value in box, minimum number of coins needed for Tofu]

// 100 ≤ cost ≤ 1000. cost = 124 returns [45, 5, 345, 6] The coins have the following values: monme = 60 mon = 1

// Determine the minimum number of coins to pay for tofu. You must pay with exact change and if you do not have the 
// correct change return “leaving the market”. If the cost of tofu is higher than your total amount of money also 
// return “leaving the market”

function buyTofu(cost,box) {
    // First, we'll start by splitting the box string into an array
    box = box.split(' ');
    // Then, we'll create variables for the number of mon coins, monCount, the number of monme coins, monmeCount, and 
    // a counter for the number of coins we need to purchase the tofu, coinsNeeded
    let monCount = 0;
    let monmeCount = 0;
    let coinsNeeded = 0;
    // We'll also create an array with four values initially set to 0 that will become the results we need
    let result = [0, 0, 0, 0];
    // Once the variables are created, we'll loop through our box array so we can sort the coins from everything else
    for(let i = 0; i <= box.length - 1; i++) {
      // We'll use an if conditional to help us increase the count for each coin  
      if(box[i] === 'mon') {
        monCount += 1;
      } else if(box[i] === 'monme') {
        monmeCount += 1;
      // If the current value isn't a coin, we'll just continue through it  
      } else {
        continue;
      };
    };
    // Once we've finished looping through our array, box, we can create a variable, total, that will hold the sum of
    // the value of our coins
    let total = monCount + (monmeCount * 60);
    // If the cost is greater than our total, we can't afford the tofu and we'll have to leave the market
    if(cost > total) {
      return 'leaving the market'
    }
    // Now, we're start filling in the values in our result array. 
    result[0] = monCount;
    
    result[1] = monmeCount;
    
    result[2] = total;
    // Now we'll use while loops to help us use the minimum amount of coins, starting with monme coins being they're
    // worth the most
    while(cost > 59 && monmeCount > 0) { 
        monmeCount -= 1;
        cost -= 60;
        coinsNeeded += 1;
    };
    // Once we're out of monme coins, or the cost is below 60, we'll switch to mon coins
    while(cost > 0 && monCount > 0) {
        monCount -= 1;
        cost -= 1;
        coinsNeeded += 1;
    };
    // If we have exact change, our cost will be equal to 0 after going through our while loops, and if it is the last
    // value in our result array will be equal to coinsNeeded and we can return our result array
    if(cost === 0) {
      result[3] = coinsNeeded;
      return result;
    } else {
    // If the value of cost still isn't equal to 0 after all of this, we don't have the exact change and we'll need
    // to leave the market
      return 'leaving the market';
    };
};