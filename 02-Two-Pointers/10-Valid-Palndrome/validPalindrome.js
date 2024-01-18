/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !alphaNum(s[l])) {
      l = l + 1;
    }
    while (r > l && !alphaNum(s[r])) {
      r = r - 1;
    }
    if (s[l].toLowerCase() != s[r].toLowerCase()) {
      return false;
    }
    l = l + 1;
    r = r - 1;
  }

  return true;
};
