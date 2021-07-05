import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'

// Access theme color values for dynamically applying inline styles in React
export const getTailwindConfigColor = (color) => {
  const fullConfig = resolveConfig(tailwindConfig)
  const parseColor = color.split('-')

  const value = parseColor.length > 1 ? 
    fullConfig.theme.colors[parseColor[0]][parseColor[1]]
    :
    fullConfig.theme.colors[parseColor[0]]
    
  return value
}
