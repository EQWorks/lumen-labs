"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["className", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5'
});

var Reset = function Reset(_ref) {
  var className = _ref.className,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    className: "".concat(iconSize[size], " ").concat(className),
    viewBox: "0 0 140 140",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    stroke: "currentColor"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    transform: "matrix(9,0,0,9,0,0)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.85625 0.781249C6.51205 0.835302 5.21445 1.28868 4.12907 2.08351C3.0437 2.87834 2.21978 3.97856 1.7625 5.24375C1.75002 5.27718 1.72648 5.30534 1.69578 5.32353C1.66508 5.34172 1.62907 5.34886 1.59375 5.34375L0.537503 5.19375C0.479274 5.18451 0.419618 5.19193 0.365427 5.21515C0.311236 5.23838 0.264721 5.27646 0.231253 5.325C0.200899 5.37491 0.184845 5.43221 0.184845 5.49062C0.184845 5.54904 0.200899 5.60634 0.231253 5.65625L1.875 8.59375C1.9006 8.63835 1.93681 8.67595 1.98042 8.70321C2.02403 8.73046 2.07369 8.74654 2.125 8.75C2.17259 8.75867 2.22159 8.7552 2.26747 8.73991C2.31336 8.72461 2.35464 8.69799 2.3875 8.6625L4.74375 6.325C4.78392 6.28362 4.81211 6.23212 4.82531 6.17599C4.83852 6.11986 4.83625 6.06119 4.81875 6.00625C4.80222 5.95038 4.76977 5.90053 4.72538 5.86279C4.68098 5.82506 4.62656 5.80106 4.56875 5.79375L3.49375 5.625C3.47058 5.62172 3.44844 5.61328 3.42897 5.6003C3.4095 5.58732 3.39319 5.57013 3.38125 5.55C3.37023 5.52764 3.36449 5.50305 3.36449 5.47812C3.36449 5.4532 3.37023 5.4286 3.38125 5.40625C3.7792 4.52522 4.41431 3.77221 5.21561 3.23139C6.01691 2.69056 6.95283 2.38323 7.91875 2.34375C8.8069 2.3127 9.688 2.51173 10.4766 2.92153C11.2651 3.33132 11.9344 3.93797 12.4194 4.68263C12.9045 5.42728 13.1888 6.28466 13.2449 7.17158C13.3009 8.0585 13.1268 8.94485 12.7394 9.74465C12.352 10.5445 11.7644 11.2305 11.0337 11.7364C10.3031 12.2422 9.45403 12.5506 8.56905 12.6316C7.68406 12.7127 6.79315 12.5636 5.98275 12.1989C5.17235 11.8341 4.46997 11.2661 3.94375 10.55C3.88777 10.4564 3.81282 10.3756 3.72373 10.3128C3.63464 10.2499 3.53338 10.2064 3.42646 10.1851C3.31955 10.1637 3.20934 10.165 3.10294 10.1887C2.99654 10.2125 2.89629 10.2583 2.80865 10.3232C2.72101 10.388 2.64791 10.4705 2.59406 10.5653C2.54021 10.6601 2.5068 10.7651 2.49598 10.8736C2.48516 10.9821 2.49716 11.0917 2.53123 11.1952C2.56529 11.2988 2.62065 11.3941 2.69375 11.475C3.38002 12.4085 4.29602 13.1486 5.3528 13.6236C6.40958 14.0985 7.57121 14.2921 8.72491 14.1856C9.8786 14.0791 10.9851 13.676 11.9371 13.0155C12.889 12.3551 13.6539 11.4597 14.1576 10.4163C14.6613 9.37291 14.8867 8.217 14.8117 7.06083C14.7368 5.90465 14.3642 4.7875 13.73 3.81785C13.0959 2.84821 12.2218 2.05903 11.1926 1.52696C10.1634 0.994888 9.01405 0.738001 7.85625 0.781249Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  })));
};

Reset.propTypes = {
  className: _propTypes["default"].string,
  size: _propTypes["default"].string
};
Reset.defaultProps = {
  className: '',
  size: ''
};
var _default = Reset;
exports["default"] = _default;