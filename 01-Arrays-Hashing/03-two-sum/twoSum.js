//my solution
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   let cache = {};
//   for (let [key, index] of Object.entries(nums)) {
//     if (cache.hasOwnProperty(index)) {
//       return [cache[index], key];
//     }
//     cache[target - index] = key;
//   }
// };

// cleaner solution same runtime and memory usage
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in cache) {
      return [i, cache[diff]];
    }
    cache[nums[i]] = i;
  }
};
