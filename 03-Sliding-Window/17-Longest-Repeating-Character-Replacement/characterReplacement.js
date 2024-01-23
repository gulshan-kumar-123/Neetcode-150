//Neetcode solution important thing here is maxFreq

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let count = {};
  let l = 0;
  let res = 0;
  let maxFreq = 0;
  for (let r = 0; r < s.length; r++) {
    count[s[r]] = (count[s[r]] || 0) + 1;
    maxFreq = Math.max(maxFreq, count[s[r]]);

    while (r - l + 1 - maxFreq > k) {
      count[s[l]] -= 1;
      l += 1;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
};
