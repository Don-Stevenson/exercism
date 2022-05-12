export class Squares {
    num: number
    
    constructor(count: number) {
      this.num = count
    }
    get sumOfSquares(): number {
      let sum = 0
      for (let i = 0; i <= this.num; i++) {
        sum += Math.pow(i, 2)
      }
      return sum
    }
  
    get squareOfSum(): number {
      return Math.pow((this.num * (this.num + 1)) / 2, 2)
    }
  
    get difference(): number {
      return this.squareOfSum - this.sumOfSquares
    }
  }
  