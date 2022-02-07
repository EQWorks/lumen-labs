import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../../utils/make-styles'
import CheckboxBase from './index'


const styles = makeStyles({
  childIndent: {
    marginLeft: '0.571rem',
  },
})

const renderNestingCheckboxes = ({
  option,
  index,
  parentRef,
  onGroupChange,
  nestingChecks,
  setNestingChecks,
}) => {
  const [parentCheckbox, ...childCheckboxes] = option
  const { onChange: parentOnChange, ...parentRest } = parentCheckbox

  const handleParentChange = (p) => {
    const values = childCheckboxes.map((c) => ({ label: c.label, checked: p.checked }))
    setNestingChecks(values)
    if (parentOnChange) {
      parentOnChange(values)
    }
  }

  const handleChildChange = (value, onChange) => {
    const changedIndex = childCheckboxes.findIndex(({ label }) => label === value.label)
    if (changedIndex > -1) {
      const _children = nestingChecks.length ? [...nestingChecks] : [...childCheckboxes]
      _children.splice(changedIndex, 1, value)
      setNestingChecks(_children)
      onGroupChange([{ label: parentRef.current.name, checked: parentRef.current.checked }, ..._children])
    }
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <span key={`${option.label}-${index}`}>
      <span><CheckboxBase inputRef={parentRef} onChange={handleParentChange} {...parentRest} /></span>
      <div className={styles.childIndent}>
        {(nestingChecks.length ? nestingChecks : childCheckboxes).map(({ onChange, ...rest }, i) => {
          return (
            <span key={`${rest.label}-${i}`}>
              <CheckboxBase onChange={(v) => handleChildChange(v, onChange)} {...rest} />
            </span>
          )
        })}
      </div>
    </span>
  )
}

const CheckboxGroupBase = React.forwardRef(({ options, onChange: onGroupChange }, ref) => {
  const parentRef = useRef()
  const [nestingChecks, setNestingChecks] = useState([])

  useEffect(() => {
    const hasUnchecked = nestingChecks.filter(({ checked }) => !checked)
    const isNotAllUnchecked = hasUnchecked.length !== nestingChecks.length

    if (hasUnchecked.length && isNotAllUnchecked) {
      parentRef.current.checked = false
      parentRef.current.indeterminate = true
    } else if (!hasUnchecked.length && isNotAllUnchecked) {
      parentRef.current.checked = true
      parentRef.current.indeterminate = false
    } else {
      parentRef.current.checked = false
      parentRef.current.indeterminate = false
    }
  }, [nestingChecks])

  return (  
    <div ref={ref}>
      {options.map((option, index) => {
        if (Array.isArray(option)) {
          return renderNestingCheckboxes({
            option,
            index,
            parentRef,
            onGroupChange,
            nestingChecks,
            setNestingChecks,
          })
        }
        return (
          <span key={`${option.label}-${index}`}>
            <CheckboxBase {...option} />
          </span>
        )
      })}
    </div>
  )
})

CheckboxGroupBase.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
}
CheckboxGroupBase.defaultProps = {
  onChange: () => {},
}

CheckboxGroupBase.displayName = 'CheckboxGroupBase'

export default CheckboxGroupBase
