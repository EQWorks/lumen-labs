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

var AddCircle = function AddCircle(_ref) {
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
    d: "M7.5 15C8.98336 15 10.4334 14.5601 11.6668 13.736C12.9001 12.9119 13.8614 11.7406 14.4291 10.3701C14.9968 8.99968 15.1453 7.49168 14.8559 6.03682C14.5665 4.58196 13.8522 3.24559 12.8033 2.19669C11.7544 1.1478 10.418 0.433495 8.96318 0.144106C7.50832 -0.145283 6.00032 0.00324202 4.62987 0.570899C3.25943 1.13856 2.08809 2.09985 1.26398 3.33322C0.439867 4.56659 0 6.01664 0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15ZM7.5 1.5625C8.67433 1.5625 9.82228 1.91072 10.7987 2.56314C11.7751 3.21557 12.5361 4.14288 12.9855 5.22781C13.4349 6.31275 13.5525 7.50658 13.3234 8.65835C13.0943 9.81011 12.5288 10.8681 11.6984 11.6984C10.8681 12.5288 9.81011 13.0943 8.65835 13.3234C7.50659 13.5525 6.31275 13.4349 5.22782 12.9855C4.14288 12.5361 3.21557 11.7751 2.56315 10.7987C1.91073 9.82228 1.5625 8.67432 1.5625 7.5C1.56415 5.92578 2.19024 4.41652 3.30338 3.30338C4.41652 2.19024 5.92579 1.56415 7.5 1.5625Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.91876 8.28125H6.56251C6.60395 8.28125 6.6437 8.29771 6.673 8.32701C6.7023 8.35631 6.71876 8.39606 6.71876 8.4375V11.0812C6.71876 11.2884 6.80107 11.4872 6.94759 11.6337C7.0941 11.7802 7.29281 11.8625 7.50001 11.8625C7.70721 11.8625 7.90593 11.7802 8.05244 11.6337C8.19895 11.4872 8.28126 11.2884 8.28126 11.0812V8.4375C8.28126 8.39606 8.29772 8.35631 8.32703 8.32701C8.35633 8.29771 8.39607 8.28125 8.43751 8.28125H11.0813C11.2885 8.28125 11.4872 8.19894 11.6337 8.05242C11.7802 7.90591 11.8625 7.7072 11.8625 7.5C11.8625 7.2928 11.7802 7.09408 11.6337 6.94757C11.4872 6.80106 11.2885 6.71875 11.0813 6.71875H8.43751C8.39607 6.71875 8.35633 6.70229 8.32703 6.67298C8.29772 6.64368 8.28126 6.60394 8.28126 6.5625V3.91875C8.28126 3.71155 8.19895 3.51283 8.05244 3.36632C7.90593 3.21981 7.70721 3.1375 7.50001 3.1375C7.29281 3.1375 7.0941 3.21981 6.94759 3.36632C6.80107 3.51283 6.71876 3.71155 6.71876 3.91875V6.5625C6.71876 6.60394 6.7023 6.64368 6.673 6.67298C6.6437 6.70229 6.60395 6.71875 6.56251 6.71875H3.91876C3.71156 6.71875 3.51285 6.80106 3.36634 6.94757C3.21982 7.09408 3.13751 7.2928 3.13751 7.5C3.13751 7.7072 3.21982 7.90591 3.36634 8.05242C3.51285 8.19894 3.71156 8.28125 3.91876 8.28125V8.28125Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  })));
};

AddCircle.propTypes = {
  className: _propTypes["default"].string,
  size: _propTypes["default"].string
};
AddCircle.defaultProps = {
  className: '',
  size: ''
};
var _default = AddCircle;
exports["default"] = _default;