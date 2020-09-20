// testing out if statements between two values
// *******************************************

const between = (x) => {
    if (1 <= x <= 8 ) return "between 1 and 8" 
    else if (9 < x <=20) return "between 9 and 20"
    else return "not between"
}

console.log(between(11))