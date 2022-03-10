import { tailwindThemeColors, tailwindExtendColors } from '../../colors'

// Access theme color values for dynamically applying inline styles in React
export const getTailwindConfigColor = (color) => {
  const allColors = { ...tailwindThemeColors, ...tailwindExtendColors }
  return color.split('-').length > 1
    ? allColors[color]
    : ''
}
