import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'

import { FirstStep } from './steps'
import { CheckBold } from '../../icons'
import { makeStyles } from '../../utils/make-styles' 
import { getTailwindConfigColor } from '../../utils/tailwind-config-color'


const StepLabel = ({ index, label, active, complete, styles }) => (
  <div className={styles.textPosition}>
    <div className={`${styles.textContainer}`}>
      <div className={clsx(`${styles.icon}`, {
        'bg-secondary-600': !active && !complete,
        'bg-primary-500': complete || active,
        'border border-white': active && !complete,
      })}>
        { complete ? 
          <CheckBold className={`${styles.checkSize} filled-current text-secondary-50`} /> 
          : 
          <p className={clsx({
            'text-white': active || (!active && !complete),
          }, `${styles.text}`)}>{index+1}</p> }
      </div>
      <p className={clsx({
        'text-secondary-600': !active && !complete,
        'text-white': active && !complete,
        'text-primary-500': complete,
      }, `${styles.text} capitalize`)}>{label}</p>
    </div>
  </div>
)

const First = (index, label, active, complete, styles) => index === 0 ? (
  <div className={styles.container}>
    {StepLabel({ index, label, active, complete, styles })}
    <FirstStep className={clsx({ [styles.stepDefault]: !active && !complete, [styles.stepComplete]: complete, [styles.stepActive]: active })} />
  </div>
)  : null 

