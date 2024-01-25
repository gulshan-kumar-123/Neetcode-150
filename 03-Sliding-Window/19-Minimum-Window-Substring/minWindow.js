/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) {
    return "";
  }
  let t_map = {};
  let s_map = {};
  for (let i = 0; i < t.length; i++) {
    t_map[t[i]] = (t_map[t[i]] || 0) + 1;
  }
  let start = 0;
  let min_len = Number.POSITIVE_INFINITY;
  let min_window = "";
  let required_len = t.length;

  for (let i = 0; i < s.length; i++) {
    if (t_map.hasOwnProperty(s[i])) {
      s_map[s[i]] = (s_map[s[i]] || 0) + 1;
      if (s_map[s[i]] <= t_map[s[i]]) {
        required_len -= 1;
      }
    }
    while (required_len == 0) {
      if (i - start + 1 < min_len) {
        min_len = i - start + 1;
        min_window = s.slice(start, i + 1);
      }

      if (t_map.hasOwnProperty(s[start])) {
        s_map[s[start]] -= 1;
        if (s_map[s[start]] < t_map[s[start]]) {
          required_len += 1;
        }
      }
      start += 1;
    }
  }
  return min_window;
};
