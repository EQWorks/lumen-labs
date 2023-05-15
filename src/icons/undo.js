import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Undo = ({
  className = '',
  size = '',
  ...props
}) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 -.3 13 15"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0.3"
    {...props}
  >
    <g transform="matrix(0.965,0,0,0.965,0,0)">
      <path
        d="M6.45 2.5C6.42028 2.50007 6.39121 2.49132 6.36648 2.47484C6.34174 2.45836 6.32246 2.43491 6.31107 2.40745C6.29969 2.38 6.29672 2.34978 6.30254 2.32064C6.30836 2.29149 6.3227 2.26473 6.34375 2.24375L7.51875 1.06875C7.63644 0.951061 7.70256 0.791439 7.70256 0.625C7.70256 0.458562 7.63644 0.29894 7.51875 0.18125C7.40106 0.0635606 7.24144 -0.0025568 7.075 -0.0025568C6.90857 -0.0025568 6.74894 0.0635606 6.63125 0.18125L4.13125 2.68125C4.07267 2.73935 4.02618 2.80848 3.99445 2.88464C3.96272 2.9608 3.94638 3.04249 3.94638 3.125C3.94638 3.20751 3.96272 3.2892 3.99445 3.36536C4.02618 3.44152 4.07267 3.51065 4.13125 3.56875L6.63125 6.06875C6.68953 6.12702 6.75871 6.17325 6.83485 6.20479C6.91099 6.23633 6.99259 6.25256 7.075 6.25256C7.15742 6.25256 7.23902 6.23633 7.31516 6.20479C7.3913 6.17325 7.46048 6.12702 7.51875 6.06875C7.57703 6.01048 7.62325 5.9413 7.65479 5.86516C7.68633 5.78902 7.70256 5.70741 7.70256 5.625C7.70256 5.54259 7.68633 5.46098 7.65479 5.38484C7.62325 5.30871 7.57703 5.23952 7.51875 5.18125L6.34375 4.00625C6.3227 3.98527 6.30836 3.95851 6.30254 3.92937C6.29672 3.90022 6.29969 3.87 6.31107 3.84255C6.32246 3.81509 6.34174 3.79164 6.36648 3.77516C6.39121 3.75869 6.42028 3.74993 6.45 3.75C7.77609 3.75 9.04786 4.27678 9.98554 5.21447C10.9232 6.15215 11.45 7.42392 11.45 8.75C11.45 10.0761 10.9232 11.3479 9.98554 12.2855C9.04786 13.2232 7.77609 13.75 6.45 13.75C6.28424 13.75 6.12527 13.8158 6.00806 13.9331C5.89085 14.0503 5.825 14.2092 5.825 14.375C5.825 14.5408 5.89085 14.6997 6.00806 14.8169C6.12527 14.9342 6.28424 15 6.45 15C8.10761 15 9.69732 14.3415 10.8694 13.1694C12.0415 11.9973 12.7 10.4076 12.7 8.75C12.7 7.0924 12.0415 5.50269 10.8694 4.33058C9.69732 3.15848 8.10761 2.5 6.45 2.5Z" />
      <path
        d="M4.51876 13.3625C4.13502 13.1974 3.7721 12.9876 3.43751 12.7375C3.30324 12.638 3.13497 12.596 2.9697 12.6206C2.80443 12.6452 2.65572 12.7345 2.55626 12.8687C2.4568 13.003 2.41476 13.1713 2.43937 13.3366C2.46399 13.5018 2.55324 13.6505 2.68751 13.75C3.1015 14.0631 3.5529 14.3235 4.03126 14.525C4.10716 14.5568 4.18858 14.5732 4.27086 14.5734C4.35314 14.5737 4.43465 14.5576 4.51072 14.5263C4.58679 14.4949 4.65592 14.4489 4.71414 14.3907C4.77237 14.3326 4.81854 14.2635 4.85001 14.1875C4.88292 14.1116 4.90046 14.03 4.9016 13.9473C4.90274 13.8646 4.88747 13.7826 4.85666 13.7058C4.82585 13.6291 4.78012 13.5592 4.72211 13.5003C4.66411 13.4414 4.59499 13.3945 4.51876 13.3625Z" />
      <path
        d="M1.5375 9.7C1.52149 9.61793 1.48948 9.5398 1.44328 9.4701C1.39709 9.4004 1.33762 9.34048 1.26826 9.29376C1.19891 9.24704 1.12103 9.21443 1.03908 9.19781C0.957124 9.18119 0.872699 9.18087 0.790623 9.19688C0.708547 9.21288 0.630427 9.2449 0.560723 9.29109C0.49102 9.33729 0.431097 9.39676 0.384378 9.46611C0.337658 9.53547 0.305057 9.61334 0.288434 9.6953C0.271811 9.77725 0.271493 9.86167 0.287498 9.94375C0.393383 10.4853 0.569891 11.0106 0.812498 11.5063C0.848612 11.5801 0.898921 11.6462 0.960554 11.7006C1.02219 11.755 1.09394 11.7968 1.17171 11.8235C1.24947 11.8501 1.33174 11.8613 1.41381 11.8562C1.49587 11.8511 1.57613 11.8299 1.65 11.7938C1.72387 11.7576 1.7899 11.7073 1.84432 11.6457C1.89875 11.5841 1.9405 11.5123 1.9672 11.4345C1.9939 11.3568 2.00501 11.2745 1.99992 11.1924C1.99482 11.1104 1.97361 11.0301 1.9375 10.9563C1.7493 10.557 1.6148 10.1346 1.5375 9.7Z" />
      <path
        d="M1.77501 5.55625C1.6283 5.47922 1.45701 5.4636 1.29879 5.51282C1.14057 5.56205 1.00837 5.67209 0.931256 5.81875C0.660193 6.32358 0.462376 6.86442 0.343756 7.425C0.319618 7.50744 0.312733 7.59397 0.323531 7.67919C0.334328 7.76441 0.362577 7.84649 0.406514 7.9203C0.450451 7.99412 0.509131 8.05808 0.578893 8.1082C0.648655 8.15833 0.728 8.19353 0.811975 8.21162C0.89595 8.2297 0.982752 8.23028 1.06696 8.21333C1.15117 8.19637 1.23098 8.16223 1.30141 8.11305C1.37184 8.06387 1.43137 8.0007 1.4763 7.92748C1.52122 7.85426 1.55057 7.77257 1.56251 7.6875C1.66135 7.23956 1.81897 6.80664 2.03126 6.4C2.10876 6.25405 2.12532 6.08335 2.0773 5.92523C2.02928 5.76711 1.92059 5.63445 1.77501 5.55625Z" />
    </g>
  </svg>
)

Undo.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default Undo
