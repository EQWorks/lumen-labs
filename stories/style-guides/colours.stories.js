import React from 'react'


export default {
  title: 'Style Guide/Colours',
}

const renderColourShades = (variant, to) => {
  return (
    <div key={variant}>
      <p className='text-gray-500 mt-5 mb-1'>{variant}:</p>
      <div className='flex flex-row'>
        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => {
          const shadeClass = ['bg', variant, shade].join('-')
          if (to && shade > to) {
            return null
          }
          return (
            <div key={shade} className='flex flex-col mr-5'>
              <div className={`w-16 h-12 rounded-sm ${shadeClass}`} />
              <h6 className='text-secondary-700'>{shade}</h6>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const Shades = () => ['primary', 'secondary'].map((v) => renderColourShades(v))
export const Default = () => ['neutral', 'interactive'].map((v) => renderColourShades(v, 700))
export const Semantic = () => ['semantic-success', 'semantic-warning', 'semantic-error', 'semantic-info']
  .map((v) => renderColourShades(v, 700))
