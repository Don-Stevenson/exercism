const romanNums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  
  export const toRoman = (num) => {
    let romanNum = "";
    for (let index in romanNums) {
       while (num >= romanNums[index]) {
        romanNum += index;
        num -= romanNums[index];
      }
    }
    return romanNum;
  };
  