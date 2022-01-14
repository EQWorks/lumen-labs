import { makeStyles } from  './make-styles'

/**
 * @param {string} width scrollbar width, default = '0.125rem'. 
 * @param {string - Hex Color} thumbColor scrollbar thumb color, default = '#c8c8c8'.
 * @param {string - Hex Color} trackColor scrollbar track color, default = '#f2f2f2'.
 */

export const customScroll = (width = '0.125rem', thumbColor = '#c8c8c8', trackColor = '#f2f2f2') => {
  const classes = makeStyles({
    CustomScroll: {
      scrollbarWidth: 'thin',
      scrollbarColor: `${thumbColor} ${trackColor}`,
      overflow: 'auto',

      '&::-webkit-scrollbar': {
        width: width,
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: thumbColor,
        borderRadius: '0.25rem',
      },

      '&::-webkit-scrollbar-track': {
        backgroundColor: trackColor,
      },
    },
  })

  return classes.CustomScroll
}
