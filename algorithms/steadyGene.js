/* https://www.hackerrank.com/challenges/bear-and-steady-gene/problem */

function steadyGene(gene) {
  const n = gene.length;
  const exp = n / 4;
  const occurences = { G: 0, A: 0, C: 0, T: 0 };
  for (let g of gene) {
    occurences[g] = occurences[g] + 1;
  }

  let min = 0;
  if (Object.values(occurences).some(val => val !== exp)) {
    min = n;
    let l = 0;
    for (let r = 0; r < n; r++) {
      occurences[gene[r]]--;
      while (Object.values(occurences).every(val => val <= exp) && l <= r) {
        min = Math.min(min, r - l + 1);
        occurences[gene[l]]++;
        l++;
      }
    }
  }

  return min;
}