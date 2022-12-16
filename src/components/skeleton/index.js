import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { css, keyframes } from 'goober'

import { makeStyles } from '../../utils/make-styles'

// Components
import Article from './article'
import Bar from './bar'
import Map from './map'
import Pie from './pie'
import Stat from './stat'
import Line from './line'
import Pyramid from './pyramid'
import Barline from './barline'


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
    animation: ${loading} 2.5s infinite;
`

const styles = makeStyles({
  shimmer: {
    background: 'rgba(255,255,255,0.2)',
    transform: 'skewX(-20deg)',
    boxShadow: '0 0 1.875rem 1.875rem rgba(255,255,255,0.2)',
  },
})

const skeletonClasses = Object.freeze({
  container: 'skeleton__root-container bg-neutral-200 w-full h-full',
  wrapper: 'h-full relative overflow-hidden py-4 px-6',
})

const Skeleton = ({ classes, view }) => {
  const skeletonRef = useRef(null)
  const [height, setHeight] = useState(0)

  const { 
    container, 
    wrapper, 
    title, 
    article, 
    bar, 
    mapMarker, 
    mapCircle, 
    pie, 
    pieSlice, 
    statTop, 
    statBottom,
    lineCircle,
    linePath,
  } = classes

  const wireframe = {
    default: <Article ref={skeletonRef} title={title} article={article} />,
    bar: <Bar ref={skeletonRef} bar={bar} />,
    map: <Map ref={skeletonRef} mapMarker={mapMarker} mapCircle={mapCircle} />,
    pie: <Pie ref={skeletonRef} pie={pie} pieSlice={pieSlice} />,
    stat: <Stat ref={skeletonRef} statTop={statTop} statBottom={statBottom} />,
    line: <Line ref={skeletonRef} lineCircle={lineCircle} linePath={linePath} />,
    doubleline: <Line ref={skeletonRef} lineCircle={lineCircle} linePath={linePath} />,
    pyramid: <Pyramid ref={skeletonRef} bar={bar} />,
    barline: <Barline ref={skeletonRef} bar={bar} linePath={linePath} />,
  } 

  useEffect(() => {
    setHeight(skeletonRef.current.offsetHeight)
  }, [setHeight])

  return (
    <div className={`${skeletonClasses.container} ${container}`} ref={skeletonRef}>
      <div className={`${skeletonClasses.wrapper} ${wrapper}`}>
        {height ? wireframe[view] : null}
        <div className={`absolute w-full h-full top-0 left-0 ${shimmerWrapper}`}>
          <div className={`w-2/4 h-full ${styles.shimmer}`}></div>
        </div>
      </div>
    </div>
  )
}

Skeleton.propTypes = {
  classes: PropTypes.object,
  view: PropTypes.string,
}
Skeleton.defaultProps = {
  classes: { 
    container: '', 
    wrapper: '', 
    skeleton: '', 
    title: '', 
    article: '', 
    bar: '', 
    mapMarker: '', 
    mapCircle: '', 
    pie: '',
    pieSlice: '',
    statTop: '',
    statBottom: '',
    lineCircle: '',
    linePath: '',
  },
  view: 'default',
}

export default Skeleton
