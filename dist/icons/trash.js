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

var Trash = function Trash(_ref) {
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
    transform: "matrix(14,0,0,14,0,0)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 3.03571C9.99815 2.89421 9.94111 2.75902 9.84105 2.65895C9.74098 2.55889 9.60579 2.50185 9.46429 2.5H7.5C7.45264 2.5 7.40722 2.48119 7.37373 2.4477C7.34024 2.41421 7.32143 2.36879 7.32143 2.32143C7.32143 1.70575 7.07685 1.11528 6.6415 0.679931C6.20615 0.244578 5.61568 0 5 0C4.38432 0 3.79385 0.244578 3.3585 0.679931C2.92315 1.11528 2.67857 1.70575 2.67857 2.32143C2.67857 2.36879 2.65976 2.41421 2.62627 2.4477C2.59278 2.48119 2.54736 2.5 2.5 2.5H0.535714C0.393634 2.5 0.257373 2.55644 0.156907 2.65691C0.0564412 2.75737 0 2.89363 0 3.03571C0 3.17779 0.0564412 3.31406 0.156907 3.41452C0.257373 3.51499 0.393634 3.57143 0.535714 3.57143H1.25C1.29736 3.57143 1.34278 3.59024 1.37627 3.62373C1.40976 3.65722 1.42857 3.70264 1.42857 3.75V8.75C1.43045 9.08094 1.56274 9.3978 1.79676 9.63181C2.03078 9.86583 2.34763 9.99813 2.67857 10H7.32143C7.65237 9.99813 7.96923 9.86583 8.20324 9.63181C8.43726 9.3978 8.56955 9.08094 8.57143 8.75V3.75C8.57143 3.70264 8.59024 3.65722 8.62373 3.62373C8.65722 3.59024 8.70264 3.57143 8.75 3.57143H9.46429C9.60579 3.56958 9.74098 3.51254 9.84105 3.41248C9.94111 3.31241 9.99815 3.17722 10 3.03571V3.03571ZM3.75 2.32143C3.75 1.98991 3.8817 1.67197 4.11612 1.43755C4.35054 1.20312 4.66848 1.07143 5 1.07143C5.33152 1.07143 5.64946 1.20312 5.88388 1.43755C6.1183 1.67197 6.25 1.98991 6.25 2.32143C6.25 2.36879 6.23119 2.41421 6.1977 2.4477C6.16421 2.48119 6.11879 2.5 6.07143 2.5H3.92857C3.88121 2.5 3.83579 2.48119 3.8023 2.4477C3.76881 2.41421 3.75 2.36879 3.75 2.32143ZM7.5 8.75C7.5 8.79736 7.48119 8.84278 7.4477 8.87627C7.41421 8.90976 7.36879 8.92857 7.32143 8.92857H2.67857C2.63121 8.92857 2.58579 8.90976 2.5523 8.87627C2.51881 8.84278 2.5 8.79736 2.5 8.75V3.75C2.5 3.70264 2.51881 3.65722 2.5523 3.62373C2.58579 3.59024 2.63121 3.57143 2.67857 3.57143H7.32143C7.36879 3.57143 7.41421 3.59024 7.4477 3.62373C7.48119 3.65722 7.5 3.70264 7.5 3.75V8.75Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.07142 7.94284C6.21227 7.94286 6.34746 7.8874 6.44772 7.78847C6.54799 7.68955 6.60526 7.55511 6.60713 7.41427V5.0857C6.60713 4.94362 6.55069 4.80736 6.45023 4.70689C6.34976 4.60643 6.2135 4.54999 6.07142 4.54999C5.92934 4.54999 5.79308 4.60643 5.69261 4.70689C5.59215 4.80736 5.53571 4.94362 5.53571 5.0857V7.41427C5.53758 7.55511 5.59485 7.68955 5.69512 7.78847C5.79538 7.8874 5.93057 7.94286 6.07142 7.94284V7.94284Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.9286 7.94284C4.06945 7.94286 4.20464 7.8874 4.3049 7.78847C4.40516 7.68955 4.46243 7.55511 4.46431 7.41427V5.0857C4.46431 4.94362 4.40787 4.80736 4.3074 4.70689C4.20694 4.60643 4.07068 4.54999 3.9286 4.54999C3.78652 4.54999 3.65026 4.60643 3.54979 4.70689C3.44932 4.80736 3.39288 4.94362 3.39288 5.0857V7.41427C3.39476 7.55511 3.45203 7.68955 3.55229 7.78847C3.65256 7.8874 3.78775 7.94286 3.9286 7.94284Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  })));
};

Trash.propTypes = {
  className: _propTypes["default"].string,
  size: _propTypes["default"].string
};
Trash.defaultProps = {
  className: '',
  size: ''
};
var _default = Trash;
exports["default"] = _default;