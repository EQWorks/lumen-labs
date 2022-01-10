"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _concatColor = require("../../utils/concat-color");

var _switchBase = _interopRequireDefault(require("../../base-components/switch-base"));

var _excluded = ["classes", "id", "checked", "onChange", "label", "disabled", "tabIndex", "color"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SwitchRect = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var classes = _ref.classes,
      id = _ref.id,
      checked = _ref.checked,
      onChange = _ref.onChange,
      label = _ref.label,
      disabled = _ref.disabled,
      tabIndex = _ref.tabIndex,
      color = _ref.color,
      rest = _objectWithoutProperties(_ref, _excluded);

  var containerColor = (0, _concatColor.concatTargetColor)(color, ['bg'], [500]);
  var switchRectClasses = Object.freeze({
    root: classes.root,
    container: "w-6 h-4 cursor-pointer rounded-3px transition ease-in duration-200\n      ".concat(disabled ? 'shadow-secondary-400 bg-secondary-100' : "".concat(checked ? containerColor : 'shadow-secondary-400 bg-secondary-100'), " ").concat(classes.container),
    button: "h-3 w-5px inset-0.5 bg-white rounded-2px duration-200 \n      ".concat(disabled ? 'bg-secondary-400' : "".concat(checked ? 'bg-secondary-50' : 'bg-secondary-400'), " ").concat(classes.button),
    label: classes.label
  });
  return /*#__PURE__*/_react["default"].createElement(_switchBase["default"], _extends({
    id: id,
    ref: ref,
    classes: switchRectClasses,
    checked: checked,
    onChange: onChange,
    label: label,
    disabled: disabled,
    tabIndex: tabIndex
  }, rest));
});
SwitchRect.propTypes = {
  classes: _propTypes["default"].object,
  id: _propTypes["default"].string.isRequired,
  checked: _propTypes["default"].bool.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].number,
  color: _propTypes["default"].string
};
SwitchRect.defaultProps = {
  classes: {
    root: '',
    container: '',
    button: '',
    label: ''
  },
  checked: true,
  label: '',
  disabled: false,
  tabIndex: 1,
  color: 'interactive'
};
SwitchRect.displayName = 'SwitchRect';
var _default = SwitchRect;
exports["default"] = _default;