import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'


const SideBarItem = forwardRef(({ 
  id, 
  classes, 
  label, 
  icon, 
  onClick, 
  isSelected, 
  ...rest 
}, ref) => {
  const sideBarItemClasses = Object.freeze({
    mainContainer: `side-bar-item__main-container px-4 py-2 text-secondary-600 cursor-pointer ${classes.mainContainer}
      hover:text-primary-700 hover:bg-primary-50 hover:border-r-2 hover:border-solid hover:border-primary-700 hover:box-border`,
    mainContainerActive: `side-bar-item__main-container--active ${classes.mainContainerActive}
      px-4 py-2 text-primary-700 bg-primary-50 border-r-2 border-solid border-primary-700 box-border cursor-pointer`,
    contentContainer: `side-bar-item__content-container flex flex-row items-center ${classes.contentContainer}`,
    icon: `side-bar-item__icon px-2 ${classes.icon}`,
    text: `side-bar-item__text text-sm ${classes.text}`,
  })

  const [isHover, setIsHover] = useState(false)

  return (
    <div 
      ref={ref}
      key={id} 
      className={`${isSelected ? sideBarItemClasses.mainContainerActive : sideBarItemClasses.mainContainer}`} 
      onClick={onClick} 
      onMouseEnter={() => setIsHover(true)} 
      onMouseLeave={() => setIsHover(false)}
      {...rest}
    >
      <div className={sideBarItemClasses.contentContainer}>
        {icon && (
          <div className={sideBarItemClasses.icon}>
            {React.cloneElement(icon, { ...icon.props, active: (isHover || isSelected) ? 1 : 0 })}
          </div>
        )}
        <div className={sideBarItemClasses.text}>
          <span>{label}</span>
        </div>
      </div>
    </div>
  )
})

SideBarItem.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.object,
  label: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
}

SideBarItem.defaultProps = {
  id: '',
  classes: { mainContainer: '', mainContainerActive: '', contentContainer: '', icon: '', text: '' },
  label: '',
  icon: null,
  onClick: () => {},
  isSelected: false,
}

SideBarItem.displayName = 'SideBarItem'

export default SideBarItem
