// my solution
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function (strs) {
//     const hashMap = {}
//     for (let i = 0; i < strs.length; i++) {
//         const sorted_str = strs[i].split("").sort().join("")
//         if (!hashMap[sorted_str]) {
//             hashMap[sorted_str] = [];
//         }
//         hashMap[sorted_str].push(strs[i])
//     }
//     return Object.values(hashMap)
// };

//cleaner solution
var groupAnagrams = function (strs) {
  const map = new Map();
  strs.forEach((str) => {
    const key = str.split("").sort().join("");
    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  });
  return [...map.values()];
};
