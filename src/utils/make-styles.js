import React from 'react'
import { setup, css, styled, keyframes } from 'goober'


setup(React.createElement)

export const makeStyles = (classObj) => Object.entries(classObj).reduce((acc, [key, val]) => {
  acc[key] = css(val)
  return acc
}, {})

const linear = (width) => ({
  rtl: keyframes`
    from { width: 0%; }
    to { width: ${width}%; }
  `,
  ltr: keyframes`
    from { width: ${width}%; }
    to { width: 0%; }
  `,
})

export const LinearAnimation = styled('div')((props) => ({
  height: '100%',
  width: `${props.width}%`,
  animation: `${linear(props.width)[props.direction]} ${props.duration}s linear`,
}))
