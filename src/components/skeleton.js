import React from 'react'
import { css, keyframes } from 'goober'

import { makeStyles } from '../utils/make-styles'


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
    width: '90%',
    background: '#f2f2f2',
    borderRadius: '12px',
  },
  skeletonWrapper: {
    padding: '15px 25px',
    position: 'relative',
    overflow: 'hidden',
  },
  skeleton: {
    background: '#ddd',
    margin: '10px 0',
    borderRadius: '4px',
  },
  title: {
    width: '50%',
    height: '20px',
    marginBottom: '15px',
  },
  text: {
    width: '100%',
    height: '12px',
  },
  //   shimmerWrapper: {
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     width: '100%',
  //     height: '100%',
  //     animation: 'loading 2.5s infinite',
  //   },
  shimmer: {
    width: '50%',
    height: '100%',
    background: 'rgba(255,255,255,0.2)',
    transform: 'skewX(-20deg)',
    boxShadow: '0 0 30px 30px rgba(255,255,255,0.2)',
  },
})

const Skeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonWrapper}>
        <div className={styles.skeletonArticle}>
          <div className={`${styles.skeleton} ${styles.title}`} />
          <div className={`${styles.skeleton} ${styles.text}`} />
          <div className={`${styles.skeleton} ${styles.text}`} />
          <div className={`${styles.skeleton} ${styles.text}`} />
        </div>
        <div className={shimmerWrapper}>
          <div className={styles.shimmer}></div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
