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

var Save = function Save(_ref) {
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
    d: "M9.16667 0H2.4625C2.24184 0.000930329 2.03056 0.0893384 1.875 0.245833L0.245833 1.875C0.0893384 2.03056 0.000930329 2.24184 0 2.4625L0 9.16667C0 9.38768 0.0877974 9.59964 0.244078 9.75592C0.400358 9.9122 0.61232 10 0.833333 10H9.16667C9.38768 10 9.59964 9.9122 9.75592 9.75592C9.9122 9.59964 10 9.38768 10 9.16667V0.833333C10 0.61232 9.9122 0.400358 9.75592 0.244078C9.59964 0.0877974 9.38768 0 9.16667 0V0ZM7.70833 0.833333C7.76359 0.833333 7.81658 0.855283 7.85565 0.894353C7.89472 0.933423 7.91667 0.986413 7.91667 1.04167V2.70833C7.91667 2.87409 7.85082 3.03306 7.73361 3.15028C7.6164 3.26749 7.45743 3.33333 7.29167 3.33333H3.125C2.95924 3.33333 2.80027 3.26749 2.68306 3.15028C2.56585 3.03306 2.5 2.87409 2.5 2.70833V1.04167C2.5 0.986413 2.52195 0.933423 2.56102 0.894353C2.60009 0.855283 2.65308 0.833333 2.70833 0.833333H7.70833ZM2.08333 9.16667C2.02808 9.16667 1.97509 9.14472 1.93602 9.10565C1.89695 9.06658 1.875 9.01359 1.875 8.95833V5.625C1.875 5.45924 1.94085 5.30027 2.05806 5.18306C2.17527 5.06585 2.33424 5 2.5 5H7.91667C8.08243 5 8.2414 5.06585 8.35861 5.18306C8.47582 5.30027 8.54167 5.45924 8.54167 5.625V8.95833C8.54167 9.01359 8.51972 9.06658 8.48065 9.10565C8.44158 9.14472 8.38859 9.16667 8.33333 9.16667H2.08333Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "0"
  })));
};

Save.propTypes = {
  className: _propTypes["default"].string,
  size: _propTypes["default"].string
};
Save.defaultProps = {
  className: '',
  size: ''
};
var _default = Save;
exports["default"] = _default;