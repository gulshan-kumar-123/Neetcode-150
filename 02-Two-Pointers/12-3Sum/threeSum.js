/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  const sortNums = nums.sort((a, b) => {
    return a - b;
  });
  for (const [key, value] of Object.entries(sortNums)) {
    if (key > 0 && value == sortNums[key - 1]) {
      continue;
    }
    let l = parseInt(key) + 1;
    let r = sortNums.length - 1;
    while (l < r) {
      let threeSum = value + sortNums[l] + sortNums[r];
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        res.push([value, sortNums[l], sortNums[r]]);
        l++;
        while (sortNums[l] == sortNums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
};
