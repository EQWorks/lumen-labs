import { getTailwindConfigColor } from './tailwind-config-color'
import { makeStyles } from  './make-styles'

/**
 * @param {string} lumenColor use lumen predefined color rules, default = secondary
 * @param {string} width scrollbar width, default = '0.1875rem'.
 * @param {string - Hex Color} thumbColor scrollbar thumb color'.
 * @param {string - Hex Color} trackColor scrollbar track color'.
 * @param {string - Hex Color} hoverThumbColor scrollbar thumb color onHover'.
 * @param {string - Hex Color} hoverTrackColor scrollbar track color on Hover'.
 */

export const customScroll = (lumenColor = 'secondary', width = '0.1875rem', thumbColor, trackColor, hoverThumbColor, hoverTrackColor ) => {
  const classes = makeStyles({
    CustomScroll: {
      scrollbarWidth: 'thin',
      scrollbarColor: `${thumbColor} ${trackColor}`,
      overflowY: 'scroll',

      '&::-webkit-scrollbar': {
        width: width,
        borderRadius: '0.25rem',
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: thumbColor ? thumbColor : getTailwindConfigColor(`${lumenColor}-400`),
        borderRadius: '0.25rem',
      },

      '&:hover::-webkit-scrollbar-thumb:hover': {
        backgroundColor: hoverThumbColor ? hoverThumbColor : getTailwindConfigColor(`${lumenColor}-500`),
        borderRadius: '0.25rem',
      },

      '&::-webkit-scrollbar-track': {
        backgroundColor: trackColor ? trackColor : getTailwindConfigColor(`${lumenColor}-200`),
        borderRadius: '0.25rem',
      },

      '&:hover::-webkit-scrollbar-track:hover': {
        backgroundColor: hoverTrackColor ? hoverTrackColor : getTailwindConfigColor(`${lumenColor}-300`),
        borderRadius: '0.25rem',
      },
    },
  })

  return classes.CustomScroll
}
