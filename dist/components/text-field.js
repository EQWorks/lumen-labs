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

var _area = _interopRequireDefault(require("./area"));

var _excluded = ["classes", "size", "inputProps", "label", "maxLength", "helperText", "success", "error", "required", "disabled", "deleteButton", "onChange", "onClick", "onDelete", "onSubmit"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _inputSize = function _inputSize(_ref) {
  var size = _ref.size;
  var inputSize = '';

  switch (size) {
    case 'lg':
      inputSize = {
        box: 'h-9 p-sm',
        font: 'text-sm tracking-sm leading-1.43'
      };
      break;

    case 'md':
      inputSize = {
        box: 'h-7 py-1.5 px-2.5',
        font: 'text-xs tracking-md leading-1.33'
      };
      break;

    default:
      break;
  }

  return inputSize;
};

var _textFieldClasses = function _textFieldClasses(_ref2) {
  var container = _ref2.container,
      inputSize = _ref2.inputSize,
      success = _ref2.success,
      error = _ref2.error;
  return {
    container: "flex flex-col font-sans ".concat(container ? container : 'w-250px', " ").concat(inputSize.font),
    label: 'text-secondary-600',
    helperText: (0, _clsx["default"])('mt-1.5 text-secondary-600', {
      'text-error-500': error,
      'text-success-500': success
    }),
    wordCount: 'mt-1.5 col-start-2 justify-self-end text-secondary-600 text-xxs tracking-lg leading-1.6'
  };
};

var _inputBaseClasses = function _inputBaseClasses(_ref3) {
  var label = _ref3.label,
      inputSize = _ref3.inputSize,
      focus = _ref3.focus,
      success = _ref3.success,
      error = _ref3.error,
      root = _ref3.root,
      input = _ref3.input,
      filled = _ref3.filled,
      disabled = _ref3.disabled;
  return {
    root: (0, _clsx["default"])("".concat("rounded-sm ".concat(label && 'mt-1.5', " ").concat(inputSize.box, " ").concat(root && root)), {
      'border-secondary-400 hover:border-secondary-500': !disabled && !focus && !error & !success
    }, {
      'border-interactive-500 shadow-focused-interactive': focus && !error && !success
    }, {
      'border-error-500 shadow-focused-error': error
    }, {
      'border-success-500 shadow-focused-success': success
    }, {
      'border-interactive-500 bg-secondary-50': filled
    }, {
      'pointer-events-none bg-secondary-100 text-secondary-400 border-secondary-400': disabled
    }),
    input: (0, _clsx["default"])("outline-none ".concat(input && input), {
      'bg-secondary-50': filled
    }, {
      'text-secondary-800': !disabled
    }, {
      'bg-secondary-100 text-secondary-400 placeholder-secondary-400': disabled
    }),
    startIcon: (0, _clsx["default"])('mt-0.5 mr-4 fill-current stroke-current', {
      'text-secondary-600': !disabled
    }),
    endIcon: (0, _clsx["default"])('mt-0.5 ml-4 fill-current stroke-current', {
      'text-secondary-600': !disabled,
      'text-interactive-500': focus && !error && !success,
      'text-error-500': error,
      'text-success-500': success
    }),
    prefix: 'mr-2.5 text-secondary-600',
    suffix: 'ml-2.5 text-secondary-600'
  };
};

var TextField = function TextField(_ref4) {
  var classes = _ref4.classes,
      size = _ref4.size,
      inputProps = _ref4.inputProps,
      label = _ref4.label,
      maxLength = _ref4.maxLength,
      helperText = _ref4.helperText,
      success = _ref4.success,
      error = _ref4.error,
      required = _ref4.required,
      disabled = _ref4.disabled,
      deleteButton = _ref4.deleteButton,
      onChange = _ref4.onChange,
      onClick = _ref4.onClick,
      onDelete = _ref4.onDelete,
      _onSubmit = _ref4.onSubmit,
      rest = _objectWithoutProperties(_ref4, _excluded);

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
      input = classes.input,
      container = classes.container;

  var inputSize = _inputSize({
    size: size
  });

  var textFieldClasses = _textFieldClasses({
    container: container,
    inputSize: inputSize,
    success: success,
    error: error
  });

  var inputBaseClasses = _inputBaseClasses({
    label: label,
    inputSize: inputSize,
    focus: focus,
    success: success,
    error: error,
    root: root,
    input: input,
    filled: filled,
    disabled: disabled
  });

  var handleChange = function handleChange(val) {
    setValue(val);

    if (inputProps.onChange) {
      inputProps.onChange(val);
    }

    onChange(val);
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
    className: textFieldClasses.container
  }, label && /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: textFieldClasses.label
  }, label), required && /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex flex-row ml-5px text-error-500"
  }, "*")), /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: function onSubmit(e) {
      return _onSubmit(_objectSpread(_objectSpread({}, e), {}, {
        target: e.target.children[0].children[0]
      }));
    }
  }, /*#__PURE__*/_react["default"].createElement(_baseComponents.InputBase, _extends({}, inputProps, {
    classes: inputBaseClasses,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    onClick: onClick,
    onDelete: onDelete,
    size: size,
    deleteButton: !disabled && deleteButton,
    required: required
  }, rest))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-2"
  }, helperText && /*#__PURE__*/_react["default"].createElement("p", {
    className: textFieldClasses.helperText
  }, helperText), maxLength && /*#__PURE__*/_react["default"].createElement("p", {
    className: textFieldClasses.wordCount
  }, value.length || 0, "/", maxLength)));
};

TextField.propTypes = {
  classes: _propTypes["default"].object,
  size: _propTypes["default"].string,
  inputProps: _propTypes["default"].object,
  label: _propTypes["default"].string,
  maxLength: _propTypes["default"].number,
  helperText: _propTypes["default"].string,
  success: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  deleteButton: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onDelete: _propTypes["default"].func,
  onSubmit: _propTypes["default"].func
};
TextField.defaultProps = {
  classes: {
    root: '',
    input: '',
    container: ''
  },
  size: 'md',
  inputProps: {},
  label: '',
  maxLength: null,
  helperText: '',
  success: false,
  error: false,
  required: false,
  disabled: false,
  deleteButton: true,
  onChange: function onChange() {},
  onClick: function onClick() {},
  onDelete: function onDelete() {},
  onSubmit: function onSubmit() {}
};
TextField.Area = _area["default"];
var _default = TextField;
exports["default"] = _default;