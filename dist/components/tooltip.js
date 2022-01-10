"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _baseComponents = require("../base-components");

var _excluded = ["classes", "children", "type", "title", "description", "width", "position", "arrow", "delay"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tooltip = function Tooltip(_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      type = _ref.type,
      title = _ref.title,
      description = _ref.description,
      width = _ref.width,
      position = _ref.position,
      arrow = _ref.arrow,
      delay = _ref.delay,
      rest = _objectWithoutProperties(_ref, _excluded);

  var colorType = Object.freeze({
    light: {
      root: 'bg-secondary-50',
      header: 'text-secondary-800',
      description: 'text-secondary-600'
    },
    dark: {
      root: 'bg-neutral-700',
      header: 'text-neutral-50',
      description: 'text-neutral-300'
    }
  });
  var arrowStyles = Object.freeze({
    top: '-top-3.5',
    left: '-left-3.5',
    bottom: '-bottom-3.5',
    right: '-right-3.5'
  });
  var tooltipPosition = Object.freeze({
    top: "bottom-full ".concat(arrow ? 'mb-9px' : 'mb-5px'),
    left: "right-full ".concat(arrow ? 'mr-9px' : 'mr-5px'),
    bottom: "top-full ".concat(arrow ? 'mt-9px' : 'mt-5px'),
    right: "left-full ".concat(arrow ? 'ml-9px' : 'ml-5px')
  });
  var tooltipClasses = Object.freeze({
    root: "tooltip absolute p-2.5 invisible opacity-0 rounded-sm shadow-dark-10 z-20 transition-all duration-500 ".concat(classes.root && classes.root, " ").concat(colorType[type].root, " ").concat(tooltipPosition[position]),
    arrow: "tooltip w-2.5 h-2.5 absolute invisible opacity-0 transform rotate-45 z-20 transition-all duration-500 ".concat(classes.arrow, " ").concat(arrowStyles[position], " ").concat(colorType[type].root),
    header: "header text-xs font-bold tracking-md leading-1.33 capitalize ".concat(title && 'mb-5px', " ").concat(classes.header && classes.header, " ").concat(colorType[type].header),
    title: "title ".concat(classes.title && classes.title),
    content: "content ".concat(classes.content && classes.content),
    description: "description text-xxs font-normal tracking-md leading-1.2 \n      ".concat(classes.description && classes.description, " ").concat(colorType[type].description)
  });
  var tooltipRef = (0, _react.useRef)(null);
  var timeOut = '';

  var handleMouseEnter = function handleMouseEnter() {
    var tooltipEl = tooltipRef.current.getElementsByClassName('tooltip');
    timeOut = setTimeout(function () {
      Array.from(tooltipEl).forEach(function (el) {
        el.style.visibility = 'visible';
        el.style.opacity = 1;
      });
    }, delay);
  };

  var handleMouseLeave = function handleMouseLeave() {
    var tooltipEl = tooltipRef.current.getElementsByClassName('tooltip');
    Array.from(tooltipEl).forEach(function (el) {
      el.style.visibility = 'hidden';
      el.style.opacity = 0;
    });
    if (timeOut) clearTimeout(timeOut);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: tooltipRef,
    className: "relative inline-flex flex-col items-center justify-center",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/_react["default"].createElement(_baseComponents.ToastBase, _extends({
    classes: tooltipClasses,
    variant: "vertical",
    title: title,
    description: description,
    width: width
  }, rest)), arrow && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "shadow-dark-10 ".concat(tooltipClasses.arrow),
    style: {
      zIndex: 19
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: tooltipClasses.arrow
  })), children);
};

Tooltip.propTypes = {
  classes: _propTypes["default"].object,
  children: _propTypes["default"].any,
  onClose: _propTypes["default"].func,
  type: _propTypes["default"].oneOf(['light', 'dark']),
  title: _propTypes["default"].string,
  description: _propTypes["default"].string,
  width: _propTypes["default"].string,
  position: _propTypes["default"].oneOf(['top', 'right', 'bottom', 'left']),
  arrow: _propTypes["default"].bool,
  delay: _propTypes["default"].number
};
Tooltip.defaultProps = {
  classes: {
    root: '',
    arrow: '',
    header: '',
    title: '',
    content: '',
    description: ''
  },
  onClose: function onClose() {},
  type: 'light',
  title: '',
  description: '',
  width: 'auto',
  position: 'top',
  arrow: true,
  delay: 0
};
Tooltip.displayName = 'Tooltip';
var _default = Tooltip;
exports["default"] = _default;