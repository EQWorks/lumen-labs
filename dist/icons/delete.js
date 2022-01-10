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
  sm: 'w-2.5 h-2.5'
});

var Delete = function Delete(_ref) {
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
    d: "M24,12A12,12,0,1,0,12,24,12,12,0,0,0,24,12Zm-7.29,3.28a1,1,0,0,1,0,1.41,1,1,0,0,1-1.42,0l-3.11-3.11a.26.26,0,0,0-.35,0L8.72,16.69a1,1,0,0,1-1.41-1.41l3.11-3.11a.26.26,0,0,0,0-.35L7.31,8.71a1,1,0,0,1,0-1.42,1,1,0,0,1,1.41,0l3.11,3.11a.24.24,0,0,0,.35,0l3.11-3.11a1,1,0,1,1,1.42,1.42L13.6,11.82a.24.24,0,0,0,0,.35Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  })));
};

Delete.propTypes = {
  className: _propTypes["default"].string,
  size: _propTypes["default"].string
};
Delete.defaultProps = {
  className: '',
  size: ''
};
var _default = Delete;
exports["default"] = _default;