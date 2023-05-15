import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const articleClasses = Object.freeze({
  title: 'w-2/4 h-5 h-5 my-3.5 bg-neutral-300 rounded-sm',
  article: 'w-full h-3 my-3.5 bg-neutral-300 rounded-sm',
})

const Article = forwardRef(({
  title = '',
  article = '',
}, ref) => (
  <div className='skeleton_article__root-container'>
    <div className={`${articleClasses.title} ${title}`} />
    {
      [...Array(ref.current.offsetHeight < 140 ? 3 : Math.round(((ref.current.offsetHeight - 45) / 22) / 1.25 - 1))]
        .map((e, i) => <div className={`${articleClasses.article} ${article}`} key={i}/>)
    }
  </div>
))

Article.propTypes = {
  title: PropTypes.string,
  article: PropTypes.string,
}

Article.displayName = 'Article'

export default Article
