"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./switch-base.css");

var _excluded = ["classes", "id", "checked", "onChange", "label", "disabled", "tabIndex", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SwitchBase = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var classes = _ref.classes,
      id = _ref.id,
      checked = _ref.checked,
      _onChange = _ref.onChange,
      label = _ref.label,
      disabled = _ref.disabled,
      tabIndex = _ref.tabIndex,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, _excluded);

  var switchClasses = Object.freeze({
    root: "flex items-center ".concat(classes.root),
    container: "relative flex items-center justify-between ".concat(classes.container ? classes.container : 'w-9 h-4 bg-secondary-300'),
    button: "absolute ".concat(classes.button ? classes.button : 'w-4 h-3.5 top-px left-px bg-secondary-800'),
    label: "".concat(classes.label),
    checkbox: 'w-0 h-0 hidden',
    disabled: 'cursor-not-allowed'
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "switch-root ".concat(switchClasses.root)
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({
    ref: ref,
    className: "switch-checkbox ".concat(switchClasses.checkbox),
    id: "switch-checkbox-".concat(id),
    name: id,
    type: "checkbox",
    checked: checked,
    onChange: function onChange(e) {
      _onChange(e);
    },
    disabled: disabled
  }, rest)), /*#__PURE__*/_react["default"].createElement("label", {
    className: "switch-container ".concat(switchClasses.container, " ").concat(disabled && switchClasses.disabled),
    htmlFor: "switch-checkbox-".concat(id),
    tabIndex: disabled ? -1 : 1
  }, children ? children : /*#__PURE__*/_react["default"].createElement("span", {
    className: "switch-button ".concat(switchClasses.button, " ").concat(disabled && switchClasses.disabled),
    tabIndex: tabIndex
  })), label && /*#__PURE__*/_react["default"].createElement("span", {
    className: switchClasses.label
  }, label));
});
SwitchBase.propTypes = {
  id: _propTypes["default"].string.isRequired,
  classes: _propTypes["default"].exact({
    root: _propTypes["default"].string,
    container: _propTypes["default"].string,
    button: _propTypes["default"].string,
    label: _propTypes["default"].string
  }),
  label: _propTypes["default"].string,
  checked: _propTypes["default"].bool.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  disabled: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].number,
  children: _propTypes["default"].node
};
SwitchBase.defaultProps = {
  classes: {
    root: '',
    container: '',
    button: '',
    label: ''
  },
  label: '',
  checked: false,
  disabled: false,
  tabIndex: 1
};
SwitchBase.displayName = 'SwitchBase';
var _default = SwitchBase;
exports["default"] = _default;