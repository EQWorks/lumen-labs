import React from 'react'
import PropTypes from 'prop-types'


const ProgressIndicator = ({ indicators }) => {
  return (
    <div>
      <div className='grid grid-cols-5'>
        {indicators.map((_, i) => (
          <span key={i} className='inline-flex items-center'>
            <p className='px-2 rounded-full border'>{i+1}</p>
            {i+1 !== indicators.length && <hr className='w-full' />}
          </span>
        ))}
      </div>

      <div className='grid grid-cols-5'>
        {indicators.map((indicator, i) => (
          <p key={`${indicator}-${i}`}>{indicator}</p>
        ))}
      </div>
    </div>
  )
}

ProgressIndicator.propTypes = {
  indicators: PropTypes.array.isRequired,
}

export default ProgressIndicator
