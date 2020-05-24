/* https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem */

function sherlockAndAnagrams(s) {
  const anagrams = new Map();
  let totalAnagrams = 0;

  for (let i = 0, l = s.length; i < l; i++) {
    for (let j = i; j < l; j++) {
      let sortedLets = [...s.slice(i, j + 1)].sort().join('');
      let count = anagrams.get(sortedLets) || 0;
      totalAnagrams += count;
      anagrams.set(sortedLets, count + 1)
    }
  }

  return totalAnagrams;
}