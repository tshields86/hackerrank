/* https://www.hackerrank.com/challenges/two-strings/problem */

function twoStrings(s1, s2) {
  const s1Set = new Set([...s1]);
  return [...s2].some(char => s1Set.has(char))
    ? 'YES'
    : 'NO';
}