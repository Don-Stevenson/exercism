export class Triangle {
  private a: number
  private b: number
  private c: number

  constructor(...sides: number[]) {
    this.a = sides[0]
    this.b = sides[1]
    this.c = sides[2]
  }

  get isEquilateral() :boolean {
    return isTriangle(this.a, this.b, this.c) &&
      areTrianglesSidesAllZero(this.a, this.b, this.c) &&
      checkIfEquilateralTriangle(this.a, this.b, this.c)
      ? true
      : false
  }

  get isIsosceles() :boolean {
    return isTriangle(this.a, this.b, this.c) &&
      areTrianglesSidesAllZero(this.a, this.b, this.c) &&
      checkIfIsoscelesTriangle(this.a, this.b, this.c)
      ? true
      : false
  }

  get isScalene() :boolean {
    return isTriangle(this.a, this.b, this.c) &&
      areTrianglesSidesAllZero(this.a, this.b, this.c) &&
      checkIfScaleneTriangle(this.a, this.b, this.c)
      ? true
      : false
  }
}

const isTriangle = (a: number, b: number, c: number): boolean =>
  a <= b + c && b <= a + c && c <= b + a

const areTrianglesSidesAllZero = (a: number, b: number, c: number): boolean =>
  a !== 0 && b !== 0 && c !== 0

const checkIfEquilateralTriangle = (a: number, b: number, c: number): boolean =>
  a * b * c === Math.pow(a, 3)

const checkIfIsoscelesTriangle = (a: number, b: number, c: number): boolean =>
  a === b || a === c || b === c

const checkIfScaleneTriangle = (a: number, b: number, c: number): boolean =>
  !(a === b || a === c || b === c)

  