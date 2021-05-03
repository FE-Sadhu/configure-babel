const obj = {
  type: 1
};

obj.aaa ?? 1;

[].flat(3);

Promise.resolve().then((res) => res);

const wk = new WeakMap();

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
}
let cp = new ColorPoint(25, 8);
