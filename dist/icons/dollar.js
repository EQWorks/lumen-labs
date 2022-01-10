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

var Dollar = function Dollar(_ref) {
  var className = _ref.className,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    className: "".concat(iconSize[size], " ").concat(className),
    viewBox: "0 0 140 140",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    transform: "matrix(10,0,0,10,0,0)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7,0a7,7,0,1,0,7,7A7.008,7.008,0,0,0,7,0Zm3.6,5.9L6.624,9.874a1,1,0,0,1-1.415,0L3.4,8.068A1,1,0,0,1,4.818,6.654l1.1,1.1L9.182,4.487A1,1,0,0,1,10.6,5.9Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  })), /*#__PURE__*/_react["default"].createElement("g", {
    transform: "matrix(5.833333333333333,0,0,5.833333333333333,0,0)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.5,3.75H10.8a3.3,3.3,0,0,0-3.3,3.3c0,4.95,9,4.95,9,9.9a3.3,3.3,0,0,1-3.3,3.3H7.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 3.75L12 0.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 20.25L12 23.25",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  })));
};

Dollar.propTypes = {
  className: _propTypes["default"].string,
  size: _propTypes["default"].string
};
Dollar.defaultProps = {
  className: '',
  size: ''
};
var _default = Dollar;
exports["default"] = _default;