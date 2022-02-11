import React, { useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'

const NestedCheckboxes = ({
  classes,
  option,
  index,
  disabled,
  defaultValues,
  onChange: onGroupChange,
  updateParentGroups,
  CheckboxComponent,
}) => {
  const [parentGroup, setParentGroup] = useState({ label: option[0].label, isNestingGroup: true, inputProps: { disabled } })
  const [nestingGroup, setNestingGroup] = useState([])

  const options = useMemo(() => option.reduce((acc, o) => {
    const isParentChecked = defaultValues.includes(option[0].label)
    acc.push({
      ...o,
      defaultChecked: isParentChecked ? true : defaultValues.includes(o.label),
      checked: isParentChecked ? true : defaultValues.includes(o.label),
      inputProps: { ...o.inputProps, disabled },
    })
    return acc
  }, []), [option, disabled, defaultValues])

  const [parentCheckbox, ...childCheckboxes] = options
  const { onChange: parentOnChange, ...parentRest } = parentGroup

  useEffect(() => {
    if (!nestingGroup.length) {
      setNestingGroup(childCheckboxes)
    }
    if (!Object.keys(parentGroup).length) {
      setParentGroup(parentCheckbox)
    }
  }, [nestingGroup, childCheckboxes, parentGroup, parentCheckbox])

  useEffect(() => {
    const hasUnchecked = nestingGroup.filter(({ checked }) => !checked)
    const isNotAllUnchecked = hasUnchecked.length !== nestingGroup.length

    if (hasUnchecked.length && isNotAllUnchecked) {
      setParentGroup((prev) => ({ ...prev, indeterminate: true, defaultChecked: false, checked: false }))
    } else if (!hasUnchecked.length && isNotAllUnchecked) {
      setParentGroup((prev) => ({ ...prev, indeterminate: false, defaultChecked: false, checked: true }))
    } else {
      setParentGroup((prev) => ({ ...prev, indeterminate: false, defaultChecked: false, checked: false }))
    }
  }, [nestingGroup])

  const handleParentChange = (p, index) => {
    if (parentOnChange) {
      parentOnChange(p)
    }
    const values = nestingGroup.map((c) => {
      const changes = c.inputProps.disabled ? {} : { defaultChecked: false, checked: p.checked }
      return ({ ...c, isNestingGroup: true, ...changes })
    })

    setNestingGroup(values)
    updateParentGroups((prev) => {
      const updated = prev.map((group, i) => {
        if (Array.isArray(group) && `${group[0].label}-${i}` === `${p.label}-${index}`) {
          return [p, ...values]
        }
        return group
      })
      onGroupChange(updated)
      return updated
    })
  }

  const handleChildChange = (value, onChildChange, index) => {
    if (onChildChange) {
      onChildChange(value)
    }
    const changedIndex = nestingGroup.findIndex(({ label }) => label === value.label)
    const _children = [...nestingGroup]
    _children.splice(changedIndex, 1, { ...nestingGroup[changedIndex], defaultChecked: false, ...value })
    const isAllSelected = !(_children.find(({ checked }) => !checked))
    const parent = isAllSelected ? { ...parentGroup, checked: true } : parentGroup

    setNestingGroup(_children)
    updateParentGroups((prev) => {
      const updated = prev.map((group, i) => {
        if (Array.isArray(group)) {
          const groupLabels = group.map(({ label }) => label)
          if (groupLabels.includes(value.label) && i === index) {
            return [parent, ..._children]
          }
        }
        return group
      })
      onGroupChange(updated)
      return updated
    })
  }

  return (
    <div key={`${option.label}-${index}`} className='grid grid-rows gap-1'>
      <CheckboxComponent
        classes={classes}
        onChange={(v) => handleParentChange(v, index)} {...parentRest}
      />
      {nestingGroup.map(({ onChange, ...rest }, i) => (
        <CheckboxComponent
          key={`${rest.label}-${index}-${i}`}
          classes={{ ...classes, root: `ml-8px ${classes.root}` }}
          onChange={(v) => handleChildChange(v, onChange, index)}
          {...rest}
        />))}
    </div>
  )
}

NestedCheckboxes.propTypes = {
  CheckboxComponent: PropTypes.elementType.isRequired,
  option: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  updateParentGroups: PropTypes.func.isRequired,
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  defaultValues: PropTypes.array,
  onChange: PropTypes.func,
}
NestedCheckboxes.defaultProps = {
  classes: {}, 
  disabled: false,
  defaultValues: [],
  onChange: () => {},
}

export default NestedCheckboxes
