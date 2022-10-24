export const timeConverter = (time) => {
  const Minutes = Math.floor(time / 60)
  const Seconds = time - Minutes * 60
  if (Minutes) {
    return `${Minutes} min${Minutes > 1 ? 's' : ''} and ${Seconds} second${Seconds > 1 || Seconds === 0 ? 's' : ''}`
  }
  return `${Seconds} second${Seconds > 1 || Seconds === 0 ? 's' : ''}`
}
