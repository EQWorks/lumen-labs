"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _concatColor = require("../utils/concat-color");

var _baseComponents = require("../base-components");

var _excluded = ["classes", "children", "startIcon", "endIcon", "color", "selectable"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Chip = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var classes = _ref.classes,
      children = _ref.children,
      startIcon = _ref.startIcon,
      endIcon = _ref.endIcon,
      color = _ref.color,
      selectable = _ref.selectable,
      rest = _objectWithoutProperties(_ref, _excluded);

  var borderElementsColor = (0, _concatColor.concatStateColor)(color, 'border', ['focus', 'hover'], [500]);
  var buttonColor = (0, _concatColor.concatTargetColor)(color, ['bg', 'border', 'text'], [100, 100, 500]);
  var chipClasses = Object.freeze({
    button: "\n      ".concat(classes.chip ? classes.chip : 'px-5px rounded-md', "\n      border fill-current ").concat(buttonColor, " \n      focus:outline-none ").concat(borderElementsColor, "\n      ").concat(selectable ? 'cursor-pointer' : 'pointer-events-none', "\n    "),
    content: "".concat(classes.content ? classes.content : 'text-xxs font-semibold tracking-lg leading-1.6 uppercase'),
    startIcon: "".concat(classes.startIcon ? classes.startIcon : 'mr-5px'),
    endIcon: "".concat(classes.endIcon ? classes.endIcon : 'ml-5px')
  });
  return /*#__PURE__*/_react["default"].createElement(_baseComponents.ButtonBase, _extends({
    ref: ref,
    classes: chipClasses,
    startIcon: startIcon,
    endIcon: endIcon,
    disabled: !selectable
  }, rest), children);
});
Chip.propTypes = {
  children: _propTypes["default"].any.isRequired,
  classes: _propTypes["default"].object,
  startIcon: _propTypes["default"].node,
  endIcon: _propTypes["default"].node,
  color: _propTypes["default"].string,
  selectable: _propTypes["default"].bool
};
Chip.defaultProps = {
  classes: {
    chip: '',
    content: '',
    startIcon: '',
    endIcon: ''
  },
  startIcon: null,
  endIcon: null,
  color: 'primary',
  selectable: true
};
Chip.displayName = 'Chip';
var _default = Chip;
exports["default"] = _default;