/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0;
  }
  let l = 0;
  let r = 1;
  let maxLen = 1;

  while (r < s.length) {
    if (s.substring(l, r).indexOf(s[r]) === -1) {
      maxLen = Math.max(maxLen, r - l + 1);
    } else {
      let index = s.indexOf(s[r], l);
      if (index !== -1) {
        l = index + 1;
      }
    }
    r++;
  }
  return maxLen;
};
