/* https://www.hackerrank.com/challenges/encryption/problem */

function encryption(s) {
  const noSpaceS = s.replace(/ /g, '');
  const length = noSpaceS.length;
  const sqrt = Math.sqrt(length);
  const floor = Math.floor(sqrt)
  const ceil = Math.ceil(sqrt);
  const columns = ceil;
  const rows = floor * ceil >= length ? floor : floor + 1;

  const grid = [];
  for (let i = 0, colIdx = 0; i < length; i++) {
    grid[colIdx] = [...(grid[colIdx] || []), noSpaceS[i]]
    colIdx = colIdx === columns - 1 ? 0 : colIdx + 1;
  }

  return grid.map(col => col.join('')).join(' ');
}