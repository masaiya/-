/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。你可以认为每种硬币的数量是无限的。
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  coins.sort((a, b) => a - b)
  var num = 0;
  var i = coins.length - 1;
  while(amount > 0 && i >= 0) {
    var coinNum = Math.floor(amount / coins[i]);
    console.log("coinNum: " + coinNum + "  coins[i]: " + coins[i]);
    amount = amount - coinNum * coins[i];
    i--;
    num += coinNum;
  }
  if(amount === 0) {
    return num;
  }
  return -1;
};
// var coinChange = function(coins, amount, res = Infinity) {
//   coins.sort((a, b) => b - a)
//   var d = (amount, index, count) => {
//     if (amount === 0) return res = Math.min(res, count)
//     if (index === coins.length) return
//     for (var n = amount / coins[index] | 0; count + n < res && n >= 0; n--) 
//       d(amount - n * coins[index], index + 1, count + n)
//   }
//   return d(amount, 0, 0), res === Infinity ? -1 : res
// };
var coins = [186,419,83,408], amount = 6249;
var res = coinChange(coins, amount);
console.log(res);