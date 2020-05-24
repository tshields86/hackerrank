/* https://www.hackerrank.com/challenges/array-left-rotation/problem */

function rotateLeft(a, d) {
  return [...a.slice(d), ...a.slice(0, d)].join(' ');
}