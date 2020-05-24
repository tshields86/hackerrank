/* https://www.hackerrank.com/challenges/pairs/problem */

function pairs(k, arr) {
  const map = new Map();
  for (let x of arr) {
    map.set(x, (map.get(x) || 0) + 1);
  }

  return arr.reduce((pairs, cur, i, a) => {
    if (map.has(cur + k)) pairs++;
    if (map.has(cur - k)) pairs++;
    return pairs;
  }, 0) / 2;
}