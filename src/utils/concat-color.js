/**
 * @param {string} color the color type for target and states.
 * @param {string} target the element target for color and states.
 * @param {array} state pseudo elements state to apply to the target.
 * @param {array} shades defines the color opacity/shade level for the target DEFAULT: 500.
 */

export const concatStateColor = (color, target, state = [], shades = [500]) => {
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

/**
 * @param {string} color the color type for target and states.
 * @param {array} target the element targets for color and shades.
 * @param {array} shades defines the color opacity/shade level for the target DEFAULT: 500.
 */

export const concatTargetColor = (color, target = [], shades = [500]) => {
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
