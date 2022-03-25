import React from 'react'
import PropTypes from 'prop-types'


const ProgressIndicator = ({ classes, indicators }) => {
  return (
    <div className={`border ${classes.root} inline-flex items-center`}>
      {indicators.map(({ label }, i) => (
        <div key={i} className='inline-flex flex-col items-center'>
          <span className='flex flex-row items-center w-full'>
            {Boolean(i) && <hr className='w-full' />}
            <p className='px-2 rounded-full border'>{i+1}</p>
            {i+1 !== indicators.length && <hr className='w-full' />}
          </span>
          <p>{label}</p>
        </div>
      ))}
    </div>
  )
}

ProgressIndicator.propTypes = {
  indicators: PropTypes.array.isRequired,
  classes: PropTypes.object,
}
ProgressIndicator.defaultProps = {
  classes: { root: '', indicators: '' },
}

export default ProgressIndicator
