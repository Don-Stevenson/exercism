export class Triangle {
    private sides: number[]
  
      constructor(...sides: number[]) {
      this.sides = sides
    }
  
    get isEquilateral() {
      return isTriangle(this.sides[0], this.sides[1], this.sides[2]) &&
        this.sides[0] * this.sides[1] * this.sides[2] ===
          Math.pow(this.sides[0], 3) &&
        areTrianglesSidesAllZero(this.sides[0], this.sides[1], this.sides[2])
        ? true
        : false
    }
  
    get isIsosceles() {
      return (isTriangle(this.sides[0], this.sides[1], this.sides[2]) &&
        this.sides[0] === this.sides[1]) ||
        this.sides[0] === this.sides[2] ||
        (this.sides[1] === this.sides[2] &&
          areTrianglesSidesAllZero(this.sides[0], this.sides[1], this.sides[2]))
        ? true
        : false
    }
  
    get isScalene() {
      throw new Error("Remove this statement and implement this function")
    }
  }
  
  const isTriangle = (a: number, b: number, c: number): boolean =>
    a <= b + c && b <= a + c && c <= b + a
  
  const areTrianglesSidesAllZero = (a: number, b: number, c: number): boolean =>
    a !== 0 && b !== 0 && c !== 0
  
  console.log("here", isTriangle(1, 3, 1))
  