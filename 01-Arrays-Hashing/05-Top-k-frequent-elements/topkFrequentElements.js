/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const countDict = {};
  const freq = Array.from({ length: nums.length + 1 }, () => []);
  let res = [];
  nums.forEach((num) => {
    countDict[num] = (countDict[num] || 0) + 1;
  });
  for (const [num, count] of Object.entries(countDict)) {
    freq[count].push(Number(num));
  }
  for (let i = freq.length - 1; i > 0 && res.length < k; i--) {
    for (const num of freq[i].slice(0, k - res.length)) {
      res.push(num);
    }
  }
  return res;
};

const nums = [1, 2,2,3,3];
const k = 2;
console.log(topKFrequent(nums, k));

//more memory but slightly cleaner
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var topKFrequent = function (nums, k) {
//     const freqMap = new Map();
//     const freqArray = [];
//     const result = [];
//     nums.forEach(num => {
//         freqMap.set(num, (freqMap.get(num) || 0) + 1)
//     })
//     for (let[num,freq] of freqMap){
//         freqArray[freq] = (freqArray[freq] || new Set()).add(num);
//     }
//     for(let i =freqArray.length-1;i>=0;i--){
//         if(freqArray[i]){
//             result.push(...freqArray[i])
//         }
//         if(result.length===k) break;
//     }
//     return result
// };