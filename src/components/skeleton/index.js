import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { css, keyframes } from 'goober'

import { makeStyles } from '../../utils/make-styles'
import { getTailwindConfigColor } from '../../utils/tailwind-config-color'

// Components
import Article from './article'

const loading = keyframes`
    0% { 
        transform: translateX(-150%); 
    }

    50% {
        transform: translateX(-60%);
    }

    100% {
        transform: translateX(150%);
    }
`

const shimmerWrapper = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${loading} 2.5s infinite;
`

const styles = makeStyles({
  skeletonContainer: {
    width: '100%',
    height: '100%',
    background: getTailwindConfigColor('neutral-200'),
  },
  skeletonWrapper: {
    padding: '0.938rem 1.563rem',
    position: 'relative',
    overflow: 'hidden',
  },
  shimmer: {
    width: '50%',
    height: '100%',
    background: 'rgba(255,255,255,0.2)',
    transform: 'skewX(-20deg)',
    boxShadow: '0 0 1.875rem 1.875rem rgba(255,255,255,0.2)',
  },
})

const skeleton = {
  background: getTailwindConfigColor('neutral-300'),
  margin: '0.825rem 0',
  borderRadius: '0.25rem',
}


const Skeleton = ({ view }) => {
  const ref = useRef(null)
  const [height, setHeight] = useState(0)

  const wireframe = {
    null: <Article skeleton={skeleton} height={height} />,
  } 

  useEffect(() => {
    setHeight(ref.current.offsetHeight)
  }, [setHeight])

  return (
    <div className={`${styles.skeletonContainer}`} ref={ref}>
      <div className={`${styles.skeletonWrapper}`}>
        {height ? wireframe[view] : null}
        <div className={shimmerWrapper}>
          <div className={`${styles.shimmer}`}></div>
        </div>
      </div>
    </div>
  )
}

Skeleton.propTypes = {
  view: PropTypes.string,
}
Skeleton.defaultProps = {
  view: null,
}

export default Skeleton