const MiddleStep = (index, indiLength, label, active, complete, styles, size) => index !== 0 && index !== indiLength ? (
  <div className={styles.container} style={{ left: index === 1 ? `${size}rem` : `${size + ((size*0.47) * (index - 2)) + ((size*0.47) * index)}rem` }}>
    {StepLabel({ index, label, active, complete, styles })}
    <svg id='middle' viewBox="0 0 222 39" className={styles.stepContainer} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_869_4344)">
        <mask id="path-1-inside-1_869_4344" fill="white">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.09567 33.5C3.99722 33.5 3.8525 32.1534 4.60198 31.3503L14.0031 21.2776C15.4559 19.721 15.4346 17.2992 13.9548 15.7683L4.61193 6.10307C3.69299 5.15243 3.77349 3.5 5.09567 3.5H202.096C202.836 3.5 203.582 3.67458 204.282 3.91478C204.386 3.95043 204.49 3.99071 204.595 4.03571C204.822 4.13276 209.496 9.02821 213.381 13.1229C215.851 15.7256 217.086 17.0269 217.081 18.6309C217.075 20.2349 215.832 21.5263 213.346 24.1092C209.494 28.1122 204.884 32.8613 204.595 32.9643C203.97 33.1877 203.379 33.3347 202.821 33.4116C202.589 33.4694 202.346 33.5 202.096 33.5H5.09567Z"/>
        </mask>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.09567 33.5C3.99722 33.5 3.8525 32.1534 4.60198 31.3503L14.0031 21.2776C15.4559 19.721 15.4346 17.2992 13.9548 15.7683L4.61193 6.10307C3.69299 5.15243 3.77349 3.5 5.09567 3.5H202.096C202.836 3.5 203.582 3.67458 204.282 3.91478C204.386 3.95043 204.49 3.99071 204.595 4.03571C204.822 4.13276 209.496 9.02821 213.381 13.1229C215.851 15.7256 217.086 17.0269 217.081 18.6309C217.075 20.2349 215.832 21.5263 213.346 24.1092C209.494 28.1122 204.884 32.8613 204.595 32.9643C203.97 33.1877 203.379 33.3347 202.821 33.4116C202.589 33.4694 202.346 33.5 202.096 33.5H5.09567Z" className={clsx({ [styles.stepDefault]: !active && !complete, [styles.stepComplete]: complete, [styles.stepActive]: active })}/>
        <path d="M14.0031 21.2776L12.5409 19.913H12.5409L14.0031 21.2776ZM13.9548 15.7683L15.3928 14.3782L13.9548 15.7683ZM204.595 4.03571L205.383 2.19743L205.383 2.19742L204.595 4.03571ZM213.381 13.1229L214.832 11.7462L214.832 11.7462L213.381 13.1229ZM217.081 18.6309L219.081 18.6379L217.081 18.6309ZM213.346 24.1092L211.905 22.7223L211.905 22.7223L213.346 24.1092ZM204.595 32.9643L205.268 34.8478V34.8478L204.595 32.9643ZM202.821 33.4116L202.548 31.4304L202.443 31.4449L202.339 31.4706L202.821 33.4116ZM204.282 3.91478L203.633 5.80649L204.282 3.91478ZM12.5409 19.913L3.13986 29.9857L6.0641 32.715L15.4652 22.6422L12.5409 19.913ZM12.5168 17.1583C13.2567 17.9237 13.2673 19.1347 12.5409 19.913L15.4652 22.6422C17.6444 20.3073 17.6125 16.6746 15.3928 14.3782L12.5168 17.1583ZM3.17394 7.4931L12.5168 17.1583L15.3928 14.3782L6.04992 4.71304L3.17394 7.4931ZM202.096 1.5H5.09567V5.5H202.096V1.5ZM203.633 5.80649C203.689 5.82562 203.747 5.84798 203.807 5.87401L205.383 2.19742C205.234 2.13344 205.083 2.07524 204.931 2.02307L203.633 5.80649ZM203.807 5.874C203.638 5.80155 203.521 5.72211 203.491 5.7018C203.444 5.66995 203.41 5.6439 203.395 5.63259C203.366 5.60966 203.352 5.59693 203.362 5.60581C203.379 5.62097 203.42 5.65848 203.492 5.72719C203.631 5.86104 203.833 6.06235 204.095 6.32716C204.616 6.85386 205.336 7.59501 206.175 8.46722C207.853 10.2098 209.989 12.4531 211.931 14.4997L214.832 11.7462C212.888 9.69802 210.745 7.44629 209.057 5.69317C208.214 4.81755 207.48 4.06071 206.939 3.51426C206.67 3.2425 206.44 3.01344 206.265 2.845C206.18 2.76257 206.093 2.68095 206.015 2.61173C205.977 2.57844 205.924 2.5322 205.863 2.48481C205.863 2.48421 205.662 2.31694 205.383 2.19743L203.807 5.874ZM211.931 14.4997C213.204 15.8412 214.019 16.7064 214.54 17.425C215.025 18.0949 215.081 18.4097 215.081 18.6239L219.081 18.6379C219.085 17.2482 218.527 16.1103 217.779 15.0779C217.066 14.0941 216.029 13.0073 214.832 11.7462L211.931 14.4997ZM215.081 18.6239C215.08 18.8385 215.022 19.1527 214.532 19.8183C214.007 20.5324 213.187 21.3909 211.905 22.7223L214.788 25.496C215.992 24.2446 217.036 23.1659 217.755 22.1876C218.51 21.1608 219.076 20.0272 219.081 18.6379L215.081 18.6239ZM211.905 22.7223C209.98 24.7227 207.87 26.9048 206.207 28.5978C205.375 29.4456 204.662 30.1631 204.143 30.6717C203.881 30.9278 203.682 31.1187 203.546 31.2431C203.476 31.3073 203.44 31.3374 203.431 31.3449C203.425 31.3496 203.447 31.3316 203.487 31.3036C203.507 31.2894 203.547 31.2618 203.602 31.2296C203.647 31.2038 203.762 31.1383 203.923 31.0808L205.268 34.8478C205.552 34.7464 205.755 34.5983 205.783 34.5788C205.858 34.5265 205.922 34.4755 205.966 34.4389C206.058 34.3635 206.155 34.2771 206.246 34.1937C206.433 34.0231 206.671 33.7948 206.942 33.5287C207.489 32.9927 208.224 32.2534 209.061 31.4007C210.739 29.6927 212.86 27.4988 214.788 25.496L211.905 22.7223ZM203.923 31.0808C203.41 31.2638 202.953 31.3745 202.548 31.4304L203.095 35.3928C203.804 35.295 204.529 35.1117 205.268 34.8478L203.923 31.0808ZM202.096 35.5C202.51 35.5 202.915 35.4492 203.304 35.3526L202.339 31.4706C202.263 31.4895 202.182 31.5 202.096 31.5V35.5ZM5.09567 35.5H202.096V31.5H5.09567V35.5ZM202.096 5.5C202.534 5.5 203.049 5.60613 203.633 5.80649L204.931 2.02307C204.115 1.74302 203.137 1.5 202.096 1.5V5.5ZM6.04992 4.71304C6.02906 4.69146 6.01106 4.66156 6.0016 4.63453C5.99016 4.60184 6.00727 4.62314 5.99603 4.70792C5.98448 4.79498 5.92929 5.01574 5.70888 5.22464C5.46714 5.45376 5.20475 5.5 5.09567 5.5V1.5C4.3255 1.5 3.55723 1.75279 2.95725 2.32145C2.3786 2.86989 2.1128 3.56317 2.03073 4.18216C1.87293 5.3723 2.32874 6.61874 3.17394 7.4931L6.04992 4.71304ZM5.09567 31.5C5.25081 31.5 5.52562 31.5577 5.77758 31.7814C6.01273 31.9902 6.0979 32.2278 6.12332 32.3671C6.16632 32.6025 6.0848 32.6928 6.0641 32.715L3.13986 29.9857C2.36968 30.8109 1.98578 31.976 2.18838 33.0856C2.2936 33.6618 2.57407 34.2863 3.12187 34.7726C3.68649 35.2739 4.39131 35.5 5.09567 35.5V31.5Z" fill="#FEFEFE" mask="url(#path-1-inside-1_869_4344)"/>
      </g>
      <defs>
        <filter id="filter0_d_869_4344" x="0" y="0.5" width="221.081" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.211765 0 0 0 0 0.435294 0 0 0 0 0.894118 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_869_4344"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_869_4344" result="shape"/>
        </filter>
      </defs>
    </svg>
  </div>
) : null

