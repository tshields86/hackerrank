/* https://www.hackerrank.com/challenges/pairs/problem */

const pairs = (k, arr) => {
  let count = 0;
  const set = new Set();
  for (let num of arr) {
    if (set.has(num + k)) count++;
    if (set.has(num - k)) count++;
    set.add(num);
  }

  return count;
};