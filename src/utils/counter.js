let count = 0

export const counter = (prefix) => {
  count++
  return prefix ? `${prefix}-${count}` : count
}
