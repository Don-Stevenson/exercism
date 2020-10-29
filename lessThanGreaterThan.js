// testing out if statements between two values
// ********************************************


const between = (x) => {
    if (x >= 1 && x < 8 ) return "between 1 and 8" 
    else if (x >= 8 && x < 20) return "between 8 and 20"
    else return "not between"
}

console.log(between(1))
