export const isPangram = (text: string): boolean => {
  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("")
  return alphabetArr.every((letter) => text.toLowerCase().includes(letter))
}
