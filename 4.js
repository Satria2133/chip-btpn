function distributePackets(packets, evelynFriends) {
    packets.sort((a, b) => a - b); // Sort cake packets in ascending order
  
    const M = evelynFriends;
    const totalPackets = packets.length;
  
    let start = 0;
    let end = M - 1;
    let minDifference = Infinity;
    let chosenPackets = [];
  
    for (let i = end; i < totalPackets; i++) {
      const difference = packets[i] - packets[start];
      if (difference < minDifference) {
        minDifference = difference;
        chosenPackets = packets.slice(start, end + 1);
      }
      start++;
      end++;
    }
  
    return [M, chosenPackets];
  }
  
const packets1 = [2, 20, 13, 31, 10, 12, 17, 16, 27];
const evelynFriends1 = 3;

const result1 = distributePackets(packets1, evelynFriends1);
console.log(result1); // [3, [13, 10, 12]]

const packets2 = [10, 6, 8, 12, 15, 6, 14, 16];
const evelynFriends2 = 4;

const result2 = distributePackets(packets2, evelynFriends2);
console.log(result2); // [4, [6, 6, 8, 10]]
