// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get count() {
    return this.sides.length;
  }

  get getCount() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, cur) => acc + cur);
  }
}

class Triangle extends Polygon {
  get isValid() {
    // if (this.sides !== 3) return false;
    if (
      this.sides[0] + this.sides[1] > this.sides[2] &&
      this.sides[1] + this.sides[2] > this.sides[0] &&
      this.sides[2] + this.sides[0] > this.sides[1]
    ) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    let sideLength = this.sides[0]
    for (let i = 0; i < this.sides.length; i++) {
      if (this.sides[i] !== sideLength) return false;
    }

    return true;
  }

  get area() {
    return this.sides[0] ** 2;
  }
}