const LastStep = (index, indiLength, label, active, complete, styles, size) => index === indiLength ? (
  <div className={styles.container} style={{ left: `${size + ((size*0.94) * (index - 1))}rem` }}>
    {StepLabel({ index, label, active, complete, styles })}
    <svg id='last' viewBox="0 0 221 39" className={styles.stepContainer} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_869_2134)">
        <mask id="path-1-inside-1_869_2134" fill="white">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.58536 31.4536C4.84202 32.2057 4.97582 33.5 6.03325 33.5H213.009C214.666 33.5 216.009 32.1569 216.009 30.5V6.5C216.009 4.84315 214.666 3.5 213.009 3.5H6.03325C4.74614 3.5 4.67678 5.10552 5.59749 6.00493L15.5103 15.6884C17.0971 17.2386 17.1194 19.7839 15.5601 21.3616L5.58536 31.4536Z"/>
        </mask>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.58536 31.4536C4.84202 32.2057 4.97582 33.5 6.03325 33.5H213.009C214.666 33.5 216.009 32.1569 216.009 30.5V6.5C216.009 4.84315 214.666 3.5 213.009 3.5H6.03325C4.74614 3.5 4.67678 5.10552 5.59749 6.00493L15.5103 15.6884C17.0971 17.2386 17.1194 19.7839 15.5601 21.3616L5.58536 31.4536Z" className={clsx({ [styles.stepDefault]: !active && !complete, [styles.stepComplete]: complete, [styles.stepActive]: active })}/>
        <path d="M15.5103 15.6884L16.9079 14.2578L15.5103 15.6884ZM15.5601 21.3616L14.1376 19.9557H14.1376L15.5601 21.3616ZM6.03325 35.5H213.009V31.5H6.03325V35.5ZM213.009 35.5C215.771 35.5 218.009 33.2614 218.009 30.5H214.009C214.009 31.0523 213.562 31.5 213.009 31.5V35.5ZM218.009 30.5V6.5H214.009V30.5H218.009ZM218.009 6.5C218.009 3.73859 215.771 1.5 213.009 1.5V5.5C213.562 5.5 214.009 5.94771 214.009 6.5H218.009ZM213.009 1.5H6.03325V5.5H213.009V1.5ZM4.19992 7.43559L14.1127 17.1191L16.9079 14.2578L6.99506 4.57426L4.19992 7.43559ZM14.1127 17.1191C14.9061 17.8942 14.9173 19.1668 14.1376 19.9557L16.9825 22.7675C19.3216 20.401 19.2881 16.5829 16.9079 14.2578L14.1127 17.1191ZM14.1376 19.9557L4.1629 30.0477L7.00781 32.8595L16.9825 22.7675L14.1376 19.9557ZM6.03325 1.5C5.27365 1.5 4.51065 1.74885 3.91471 2.31538C3.33916 2.86251 3.07818 3.55436 3.00237 4.17124C2.85666 5.35695 3.33258 6.58831 4.19992 7.43559L6.99506 4.57426C6.98442 4.56387 6.97505 4.54862 6.97106 4.53786C6.96488 4.52122 6.98484 4.5588 6.97251 4.65912C6.95984 4.76221 6.89998 4.99646 6.67067 5.21445C6.42096 5.45184 6.14929 5.5 6.03325 5.5V1.5ZM6.03325 31.5C6.19718 31.5 6.48166 31.5602 6.74186 31.7916C6.98608 32.0089 7.07719 32.2596 7.10437 32.4158C7.15135 32.6856 7.05392 32.8129 7.00781 32.8595L4.1629 30.0477C3.37346 30.8464 2.97126 31.9969 3.16366 33.1019C3.26355 33.6756 3.53991 34.297 4.0834 34.7804C4.64286 35.278 5.3406 35.5 6.03325 35.5V31.5Z" fill="#FEFEFE" mask="url(#path-1-inside-1_869_2134)"/>
      </g>
      <defs>
        <filter id="filter0_d_869_2134" x="0.976562" y="0.5" width="219.033" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.211765 0 0 0 0 0.435294 0 0 0 0 0.894118 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_869_2134"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_869_2134" result="shape"/>
        </filter>
      </defs>
    </svg>
  </div>
) : null

