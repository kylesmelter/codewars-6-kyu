// DESCRIPTION:
// You will be given an array and a single item from that array. The smallest value in array has the highest kyu - 
// 1st kyu, 2nd smallest - 2nd kyu and so on. There are 8 kyus and each one has limited spots:

//  1st kyu - 1 slot - 2nd kyu - 2 slots - 3rd kyu - 2 slots - 4th kyu - 3 slots -5th kyu - 3 slots -6th kyu - 3 slots
//  7th kyu - 4 slots - 8th kyu - 4 slots
// You should return kyu for the value passed based on the array. If value isn't low enough to get a kyu then return 0.
// Examples: ([66,12,90,15], 15) => 2, ([1,7,2,3,4,5], 1) => 1, ([1,7,2,3,4,5,9,10], 7) => 4

function getKyu(allHonors, honor){
    // We'll first sort the values in 'allHonors' from smallest to largest
    let sorted = allHonors.sort((a,b) => a - b);
    // Then we'll use a little brute force with an if-conditinal to return the correct 
    // value based on the index of 'honor'
    if(sorted[0] === honor) {
      return 1;
    } else if(sorted[1] === honor || sorted[2] === honor) {
      return 2;
    } else if(sorted[3] === honor || sorted[4] === honor) {
      return 3;
    } else if(sorted[5] === honor || sorted[6] === honor || sorted[7] === honor) {
      return 4;
    } else if(sorted[8] === honor || sorted[9] === honor || sorted[10] === honor) {
      return 5;
    } else if(sorted[11] === honor || sorted[12] === honor || sorted[13] === honor) {
      return 6;
    } else if(sorted[14] === honor || sorted[15] === honor || sorted[16] === honor || sorted[17] === honor) {
      return 7;
    } else if(sorted[18] === honor || sorted[19] === honor || sorted[20] === honor || sorted[21] === honor) {
      return 8;
    } else {
      return 0
    };
};