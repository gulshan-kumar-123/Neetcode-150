//youtube comment solution

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  let s1_map = {};
  let s2_map = {};

  for (let i = 0; i < s1.length; i++) {
    s1_map[s1[i]] = (s1_map[s1[i]] || 0) + 1;
  }

  for (let i = 0; i < s2.length; i++) {
    s2_map[s2[i]] = (s2_map[s2[i]] || 0) + 1;

    if (i >= s1.length) {
      if (s2_map[s2[i - s1.length]] > 1) {
        s2_map[s2[i - s1.length]] -= 1;
      } else {
        delete s2_map[s2[i - s1.length]];
      }
    }

    if (Object.keys(s1_map).every((key) => s1_map[key] === s2_map[key])) {
      return true;
    }
  }

  return false;
};
