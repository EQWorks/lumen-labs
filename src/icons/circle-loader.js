import React from 'react'
import PropTypes from 'prop-types'

import loadingCircle from '@streamlinehq/streamlinehq/img/streamline-mini-bold/interface-essential/page-controller/interface-page-controller-loading-1.svg'


const CircleLoader = ({ className }) => (<img src={loadingCircle} alt='loading' className={`w-5 h-5 ${className}`} />)

CircleLoader.propTypes = { className: PropTypes.string }
CircleLoader.defaultProps = { className: '' }

export default CircleLoader
