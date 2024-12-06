export const includesAny = (string, values) => {
  return values.some(item => string.includes(item))
}
