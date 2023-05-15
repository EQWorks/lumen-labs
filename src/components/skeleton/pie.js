import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const pieClasses = Object.freeze({
  pieContainer: 'h-full flex justify-center',
})

const Pie = forwardRef(({
  pie = '',
  pieSlice = '',
}, ref) => (
  <div height={ref.current.offsetHeight} className={`skeleton_pie__root-container ${pieClasses.pieContainer}`}>
    <svg width={ref.current.offsetHeight >= 900 ? 240 : 180} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M177.188 90C178.741 90 180.005 91.2598 179.956 92.8123C179.431 109.628 174.2 125.981 164.832 140.001C154.943 154.802 140.887 166.337 124.442 173.149C107.996 179.961 89.9002 181.743 72.4419 178.271C54.9836 174.798 38.9472 166.226 26.3604 153.64C13.7737 141.053 5.20203 125.016 1.72937 107.558C-1.7433 90.0998 0.0389957 72.0038 6.85088 55.5585C13.6628 39.1131 25.1983 25.0571 39.9987 15.1677C54.0187 5.7999 70.3718 0.569508 87.1877 0.0439352C88.7403 -0.00458864 90 1.2592 90 2.8125V87.1875C90 88.7408 91.2592 90 92.8125 90H177.188Z" fill="#A9B7D0" className={`${pie}`}/>
      <path d="M106 2.46672C106 1.08052 107.153 -0.0478944 108.575 0.00156632C117.42 0.309337 126.145 2.20076 134.334 5.59299C143.317 9.31401 151.48 14.768 158.355 21.6435C165.23 28.5191 170.684 36.6816 174.405 45.6649C177.806 53.8746 179.698 62.623 179.999 71.4905C180.046 72.8759 178.888 74 177.466 74L108.575 74C107.153 74 106 72.8763 106 71.4901L106 2.46672Z" fill="#A9B7D0" className={`${pieSlice}`}/>
    </svg>
  </div>
))

Pie.propTypes = {
  pie: PropTypes.string,
  pieSlice: PropTypes.string,
}

Pie.displayName = 'Pie'

export default Pie
