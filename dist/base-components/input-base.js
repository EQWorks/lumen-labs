"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icons = require("../icons");

var _excluded = ["classes", "value", "defaultValue", "placeholder", "onClick", "onChange", "onDelete", "startIcon", "endIcon", "prefix", "suffix", "deleteButton", "size", "required"];

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _baseClasses = function _baseClasses() {
  return {
    root: 'flex border',
    input: 'w-full'
  };
};

var InputBase = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var classes = _ref.classes,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      placeholder = _ref.placeholder,
      onClick = _ref.onClick,
      onChange = _ref.onChange,
      onDelete = _ref.onDelete,
      startIcon = _ref.startIcon,
      endIcon = _ref.endIcon,
      prefix = _ref.prefix,
      suffix = _ref.suffix,
      deleteButton = _ref.deleteButton,
      size = _ref.size,
      required = _ref.required,
      rest = _objectWithoutProperties(_ref, _excluded);

  var baseClasses = _baseClasses();

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      _value = _useState2[0],
      _setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(placeholder),
      _useState4 = _slicedToArray(_useState3, 2),
      _placeholder = _useState4[0],
      _setPlaceholder = _useState4[1];

  var inputRef = (0, _react.useRef)(null);

  var inputOnChange = function inputOnChange(e) {
    if (value === undefined || value === null) {
      _setValue(e.target.value);
    } else {
      _setValue('');
    }

    onChange("".concat(prefix && prefix) + "".concat(e.target.value) + "".concat(suffix && suffix));
  };

  var handleFocus = function handleFocus() {
    if (defaultValue) {
      _setPlaceholder(defaultValue);

      _setValue('');
    }
  };

  var handleBlur = function handleBlur() {
    if (!value && _placeholder && defaultValue) {
      _setValue(_placeholder);

      _setPlaceholder('');
    }
  };

  var handleDelete = function handleDelete(e) {
    e.stopPropagation();

    _setValue('');

    inputRef.current.focus();
    onDelete(e);
    onChange("".concat(prefix && prefix) + '' + "".concat(suffix && suffix));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    className: "".concat(baseClasses.root, " ").concat(classes.root),
    onFocus: handleFocus,
    onBlur: handleBlur
  }, startIcon && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.startIcon
  }, startIcon), prefix && /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.prefix
  }, prefix), /*#__PURE__*/_react["default"].createElement("input", _extends({
    ref: inputRef,
    className: "".concat(baseClasses.input, " ").concat(classes.input),
    value: value || _value,
    onClick: onClick,
    onChange: inputOnChange,
    placeholder: _placeholder,
    required: required
  }, rest)), suffix && /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.suffix
  }, suffix), endIcon && !(value || _value) && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.endIcon
  }, endIcon), deleteButton && (value || _value) && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.endIcon,
    onClick: handleDelete
  }, /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
    className: "fill-current text-secondary-600 cursor-pointer",
    size: size
  })));
});
InputBase.propTypes = {
  classes: _propTypes["default"].object,
  value: _propTypes["default"].string,
  defaultValue: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onDelete: _propTypes["default"].func,
  startIcon: _propTypes["default"].node,
  endIcon: _propTypes["default"].node,
  prefix: _propTypes["default"].string,
  suffix: _propTypes["default"].string,
  deleteButton: _propTypes["default"].bool,
  size: _propTypes["default"].string,
  required: _propTypes["default"].bool
};
InputBase.defaultProps = {
  classes: {
    root: '',
    input: '',
    startIon: '',
    endIcon: '',
    prefix: '',
    suffix: ''
  },
  value: null,
  defaultValue: '',
  placeholder: '',
  onClick: function onClick() {},
  onChange: function onChange() {},
  onDelete: function onDelete() {},
  startIcon: null,
  endIcon: null,
  prefix: '',
  suffix: '',
  deleteButton: true,
  size: 'md',
  required: false
};
InputBase.displayName = 'InputBase';
var _default = InputBase;
exports["default"] = _default;