import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../../utils/make-styles'
import CheckboxBase from './index'
import NestedCheckboxes from './nested-checkboxes'


const styles = makeStyles({
  indent: { marginRight: '1.429rem' },
})

const CheckboxGroupBase = React.forwardRef(({ classes, options, align, disabled, defaultValues, onChange }, ref) => {
  const [groups, setGroups] = useState(options)

  const alignStyleRoot = align === 'horizontal' ? 'inline-flex flex-rows' : ''
  const alignStyleCheckbox = (index) => {
    if (align === 'horizontal') {
      return index === options.length - 1 ? '' : styles.indent
    }
    return ''
  }

  return (  
    <div ref={ref} className={`${alignStyleRoot} ${classes.root}`}>
      {options.map((option, index) => {
        if (Array.isArray(option)) {
          return (
            <span key={`${option.label}-${index}`} className={alignStyleCheckbox(index)}>
              <NestedCheckboxes
                classes={classes.checkboxClasses}
                option={option}
                index={index}
                disabled={disabled}
                defaultValues={defaultValues}
                onChange={onChange}
                updateParentGroups={setGroups}
              />
            </span>)
        }
        return (
          <span key={`${option.label}-${index}`} className={alignStyleCheckbox(index)}>
            <CheckboxBase
              classes={classes.checkboxClasses}
              {...{
                ...option,
                defaultChecked: defaultValues.includes(option.label),
                inputProps: { ...option.inputProps, disabled },
                onChange: (value) => onChange(groups.map((group, i) => {
                  if (`${group.label}-${i}` === `${option.label}-${index}`) {
                    return value
                  }
                  return group
                })),
              }}
            />
          </span>)
      })}
    </div>
  )
})

CheckboxGroupBase.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.object,
  align: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValues: PropTypes.array,
  onChange: PropTypes.func,
}
CheckboxGroupBase.defaultProps = {
  classes: { root: '', checkboxClasses: {} },
  align: 'vertical',
  disabled: false,
  defaultValues: [],
  onChange: () => {},
}

CheckboxGroupBase.displayName = 'CheckboxGroupBase'

export default CheckboxGroupBase
