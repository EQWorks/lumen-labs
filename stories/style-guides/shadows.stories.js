import React from 'react'


export default {
  title: 'Style Guide/Shadows',
}

const renderBoxes = (variant) => {
  const baseClass = 'w-52 h-36 rounded-sm text-center text-secondary-500 pt-14'
  return (
    <div className='grid grid-cols-3 gap-4 gap-y-10'>
      {[10, 20, 30, 40, 50, 60].map((shadow) => {
        const shadowClass = ['shadow', variant, shadow].join('-')
        return (<div key={shadow} className={`${baseClass} ${shadowClass}`}>{`shadw-${variant}-${shadow}`}</div>)
      })}
    </div>
  )
}

export const Light = () => renderBoxes('light')
export const Blue = () => renderBoxes('blue')
