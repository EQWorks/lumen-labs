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
  lg: 'w-6 h-6',
  md: 'w-4 h-4',
  sm: 'w-3 h-3'
});

var CircleLoading = function CircleLoading(_ref) {
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
    d: "M12 0.747L12 4.497",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 23.247L12 19.497",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.045 4.042L6.697 6.694",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19.955 19.952L17.303 17.301",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0.75 11.997L4.5 11.997",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M23.25 11.997L19.5 11.997",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.045 19.952L6.697 17.301",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19.955 4.042L17.303 6.694",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  })));
};

CircleLoading.propTypes = {
  className: _propTypes["default"].string,
  size: _propTypes["default"].string
};
CircleLoading.defaultProps = {
  className: '',
  size: ''
};
var _default = CircleLoading;
exports["default"] = _default;