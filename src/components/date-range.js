import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const DateRange = forwardRef(({ classes, defaultValue, setFromValue, setToValue, showLabel }, ref) => {
  const dateRangeClasses = Object.freeze({
    form: `${classes.form ? classes.form : 'container w-96 flex'}`,
    field: `${classes.field ? classes.field : 'w-full mx-2'}`,
    label: `${classes.label ? classes.label : 'text-xs text-secondary-500'}`,
    input: `${classes.input ? classes.input : 'w-full pb-2 text-sm border-b border-secondary-500 hover:border-black hover:border-b-2 focus:outline-none'}`,
  })

  return (
    <form ref={ref} className={`${dateRangeClasses.form}`} noValidate>
      <div className={`fieldContainer ${dateRangeClasses.field}`}>
        {showLabel && <label className={`${dateRangeClasses.label}`} htmlFor="from">From</label>}
        <input className={`date-input ${dateRangeClasses.input}`} 
          type="date" id="from" name="from" pattern="\d{4}-\d{2}-\d{2}"
          value={defaultValue[0] || ''} onChange={({ target: { value } }) => setFromValue(value)}/>
      </div>
      <div className={`fieldContainer ${dateRangeClasses.field}`}>
        {showLabel && <label className={`${dateRangeClasses.label}`} htmlFor="to">To</label>}
        <input className={`date-input ${dateRangeClasses.input}`} 
          type="date" id="to" name="to" pattern="\d{4}-\d{2}-\d{2}"
          value={defaultValue[1] || ''} onChange={({ target: { value } }) => setToValue(value)}/>
      </div>
    </form>
  )
})

DateRange.propTypes = {
  classes: PropTypes.exact({
    form: PropTypes.string,
    field: PropTypes.string,
    label: PropTypes.string,
    input: PropTypes.string,
  }),
  defaultValue: PropTypes.array.isRequired,
  setFromValue: PropTypes.func.isRequired,
  setToValue: PropTypes.func.isRequired,
  showLabel: PropTypes.bool,
}

DateRange.defaultProps = {
  classes: {
    form: '',
    field: '',
    label: '',
    input: '',
  },
  showLabel: true,
}

DateRange.displayName = 'DateRange'

export default DateRange
