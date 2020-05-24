/* https://www.hackerrank.com/challenges/greedy-florist/problem */

const getMinimumCost = (k, c) => c
  .sort((a, b) => b - a)
  .reduce((t, cur, i) => {
    const flowerNum = Math.ceil((i + 1) / k);
    return t + flowerNum * cur;
  }, 0);