import { css } from 'goober'


export const makeStyles = (classObj) => Object.entries(classObj).reduce((acc, [key, val]) => {
  acc[key] = css(val)
  return acc
}, {})
