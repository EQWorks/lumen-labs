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

var ShareExternalLink = function ShareExternalLink(_ref) {
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
    transform: "matrix(12,0,0,12,0,0)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.625 7.2615L11.625 0.375",
    strokeWidth: "0.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.625 4.3105V0.375H7.625",
    strokeWidth: "0.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.0625 2.875H0.8125C0.696468 2.875 0.585188 2.92109 0.503141 3.00314C0.421094 3.08519 0.375 3.19647 0.375 3.3125V11.1875C0.375 11.3035 0.421094 11.4148 0.503141 11.4969C0.585188 11.5789 0.696468 11.625 0.8125 11.625H8.6875C8.80353 11.625 8.91481 11.5789 8.99686 11.4969C9.07891 11.4148 9.125 11.3035 9.125 11.1875V5.9375",
    strokeWidth: "0.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

ShareExternalLink.propTypes = {
  className: _propTypes["default"].string,
  size: _propTypes["default"].string
};
ShareExternalLink.defaultProps = {
  className: '',
  size: ''
};
var _default = ShareExternalLink;
exports["default"] = _default;