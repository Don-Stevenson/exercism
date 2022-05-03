export const count = (text: string): Map<string, number> =>
  text
    .trim()
    .toLocaleLowerCase()
    .split(/\s+/)
    .reduce((accumulator, word) => {
      const currentWordCount = accumulator.get(word) ?? 0
      return accumulator.set(word, currentWordCount + 1)
    }, new Map() as Map<string, number>)
