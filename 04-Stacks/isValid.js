/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const closeToOpen = { ")": "(", "]": "[", "}": "{" };

  for (let i = 0; i < s.length; i++) {
    if (closeToOpen.hasOwnProperty(s[i])) {
      if (stack && stack[stack.length - 1] == closeToOpen[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length == 0;
};
