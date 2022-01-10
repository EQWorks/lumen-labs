"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx6 = _interopRequireDefault(require("clsx"));

var _baseComponents = require("../base-components");

var _makeStyles = require("../utils/make-styles");

var _excluded = ["children", "classes", "variant", "size", "type", "disabled"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = (0, _makeStyles.makeStyles)({
  squaredLg: {
    padding: '0.7rem'
  },
  squaredMd: {
    padding: '0.5rem'
  },
  squaredSm: {
    padding: '0.3rem'
  }
});
var sizes = Object.freeze({
  lg: 'py-2 px-4',
  md: 'py-1.5 px-2.5',
  sm: 'py-0.5 px-1.5',
  squared: Object.freeze({
    lg: styles.squaredLg,
    md: styles.squaredMd,
    sm: styles.squaredSm
  }),
  text: Object.freeze({
    lg: 'text-sm tracking-sm',
    md: 'text-xs tracking-md',
    sm: 'text-xxs tracking-lg'
  }),
  iconPadding: Object.freeze({
    startIcon: Object.freeze({
      sm: 'pr-1',
      md: 'pr-1.5',
      lg: 'pr-2.5'
    }),
    endIcon: Object.freeze({
      sm: 'pl-1',
      md: 'pl-1.5',
      lg: 'pl-2.5'
    })
  })
});

var buttonColoursTransform = function buttonColoursTransform() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'primary';
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var shade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var customShades = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var shades = {
    "default": customShades[0] || 500,
    hover: customShades[1] || 600,
    active: customShades[2] || 700
  };
  return shade.map(function (s) {
    return target.map(function (t) {
      return [s !== 'default' ? "".concat(s, ":").concat(t) : t, type, shades[s]].join('-');
    }).join(' ');
  }).join(' ');
};

var colourTransform = function colourTransform(type) {
  var _outlined, _borderless, _elevated, _filled;

  return {
    outlined: (_outlined = {}, _defineProperty(_outlined, type, [type !== 'primary' ? 'border-none' : '', buttonColoursTransform(type, ['border', 'text'], ['default', 'hover', 'active']), buttonColoursTransform(type, ['bg'], ['hover', 'active'], [50, 50, 100])].join(' ')), _defineProperty(_outlined, "disabled", 'border-secondary-500 text-secondary-500 cursor-default'), _outlined),
    borderless: (_borderless = {}, _defineProperty(_borderless, type, [buttonColoursTransform(type, ['text'], ['default', 'hover', 'active']), buttonColoursTransform(type, ['bg'], ['default', 'hover', 'active'], [50, 100, 200])].join(' ')), _defineProperty(_borderless, "disabled", 'bg-secondary-200 text-secondary-500 cursor-default'), _borderless),
    elevated: (_elevated = {}, _defineProperty(_elevated, type, ['active:border-white', 'hover:shadow-light-60', 'active:shadow-blue-10', buttonColoursTransform(type, ['text'], ['default', 'hover', 'active']), buttonColoursTransform(type, ['border'], ['hover'])].join(' ')), _defineProperty(_elevated, "disabled", 'text-secondary-500 cursor-default'), _elevated),
    filled: (_filled = {}, _defineProperty(_filled, type, buttonColoursTransform(type, ['bg'], ['default', 'hover', 'active'])), _defineProperty(_filled, "disabled", 'bg-secondary-500 cursor-default'), _filled)
  };
};

var Button = function Button(_ref) {
  var _clsx, _clsx2, _clsx3, _clsx4, _clsx5;

  var children = _ref.children,
      classes = _ref.classes,
      variant = _ref.variant,
      size = _ref.size,
      type = _ref.type,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, _excluded);

  var colors = (0, _react.useMemo)(function () {
    return colourTransform(type);
  }, [type]);
  var variants = {
    outlined: (0, _clsx6["default"])('border border-1', (_clsx = {}, _defineProperty(_clsx, colors[variant].disabled, disabled), _defineProperty(_clsx, colors[variant][type], !disabled), _clsx)),
    borderless: (0, _clsx6["default"])((_clsx2 = {}, _defineProperty(_clsx2, colors[variant].disabled, disabled), _defineProperty(_clsx2, colors[variant][type], !disabled), _clsx2)),
    elevated: (0, _clsx6["default"])('border border-white bg-white shadow-light-10', (_clsx3 = {}, _defineProperty(_clsx3, "".concat(colors[variant].disabled), disabled), _defineProperty(_clsx3, "".concat(colors[variant][type]), !disabled), _clsx3)),
    filled: (0, _clsx6["default"])('text-white', (_clsx4 = {}, _defineProperty(_clsx4, colors[variant].disabled, disabled), _defineProperty(_clsx4, colors[variant][type], !disabled), _clsx4))
  };
  var _classes = {
    button: (0, _clsx6["default"])("focus:outline-none ".concat(classes.button.borderRadius || 'rounded-sm', "\n      font-normal ").concat(sizes.text[size], " ").concat(variants[variant], " ").concat(classes.button), (_clsx5 = {}, _defineProperty(_clsx5, sizes[size], typeof children === 'string'), _defineProperty(_clsx5, sizes.squared[size], typeof children !== 'string'), _defineProperty(_clsx5, 'uppercase', size === 'sm'), _clsx5)),
    startIcon: "".concat(sizes.iconPadding.startIcon[size], " ").concat(classes.startIcon),
    endIcon: "".concat(sizes.iconPadding.endIcon[size], " ").concat(classes.endIcon)
  };
  return /*#__PURE__*/_react["default"].createElement(_baseComponents.ButtonBase, _extends({
    classes: _classes,
    disabled: disabled
  }, rest), children);
};

Button.propTypes = {
  children: _propTypes["default"].any.isRequired,
  classes: _propTypes["default"].object,
  variant: _propTypes["default"].string,
  size: _propTypes["default"].string,
  type: _propTypes["default"].string,
  disabled: _propTypes["default"].bool
};
Button.defaultProps = {
  classes: {
    button: '',
    startIcon: '',
    endIcon: ''
  },
  variant: 'outlined',
  size: '',
  type: 'primary',
  disabled: false
};
var _default = Button;
exports["default"] = _default;