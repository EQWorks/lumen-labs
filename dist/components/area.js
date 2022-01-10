"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _baseComponents = require("../base-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var inputSizes = function inputSizes(size) {
  var inputSize = '';

  switch (size) {
    case 'lg':
      inputSize = 'text-sm tracking-sm leading-1.43';
      break;

    case 'md':
      inputSize = 'text-xs tracking-md leading-1.33';
      break;

    default:
      break;
  }

  return inputSize;
};

var _areaClasses = function _areaClasses(_ref) {
  var container = _ref.container,
      size = _ref.size;
  return {
    container: "font-sans ".concat(container ? container : 'w-96 flex flex-col', " ").concat(inputSizes(size)),
    label: 'text-secondary-600',
    helperText: 'mt-1.5 text-secondary-600',
    wordCount: 'mt-1.5 col-start-2 justify-self-end text-secondary-600 text-xxs tracking-lg leading-1.6'
  };
};

var _textareaBaseClasses = function _textareaBaseClasses(_ref2) {
  var focus = _ref2.focus,
      root = _ref2.root,
      filled = _ref2.filled,
      disabled = _ref2.disabled;
  return {
    root: (0, _clsx["default"])("".concat(root ? root : 'h-24 mt-1.5 rounded-sm p-sm'), {
      'border-secondary-400 hover:border-secondary-500': !disabled && !focus
    }, {
      'border-interactive-500 shadow-focused-interactive': focus
    }, {
      'border-interactive-500 bg-secondary-50': filled
    }, {
      'pointer-events-none bg-secondary-100 text-secondary-300 border-secondary-300': disabled
    }),
    textarea: (0, _clsx["default"])('outline-none text-secondary-800', {
      'bg-secondary-50': filled
    }, {
      'bg-secondary-100 placeholder-secondary-300': disabled
    })
  };
};

var Area = function Area(_ref3) {
  var classes = _ref3.classes,
      size = _ref3.size,
      inputProps = _ref3.inputProps,
      label = _ref3.label,
      maxLength = _ref3.maxLength,
      helperText = _ref3.helperText,
      disabled = _ref3.disabled,
      onSubmit = _ref3.onSubmit;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      filled = _useState2[0],
      setFilled = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      focus = _useState6[0],
      setFocus = _useState6[1];

  var root = classes.root,
      container = classes.container;

  var areaClasses = _areaClasses({
    container: container,
    size: size
  });

  var textareaBaseClasses = _textareaBaseClasses({
    size: size,
    focus: focus,
    root: root,
    filled: filled,
    disabled: disabled
  });

  var handleChange = function handleChange(val) {
    setValue(val);

    if (inputProps.onChange) {
      inputProps.onChange(val);
    }
  };

  var handleFocus = function handleFocus() {
    setFocus(true);
    setFilled(false);
  };

  var handleBlur = function handleBlur() {
    setFocus(false);
    if (value) setFilled(true);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: areaClasses.container
  }, label && /*#__PURE__*/_react["default"].createElement("p", {
    className: areaClasses.label
  }, label), /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_baseComponents.TextareaBase, _extends({}, inputProps, {
    classes: textareaBaseClasses,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    maxLength: maxLength
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-2"
  }, helperText && /*#__PURE__*/_react["default"].createElement("p", {
    className: areaClasses.helperText
  }, helperText), maxLength && /*#__PURE__*/_react["default"].createElement("p", {
    className: areaClasses.wordCount
  }, value.length || 0, "/", maxLength)));
};

Area.propTypes = {
  classes: _propTypes["default"].object,
  size: _propTypes["default"].string,
  inputProps: _propTypes["default"].object,
  label: _propTypes["default"].string,
  maxLength: _propTypes["default"].number,
  helperText: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onSubmit: _propTypes["default"].func
};
Area.defaultProps = {
  classes: {
    root: '',
    container: ''
  },
  size: 'md',
  inputProps: {},
  label: '',
  maxLength: 125,
  helperText: '',
  disabled: false,
  onSubmit: function onSubmit() {}
};
var _default = Area;
exports["default"] = _default;