// # Clock
// *******

// Implement a clock that handles times without dates.
// You should be able to add and subtract minutes to it.
// Two clocks that represent the same time should be equal to each other.

// # Clock
// Implement a clock that handles times without dates.
// You should be able to add and subtract minutes to it.
// Two clocks that represent the same time should be equal to each other.

export class Clock {
  constructor(hour, min) {
    this.hour = hour;
    this.min = min;
  }

  toString() {
    let hour = this.hour;
    let min = this.min;
    console.log("hour + min before", hour, min);
    if (hour >= 24) hour = hour % 24;
    if (min < 10) min = `0${min}`;
    if (!min) min = "00";
    if (hour < 10) hour = `0${hour}`;
    if (!hour || hour === 24) hour = "00";
    console.log("after", { hour }, { min });

    return `${hour}:${min}`;
  }

  plus() {
    throw new Error("Remove this statement and implement this function");
  }

  minus() {
    throw new Error("Remove this statement and implement this function");
  }

  equals() {
    throw new Error("Remove this statement and implement this function");
  }
}
