/* https://www.hackerrank.com/challenges/triple-sum/problem */

function triplets(a, b, c) {
  a = [...new Set(a)].map(v => ({ v: v, o: 1 }));
  c = [...new Set(c)].map(v => ({ v: v, o: 2 }));
  b = [...new Set(b)].map(v => ({ v: v, o: 3 }));
  const merged = [...a, ...b, ...c];

  merged.sort((a, b) => {
    let d = a.v - b.v;
    if (d === 0) return a.o - b.o;
    else return d;
  });

  return merged.reduce((acc, { o }) => {
    if (o === 1) acc.n1++;
    else if (o === 2) acc.n2++;
    else if (o === 3) acc.tot += acc.n1 * acc.n2;
    return acc;
  }, { n1: 0, n2: 0, tot: 0 }).tot;
}