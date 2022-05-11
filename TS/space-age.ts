interface Ages {
    [planet: string]: number
  }
  
  const plantAges: Ages = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  }
  
  const earthYearInSecs = 31557600
  
  export const age = (planet: string, seconds: number): number =>
    parseFloat((seconds / (earthYearInSecs * plantAges[planet])).toFixed(2))
  