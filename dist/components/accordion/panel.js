"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _panelBase = _interopRequireDefault(require("../../base-components/accordion-base/panel-base"));

var _excluded = ["children", "classes", "variant", "color"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var variants = Object.freeze({
  "default": Object.freeze({
    icon: 'w-5 h-5',
    iconRoot: 'rounded-sm bg-secondary-100',
    header: 'py-1 text-sm font-semibold'
  }),
  'left-bordered': Object.freeze({
    icon: 'w-3 h-3 fill-current',
    header: 'p-2.5 text-sm font-semibold',
    details: 'px-2.5'
  })
});

var colorConfig = function colorConfig(_ref) {
  var color = _ref.color;
  var bgShade = ['bg', color === 'primary' ? 'neutral' : color, 50].join('-');
  var textColor = ['text', color === 'primary' ? 'interactive' : color, color === 'primary' ? 500 : 700].join('-');
  if (!color) return {};
  return {
    "default": {
      icon: textColor,
      header: textColor,
      details: bgShade
    },
    'left-bordered': {
      icon: textColor,
      header: "".concat(textColor, " ").concat(bgShade),
      details: bgShade
    }
  };
};

var Panel = function Panel(_ref2) {
  var _colors$variant, _colors$variant2, _colors$variant3;

  var children = _ref2.children,
      classes = _ref2.classes,
      variant = _ref2.variant,
      color = _ref2.color,
      props = _objectWithoutProperties(_ref2, _excluded);

  var colors = (0, _react.useMemo)(function () {
    return colorConfig({
      color: color
    });
  }, [color]);
  var _classes = {
    icon: "".concat(((_colors$variant = colors[variant]) === null || _colors$variant === void 0 ? void 0 : _colors$variant.icon) || '', " ").concat(variants[variant].icon || '', " ").concat(classes.icon),
    iconRoot: (0, _clsx["default"])("".concat(variants[variant].iconRoot || '', " ").concat(classes.iconRoot), {
      'mr-2': props.alignIcon === 'start',
      'ml-2': props.alignIcon === 'end'
    }),
    header: "".concat(((_colors$variant2 = colors[variant]) === null || _colors$variant2 === void 0 ? void 0 : _colors$variant2.header) || '', " ").concat(variants[variant].header || '', " ").concat(classes.header),
    details: "".concat(((_colors$variant3 = colors[variant]) === null || _colors$variant3 === void 0 ? void 0 : _colors$variant3.details) || '', " ").concat(variants[variant].details || '', " ").concat(classes.details)
  };

  var _props = _objectSpread(_objectSpread({}, props), {}, {
    alignIcon: variant === 'left-bordered' ? 'end' : props.alignIcon
  });

  return /*#__PURE__*/_react["default"].createElement(_panelBase["default"], _extends({
    classes: _classes
  }, _props), children);
};

Panel.propTypes = {
  children: _propTypes["default"].node.isRequired,
  classes: _propTypes["default"].object,
  color: _propTypes["default"].string,
  variant: _propTypes["default"].string,
  alignIcon: _propTypes["default"].string
};
Panel.defaultProps = {
  classes: {
    details: 'h-10'
  },
  color: '',
  variant: 'default',
  alignIcon: 'start'
};
var _default = Panel;
exports["default"] = _default;