import tailwindConfig from '../../tailwind.config'

// Access theme color values for dynamically applying inline styles in React
export const getTailwindConfigColor = (color) => {
  const allColors = {
    ...tailwindConfig.theme.colors,
    ...tailwindConfig.theme.extend.colors,
  }
  const parseColor = color.split('-')
  
  const value = parseColor.length > 1 && allColors[color]
    
  return value
}
