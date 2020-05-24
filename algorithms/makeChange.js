/* https://www.hackerrank.com/challenges/ctci-coin-change/problem */

const makeChange = (money, coins, index = 0, memo = new Map()) => {
  if (money === 0) return 1;
  if (index >= coins.length) return 0;
  const key = `${money}-${index}`;
  if (memo.has(key)) return memo.get(key);

  let amountWithCoin = 0;
  let ways = 0;
  while (amountWithCoin <= money) {
    let remaining = money - amountWithCoin;
    ways += makeChange(remaining, coins, index + 1, memo);
    amountWithCoin += coins[index];
  }

  memo.set(key, ways);
  return ways;
};