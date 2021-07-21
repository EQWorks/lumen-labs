import PropTypes from 'prop-types'

/**
 * @param {string} color the color type for target and states. 
 * @param {string} target the element target for color and states.
 * @param {array} state pseudo elements state to apply to the target.
 * @param {array} shades defines the color opacity/shade level for the target.
 */

export const concatStateColor = (color, target, state, shades) => {
  return state.map((s, i) => (
    [
      `${s}:${target}`, 
      color, 
      shades[i] ? shades[i] :  shades[0],
    ]
      .join('-')
  ))
    .join(' ')
}

concatStateColor.propTypes = {
  color: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  state: PropTypes.array,
  shades: PropTypes.array,
}

concatStateColor.defaultProps = {
  state: [],
  shades: [500],
}

/**
 * @param {string} color the color type for target and states. 
 * @param {array} target the element targets for color and shades.
 * @param {array} shades defines the color opacity/shade level for the target.
 */

export const concatTargetColor = (color, target = [], shades = []) => {
  return target.map((t, i) => (
    [
      t, 
      color, 
      shades[i] ? shades[i] :  shades[0],
    ]
      .join('-')
  ))
    .join(' ')
}

concatTargetColor.propTypes = {
  color: PropTypes.string.isRequired,
  target: PropTypes.array.isRequired,
  shades: PropTypes.array,
}

concatTargetColor.defaultProps = {
  shades: [500],
}
