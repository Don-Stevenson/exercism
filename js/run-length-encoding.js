export const encode = string =>
  string.replace(
    /(\w|\s)\1{1,}/g,
    (match, character) => `${match.length}${character}`
  )

export const decode = string =>
  string.replace(/(\d+)(\w|\s)/g, (_, count, character) =>
    character.repeat(count)
  )
