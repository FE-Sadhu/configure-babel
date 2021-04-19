[].flat(3)

Promise.resolve().then(res => res)

const wk = new WeakMap();

const a = {}

const c = () => {
  console.log(a);
}

console.log(a?.b)

const isHas = [1,2,3].includes(2);

async () => {
  await Promise.resolve()
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
}
let cp = new Point(25, 8);