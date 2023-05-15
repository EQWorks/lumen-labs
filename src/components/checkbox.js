import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { makeStyles } from '../utils/make-styles'
import { CheckboxBase, CheckboxGroupBase } from '../base-components'


const styles = makeStyles({
  input: {
    width: '1.143rem',
    height: '1.143rem',
    marginRight: '0.357rem',
  },
  label: {
    fontSize: '0.857rem',
    lineHeight: '1.143rem',
  },
})

const Checkbox = ({
  classes = {
    root: '',
    input: '',
    label: '',
  },
  label = '',
  checked = null,
  defaultChecked = null,
  indeterminate = null,
  onChange = () => {},
  inputProps = {},
  ...rest
}) => {
  const [check, setCheck] = useState({ label, checked })

  useEffect(() => {
    setCheck({ label, checked })
  }, [label, checked])

  useEffect(() => {
    if (check?.indeterminate === undefined && indeterminate !== null) {
      setCheck((prev) => ({ ...prev, indeterminate }))
    }
    if ([undefined, null].includes(check?.checked) && defaultChecked !== null) {
      setCheck((prev) => ({ ...prev, checked: defaultChecked }))
    }
  }, [check, indeterminate, defaultChecked])

  return (<CheckboxBase
    classes={{
      root: `checkbox__root-container inline-flex items-center ${classes.root}`,
      input: clsx(`checkbox__input-container focus:ring-0 focus:ring-offset-0 border
        rounded-sm bg-secondary-50 border-secondary-400
        ${styles.input} ${classes.input}`,
      {
        [`text-interactive-500
          hover:text-interactive-600
          active:text-interactive-700`
        ]: (check?.checked || check?.indeterminate) && !inputProps.disabled,
        [`hover:bg-interactive-50 hover:border-interactive-300
          active:bg-interactive-50 active:border-interactive-400`
        ]: !inputProps?.disabled,
        'cursor-not-allowed bg-secondary-300 text-secondary-500': inputProps?.disabled,
      }),
      label: clsx(`checkbox__label-container font-normal align-middle ${styles.label}`, {
        'text-secondary-500': inputProps.disabled,
        'text-secondary-600': !inputProps.disabled,
        'text-secondary-800': !inputProps.disabled && (
          checked
            || check?.checked && !rest.isNestingGroup
            || check?.indeterminate && !rest.isNestingGroup
            || indeterminate && rest.isNestingGroup
        ),
      }),
    }}
    label={label}
    checked={(rest.isNestingGroup || !defaultChecked || !indeterminate) ? checked : check?.checked}
    defaultChecked={defaultChecked}
    indeterminate={indeterminate}
    onChange={(value) => {
      setCheck((prev) => ({ ...prev, ...value, indeterminate: false }))
      onChange(value)
    }}
    inputProps={inputProps}
    {...rest}
  />)
}

Checkbox.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.object,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  inputProps: PropTypes.object,
  onChange: PropTypes.func,
}

const CheckboxGroup = (props) => (<CheckboxGroupBase {...props} StyledCheckbox={Checkbox} />)

Checkbox.displayName = 'Checkbox'
Checkbox.Group = CheckboxGroup

export default Checkbox
