/* https://www.hackerrank.com/challenges/sparse-arrays/problem */

function matchingStrings(strings, queries) {
  const map = new Map();
  strings.forEach(s => map.set(s, (map.get(s) | 0) + 1));
  return queries.map(q => map.get(q) | 0);
}