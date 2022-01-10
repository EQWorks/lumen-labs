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

var SwitchSquare = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
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
  var switchSquareClasses = Object.freeze({
    root: classes.root,
    container: "w-5 h-5 cursor-pointer rounded-sm transition ease-in duration-200 \n      ".concat(disabled ? 'shadow-secondary-400 bg-secondary-100' : "".concat(checked ? containerColor : 'shadow-secondary-400 bg-secondary-100'), " ").concat(classes.container),
    button: "absolute switch-square-button flex flex-col items-center w-4 h-4 left-0.5 \n      ".concat(!disabled && "".concat(checked ? 'flex-col bottom-px' : 'flex-col-reverse'), " ").concat(classes.button),
    label: classes.label
  });
  return /*#__PURE__*/_react["default"].createElement(_switchBase["default"], _extends({
    id: id,
    ref: ref,
    classes: switchSquareClasses,
    checked: checked,
    onChange: onChange,
    label: label,
    disabled: disabled,
    tabIndex: tabIndex
  }, rest), /*#__PURE__*/_react["default"].createElement("div", {
    className: "switch-button ".concat(switchSquareClasses.button)
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "line w-4 h-3px bg-white rounded-xl ".concat(disabled && 'bg-secondary-400', "\n            ").concat(checked ? 'mb-2 bg-secondary-50' : 'bg-secondary-400', "\n          "),
    tabIndex: tabIndex
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "dot w-1 h-1 rounded-2px ".concat(disabled && 'border-secondary-400 bg-secondary-400', "\n            ").concat(checked ? 'w-2 h-px bg-secondary-50' : 'mb-1 border border-secondary-400', " \n          "),
    tabIndex: tabIndex
  })));
});
SwitchSquare.propTypes = {
  classes: _propTypes["default"].object,
  id: _propTypes["default"].string.isRequired,
  checked: _propTypes["default"].bool.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].number,
  color: _propTypes["default"].string
};
SwitchSquare.defaultProps = {
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
SwitchSquare.displayName = 'SwitchSquare';
var _default = SwitchSquare;
exports["default"] = _default;