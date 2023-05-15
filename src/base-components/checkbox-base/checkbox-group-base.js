import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../../utils/make-styles'
import CheckboxBase from './index'
import NestedCheckboxes from './nested-checkboxes'


const generateStyles = (props) => makeStyles({
  gridCols: {
    display: 'inline-grid',
    gridTemplateColumns: props.gridCols,
  },
})

const CheckboxGroupBase = React.forwardRef(({
  classes = { root: '', checkboxClasses: {}, gap: 2.5 },
  options,
  align = 'vertical',
  disabled = false,
  defaultValues = [],
  onChange = () => {},
  StyledCheckbox = null,
}, ref) => {
  const styles = generateStyles({ gridCols: Array(options.length).fill('auto').join(' ') })
  const alignStyleRoot = align === 'horizontal' ? `${styles.gridCols}` : 'grid-rows'

  const CheckboxComponent = StyledCheckbox || CheckboxBase
  const [groups, setGroups] = useState(options)

  return (
    <div ref={ref} className={`grid ${alignStyleRoot} gap-${classes.gap} ${classes.root}`}>
      {options.map((option, index) => {
        if (Array.isArray(option)) {
          return (
            <span key={`${option.label}-${index}`}>
              <NestedCheckboxes
                classes={classes.checkboxClasses}
                option={option}
                index={index}
                disabled={disabled}
                defaultValues={defaultValues}
                onChange={onChange}
                updateParentGroups={setGroups}
                CheckboxComponent={CheckboxComponent}
              />
            </span>)
        }
        return (
          <span key={`${option.label}-${index}`}>
            <CheckboxComponent
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
  StyledCheckbox: PropTypes.elementType,
}

CheckboxGroupBase.displayName = 'CheckboxGroupBase'

export default CheckboxGroupBase
