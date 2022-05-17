export class Clock {
    private hour: number
    private minute: number
  
    constructor(hour = 0, minute = 0) {
      this.hour = setHours(hour + Math.floor(minute / 60))
      this.minute = setMinutes(minute - Math.floor(minute / 60) * 60)
    }
  
    public toString = (): string =>
      `${("0" + this.hour).slice(-2)}:${("0" + this.minute).slice(-2)}`
  
    public plus = (minutes: number): Clock => {
      let minHours = Math.floor((this.minute + minutes) / 60)
      let mins = minutes - minHours * 60
      this.hour = setHours(this.hour + minHours)
      this.minute = setMinutes(this.minute + mins)
      return this
    }
  
    public minus = (minutes: number): Clock => {
      let minHours = Math.floor((this.minute - minutes) / 60)
      let mins = minutes - minHours * 60
      this.hour = setHours(this.hour + minHours)
      this.minute = setMinutes(this.minute - mins)
      return this
    }
  
    public equals = (other: Clock): boolean =>
      this.hour === other.hour && this.minute === other.minute
  }
  
  const setHours = (hour: number): number => ((hour % 24) + 24) % 24
  
  const setMinutes = (minute: number): number => ((minute % 60) + 60) % 60
  