const checkComplete = (startIndex, indicators) => {
  const rest = indicators.slice(startIndex)
  return rest.find(({ complete }) => complete)
}

const customClasses = (size) => {
  return makeStyles({
    container: {
      width: `${size}rem`,
      position: 'absolute',
    },
    textPosition: {
      position: 'absolute',
      width: 'inherit',
      height: '100%',
      zIndex: 1,
    },
    textContainer: {
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
      width: 'inherit',
      height: 'inherit',
      justifyContent: 'center',
    },
    icon: {
      width: `${size/12.8}rem`,
      height: `${size/12.8}rem`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontFamily: 'PT Sans',
      fontWeight: 700,
      fontSize: `${size/16}rem`,
    },
    stepDefault: {
      fill: getTailwindConfigColor('secondary-100'),
    },
    stepActive: {
      fill: getTailwindConfigColor('primary-500'),
    },
    stepComplete: {
      fill: getTailwindConfigColor('neutral-50'),
    },
    checkSize: {
      width: `${size/21.33}rem`,
    },
  })
}

const StepIndicator = ({ size = 16, indicators: _indicators }) => {

  const styles = customClasses(size)

  const indicators = useMemo(() => _indicators.map((ind, i) => {
    if (!ind.complete && checkComplete(i, _indicators)) {
      return ({ ...ind, complete: true })
    }
    if (_indicators[i-1]?.complete && !ind.complete) {
      return ({ ...ind, active: true })
    }
    return ind
  }), [_indicators])


  return (
    <div>
      {indicators.map(({ label, active, complete }, i) => (
        <div key={i}>
          {First(i, label, active, complete, styles, size)}
          {MiddleStep(i, indicators.length - 1, label, active, complete, styles, size)}
          {LastStep(i, indicators.length - 1, label, active, complete, styles, size)}
        </div>
      ))}
    </div>
  )
}

StepLabel.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  complete: PropTypes.bool.isRequired,
  styles: PropTypes.object,
}

StepIndicator.propTypes = {
  indicators: PropTypes.array.isRequired,
  size: PropTypes.number,
}

StepIndicator.displayName = 'StepIndicator'

export default StepIndicator
