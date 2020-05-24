/* https://www.hackerrank.com/challenges/ctci-making-anagrams/problem */

function makeAnagram(a, b) {
  const map = new Map();

  for (let l of a) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  for (let l of b) {
    map.set(l, (map.get(l) || 0) - 1);
  }

  let deletions = 0;
  map.forEach(x => x !== 0 && (deletions += Math.abs(x)));

  return deletions;
}