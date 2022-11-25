import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../../utils/make-styles'

const articleStyles = (skeleton, customSkeleton) => { 
  return makeStyles({
    title: {
      width: '50%',
      height: '1.25rem',
      marginBottom: '0.938rem',
    },
    text: {
      width: '100%',
      height: '0.75rem',
    },
    skeleton,
    customSkeleton,
  })}


const Article = ({ skeleton, customSkeleton, height }) => {
  const styles = articleStyles(skeleton, customSkeleton)

  return (
    <div>
      <div className={`${styles.skeleton} ${styles.title} ${styles.customSkeleton}`} />
      {
        [...Array(height < 140 ? 3 : Math.round(((height - 45) / 22) / 1.25 - 1))]
          .map((e, i) => <div className={`${styles.skeleton} ${styles.text} ${styles.customSkeleton}`} key={i}/>)
      }
    </div>
  )
}

Article.propTypes = {
  skeleton: PropTypes.object,
  customSkeleton: PropTypes.object,
  height: PropTypes.number,
}
Article.defaultProps = {
  skeleton: {
    background: '',
    margin: '',
    borderRadius: '',
  },
  customSkeleton: '',
}

export default Article
