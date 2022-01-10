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

var CheckBadge = function CheckBadge(_ref) {
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
    transform: "matrix(5.833333333333333,0,0,5.833333333333333,0,0)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22.718,10.35,20.88,8.872a1.092,1.092,0,0,1-.4-.971l.255-2.345a2.091,2.091,0,0,0-2.307-2.308L16.08,3.5a1.093,1.093,0,0,1-.971-.4L13.631,1.263a2.157,2.157,0,0,0-3.262,0L8.891,3.1a1.086,1.086,0,0,1-.971.4L5.575,3.248A2.091,2.091,0,0,0,3.267,5.555L3.522,7.9a1.087,1.087,0,0,1-.4.971L1.282,10.35a2.092,2.092,0,0,0,0,3.262L3.12,15.09a1.088,1.088,0,0,1,.4.971l-.255,2.345a2.091,2.091,0,0,0,2.307,2.308l2.346-.255a1.092,1.092,0,0,1,.971.4L10.369,22.7a2.092,2.092,0,0,0,3.262,0l1.478-1.838a1.093,1.093,0,0,1,.971-.4l2.345.255a2.091,2.091,0,0,0,2.308-2.307l-.255-2.346a1.086,1.086,0,0,1,.4-.971l1.838-1.478a2.092,2.092,0,0,0,0-3.262ZM12.4,15.048a1.785,1.785,0,0,1-2.663.19L7.293,12.8a1,1,0,1,1,1.414-1.414l2.251,2.251,3.909-5.211a1,1,0,1,1,1.6,1.2Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  })));
};

CheckBadge.propTypes = {
  className: _propTypes["default"].string,
  size: _propTypes["default"].string
};
CheckBadge.defaultProps = {
  className: '',
  size: ''
};
var _default = CheckBadge;
exports["default"] = _default;