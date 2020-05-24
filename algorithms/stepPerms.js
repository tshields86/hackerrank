/* https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem */

const stepPerms = (n, cache = []) => {
  if (cache[n]) return cache[n];
  if (n === 0) return 1;
  if (n < 0) return 0;
  
  cache[n] = stepPerms(n - 1, cache) + stepPerms(n - 2, cache) + stepPerms(n - 3, cache);

  return cache[n];
};