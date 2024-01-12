/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numSize = nums.length;
  const numSet = new Set(nums);
  const numSetSize = numSet.size;
  return numSetSize != numSize;
};
