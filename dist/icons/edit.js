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

var Edit = function Edit(_ref) {
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
    d: "M10.1187 2.19375C10.0593 2.13609 9.97969 2.10385 9.89686 2.10385C9.81403 2.10385 9.73445 2.13609 9.67498 2.19375L2.54373 9.325C2.51444 9.35405 2.49119 9.38861 2.47533 9.42669C2.45946 9.46478 2.45129 9.50562 2.45129 9.54687C2.45129 9.58813 2.45946 9.62897 2.47533 9.66705C2.49119 9.70514 2.51444 9.7397 2.54373 9.76875L5.21873 12.4437C5.24679 12.4736 5.28067 12.4975 5.3183 12.5138C5.35592 12.53 5.39648 12.5384 5.43748 12.5384C5.47848 12.5384 5.51904 12.53 5.55666 12.5138C5.59429 12.4975 5.62817 12.4736 5.65623 12.4437L12.7937 5.3125C12.8514 5.25303 12.8836 5.17345 12.8836 5.09063C12.8836 5.0078 12.8514 4.92822 12.7937 4.86875L10.1187 2.19375Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.87497 10.4437C1.83669 10.4067 1.78975 10.3799 1.73844 10.3657C1.68713 10.3515 1.63308 10.3504 1.58122 10.3625C1.5287 10.3736 1.48011 10.3986 1.44053 10.4349C1.40096 10.4711 1.37184 10.5174 1.35622 10.5687L-2.5399e-05 14.5812C-0.0189714 14.636 -0.0219811 14.6951 -0.00870467 14.7515C0.00457174 14.8079 0.033589 14.8594 0.0749746 14.9C0.114673 14.9486 0.168105 14.9842 0.228305 15.002C0.288506 15.0199 0.352684 15.0192 0.412475 15L4.42497 13.6625C4.47515 13.6447 4.52019 13.6149 4.55616 13.5757C4.59212 13.5365 4.6179 13.489 4.63122 13.4375C4.64738 13.3824 4.64774 13.324 4.63227 13.2687C4.6168 13.2135 4.58612 13.1637 4.54372 13.125L1.87497 10.4437Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.375 0.625001C13.9556 0.220203 13.3954 -0.00601959 12.8125 -0.00601959C12.2296 -0.00601959 11.6694 0.220203 11.25 0.625001L10.8062 1.06875C10.777 1.0978 10.7537 1.13236 10.7378 1.17045C10.722 1.20853 10.7138 1.24937 10.7138 1.29063C10.7138 1.33188 10.722 1.37273 10.7378 1.41081C10.7537 1.44889 10.777 1.48345 10.8062 1.5125L13.4812 4.1875C13.5404 4.24332 13.6187 4.27441 13.7 4.27441C13.7813 4.27441 13.8596 4.24332 13.9187 4.1875L14.375 3.75C14.5806 3.54504 14.7437 3.30152 14.855 3.03339C14.9663 2.76527 15.0236 2.47781 15.0236 2.1875C15.0236 1.89719 14.9663 1.60973 14.855 1.34161C14.7437 1.07348 14.5806 0.82996 14.375 0.625001Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  })));
};

Edit.propTypes = {
  className: _propTypes["default"].string,
  size: _propTypes["default"].string
};
Edit.defaultProps = {
  className: '',
  size: ''
};
var _default = Edit;
exports["default"] = _default;