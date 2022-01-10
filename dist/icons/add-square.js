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

var AddSquare = function AddSquare(_ref) {
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
    transform: "matrix(9.4,0,0,9.4,0,0)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.625 0H1.375C1.01083 0.00164412 0.662052 0.147038 0.404545 0.404545C0.147038 0.662052 0.00164412 1.01083 0 1.375L0 13.625C0.00164412 13.9892 0.147038 14.3379 0.404545 14.5955C0.662052 14.853 1.01083 14.9984 1.375 15H13.625C13.9892 14.9984 14.3379 14.853 14.5955 14.5955C14.853 14.3379 14.9984 13.9892 15 13.625V1.375C14.9984 1.01083 14.853 0.662052 14.5955 0.404545C14.3379 0.147038 13.9892 0.00164412 13.625 0V0ZM13.4375 13.4375H1.5625V1.5625H13.4375V13.4375Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.91876 8.28125H6.56251C6.60395 8.28125 6.6437 8.29771 6.673 8.32701C6.7023 8.35631 6.71876 8.39606 6.71876 8.4375V11.0812C6.71876 11.2884 6.80107 11.4872 6.94759 11.6337C7.0941 11.7802 7.29281 11.8625 7.50001 11.8625C7.70721 11.8625 7.90593 11.7802 8.05244 11.6337C8.19895 11.4872 8.28126 11.2884 8.28126 11.0812V8.4375C8.28126 8.39606 8.29772 8.35631 8.32703 8.32701C8.35633 8.29771 8.39607 8.28125 8.43751 8.28125H11.0813C11.2885 8.28125 11.4872 8.19894 11.6337 8.05242C11.7802 7.90591 11.8625 7.7072 11.8625 7.5C11.8625 7.2928 11.7802 7.09408 11.6337 6.94757C11.4872 6.80106 11.2885 6.71875 11.0813 6.71875H8.43751C8.39607 6.71875 8.35633 6.70229 8.32703 6.67298C8.29772 6.64368 8.28126 6.60394 8.28126 6.5625V3.91875C8.28126 3.71155 8.19895 3.51283 8.05244 3.36632C7.90593 3.21981 7.70721 3.1375 7.50001 3.1375C7.29281 3.1375 7.0941 3.21981 6.94759 3.36632C6.80107 3.51283 6.71876 3.71155 6.71876 3.91875V6.5625C6.71876 6.60394 6.7023 6.64368 6.673 6.67298C6.6437 6.70229 6.60395 6.71875 6.56251 6.71875H3.91876C3.71156 6.71875 3.51285 6.80106 3.36634 6.94757C3.21982 7.09408 3.13751 7.2928 3.13751 7.5C3.13751 7.7072 3.21982 7.90591 3.36634 8.05242C3.51285 8.19894 3.71156 8.28125 3.91876 8.28125Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  })));
};

AddSquare.propTypes = {
  className: _propTypes["default"].string,
  size: _propTypes["default"].string
};
AddSquare.defaultProps = {
  className: '',
  size: ''
};
var _default = AddSquare;
exports["default"] = _default;