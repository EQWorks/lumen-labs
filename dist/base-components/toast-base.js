"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _makeStyles = require("../utils/make-styles");

var _excluded = ["classes", "variant", "title", "description", "button", "startIcon", "endIcon", "width"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ToastBase = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var classes = _ref.classes,
      variant = _ref.variant,
      title = _ref.title,
      description = _ref.description,
      button = _ref.button,
      startIcon = _ref.startIcon,
      endIcon = _ref.endIcon,
      width = _ref.width,
      rest = _objectWithoutProperties(_ref, _excluded);

  var styles = (0, _makeStyles.makeStyles)({
    root: {
      width: String(width)
    }
  });
  var toastBaseClasses = Object.freeze({
    root: "flex flex-col ".concat(classes.root ? classes.root : 'w-80 border'),
    header: "flex flex-row items-center ".concat(classes.header && classes.header),
    title: "flex flex-row items-center ".concat(classes.title && classes.title),
    content: "".concat(classes.content && classes.content),
    description: "".concat(classes.description && classes.description),
    startIcon: "".concat(classes.startIcon && classes.startIcon),
    endIcon: "".concat(classes.endIcon && classes.endIcon)
  });
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    ref: ref,
    className: "".concat(styles.root, " ").concat(toastBaseClasses.root, " ").concat(classes.root)
  }, rest), variant === 'horizontal' && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: toastBaseClasses.header
  }, startIcon && /*#__PURE__*/_react["default"].createElement("div", {
    className: toastBaseClasses.startIcon
  }, startIcon), /*#__PURE__*/_react["default"].createElement("div", {
    className: toastBaseClasses.content
  }, title && /*#__PURE__*/_react["default"].createElement("label", {
    className: toastBaseClasses.title
  }, title), button && button), endIcon && /*#__PURE__*/_react["default"].createElement("div", {
    className: toastBaseClasses.endIcon
  }, endIcon))), variant === 'vertical' && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: toastBaseClasses.header
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: toastBaseClasses.title
  }, startIcon && /*#__PURE__*/_react["default"].createElement("div", {
    className: toastBaseClasses.startIcon
  }, startIcon), title && /*#__PURE__*/_react["default"].createElement("label", null, title)), endIcon && /*#__PURE__*/_react["default"].createElement("div", {
    className: toastBaseClasses.endIcon
  }, endIcon)), /*#__PURE__*/_react["default"].createElement("div", {
    className: toastBaseClasses.content
  }, description && /*#__PURE__*/_react["default"].createElement("div", {
    className: toastBaseClasses.description
  }, description), button && button)));
});
ToastBase.propTypes = {
  classes: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['horizontal', 'vertical']),
  title: _propTypes["default"].string,
  description: _propTypes["default"].string,
  button: _propTypes["default"].node,
  startIcon: _propTypes["default"].node,
  endIcon: _propTypes["default"].node,
  width: _propTypes["default"].string
};
ToastBase.defaultProps = {
  classes: {
    root: '',
    header: '',
    title: '',
    content: '',
    description: '',
    startIcon: '',
    endIcon: ''
  },
  variant: 'horizontal',
  title: '',
  description: '',
  button: null,
  startIcon: null,
  endIcon: null,
  width: ''
};
ToastBase.displayName = 'ToastBase';
var _default = ToastBase;
exports["default"] = _default;