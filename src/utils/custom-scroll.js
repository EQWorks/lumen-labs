import { makeStyles } from  './make-styles'

/**
 * @param {string} width scrollbar width, default = '0.1875rem'. 
 * @param {string - Hex Color} thumbColor scrollbar thumb color, default = '#c8c8c8'.
 * @param {string - Hex Color} trackColor scrollbar track color, default = '#f2f2f2'.
 */

export const customScroll = (width = '0.1875rem', thumbColor = '#c8c8c8', trackColor = '#f2f2f2') => {
  const classes = makeStyles({
    CustomScroll: {
      scrollbarWidth: 'thin',
      scrollbarColor: `${thumbColor} ${trackColor}`,
      overflow: 'auto',

      '&::-webkit-scrollbar': {
        width: width,
      },

      '&:hover::-webkit-scrollbar-thumb': {
        backgroundColor: thumbColor,
        borderRadius: '0.25rem',
      },

      '&:hover::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#AAAAAA',
        borderRadius: '0.25rem',
      },

      '&:hover::-webkit-scrollbar-track': {
        backgroundColor: trackColor,
      },

      '&:hover::-webkit-scrollbar-track:hover': {
        backgroundColor: '#EAEAEA',
      },
    },
  })

  return classes.CustomScroll
}
