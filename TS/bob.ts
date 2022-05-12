export const hey = (message: string): string => {
  const trimmedMessage = message.trim()
  if (
    trimmedMessage.toUpperCase() === trimmedMessage &&
    trimmedMessage.slice(-1) === "?" &&
    trimmedMessage.match(/[A-Z]/)
  )
    return "Calm down, I know what I'm doing!"
  if (
    trimmedMessage.toUpperCase() === trimmedMessage &&
    trimmedMessage.match(/[A-Z]/)
  )
    return "Whoa, chill out!"
  if (trimmedMessage.slice(-1) === "?") return "Sure."
  if (!trimmedMessage) return "Fine. Be that way!"
  else return "Whatever."
}
