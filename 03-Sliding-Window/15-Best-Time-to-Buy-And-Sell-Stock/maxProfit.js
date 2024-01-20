/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0;
  let r = 1;
  let maxPro = 0;
  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      maxPro = Math.max(maxPro, prices[r] - prices[l]);
    } else {
      l = r;
    }
    r += 1;
  }
  return maxPro;
};
