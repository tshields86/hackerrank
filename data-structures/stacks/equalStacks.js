/* https://www.hackerrank.com/challenges/equal-stacks/problem */

class HeightNode {
  constructor(height, next, totalHeight) {
    this.height = height;
    this.next = next;
    this.totalHeight = totalHeight;
  }
};

class HeightStack {
  constructor(array) {
    this.top = null;
    this.fill(array)
  }

  fill(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      this.push(array[i]);
    }
  }

  height() {
    return this.isEmpty() ? 0 : this.top.totalHeight;
  }

  push(height) {
    this.top = new HeightNode(
      height,
      this.top,
      height + (this.isEmpty() ? 0 : this.top.totalHeight)
    );
  }

  pop() {
    if (!this.isEmpty()) this.top = this.top.next;
  }

  isEmpty() {
    return this.top === null;
  }
}

function equalStacks(h1, h2, h3) {
  const h1S = new HeightStack(h1);
  const h2S = new HeightStack(h2);
  const h3S = new HeightStack(h3);
  let height1 = h1S.height();
  let height2 = h2S.height();
  let height3 = h3S.height();
  while (height1 !== height2 || height2 !== height3) {
    const max = Math.max(height1, height2, height3);
    if (height1 === max) {
      h1S.pop();
      height1 = h1S.height();
    } else if (height2 === max) {
      h2S.pop();
      height2 = h2S.height();
    } else {
      h3S.pop();
      height3 = h3S.height();
    }
  }
  return height1;
}