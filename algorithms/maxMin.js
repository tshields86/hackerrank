/* https://www.hackerrank.com/challenges/angry-children/problem */

const maxMin = (k, arr) => arr
  .sort((a, b) => a - b)
  .reduce((min, cur, i, a) => {
    let nextVal = a[i + k - 1];
    return nextVal ? Math.min(min, Math.abs(nextVal - cur)) : min;
  }, Infinity);