"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _baseComponents = require("../base-components");

var _icons = require("../icons");

var _concatColor = require("../utils/concat-color");

var _excluded = ["classes", "variant", "open", "onClose", "type", "color", "title", "description", "button", "icon", "timeOut", "onTimeOut"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Toast = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var classes = _ref.classes,
      variant = _ref.variant,
      open = _ref.open,
      onClose = _ref.onClose,
      type = _ref.type,
      color = _ref.color,
      title = _ref.title,
      description = _ref.description,
      button = _ref.button,
      icon = _ref.icon,
      timeOut = _ref.timeOut,
      onTimeOut = _ref.onTimeOut,
      rest = _objectWithoutProperties(_ref, _excluded);

  var size = {
    horizontal: {
      root: 'w-auto',
      button: 'mr-6',
      content: 'flex flex-row items-center'
    },
    vertical: {
      root: 'w-450px',
      button: 'mt-5px',
      content: 'mx-6'
    }
  };
  var colorType = {
    light: {
      root: 'shadow-secondary-400 bg-secondary-50',
      header: 'text-secondary-900',
      description: 'text-secondary-800',
      icon: (0, _concatColor.concatTargetColor)(color, ['text'], [500]),
      closeIcon: 'text-secondary-600'
    },
    dark: {
      root: 'bg-secondary-900',
      header: 'text-secondary-50',
      description: 'text-secondary-50',
      icon: (0, _concatColor.concatTargetColor)(color, ['text'], [200]),
      closeIcon: 'text-secondary-200'
    },
    'semantic-light': {
      root: (0, _concatColor.concatTargetColor)(color, ['shadow', 'bg'], [500, 100]),
      header: 'text-secondary-900',
      description: 'text-secondary-800',
      icon: (0, _concatColor.concatTargetColor)(color, ['text'], [500]),
      closeIcon: (0, _concatColor.concatTargetColor)(color, ['text'], [500])
    },
    'semantic-dark': {
      root: (0, _concatColor.concatTargetColor)(color, ['bg'], [500]),
      header: 'text-secondary-50',
      description: 'text-secondary-100',
      icon: 'text-secondary-50',
      closeIcon: 'text-secondary-50'
    }
  };
  var toastClasses = Object.freeze({
    root: "p-2.5 text-sm font-bold tracking-sm leading-1.43 rounded-10px \n      ".concat(classes.root && classes.root, " ").concat(size[variant].root, " ").concat(colorType[type].root),
    header: "justify-between ".concat(classes.header && classes.header, " ").concat(colorType[type].header),
    title: "mr-2.5 ".concat(classes.title && classes.title),
    button: "cursor-pointer ".concat(classes.button && classes.button, " ").concat(size[variant].button, " ").concat(colorType[type].icon),
    content: "".concat(classes.content && classes.content, " ").concat(size[variant].content),
    description: "text-xs font-normal tracking-md leading-1.33 \n      ".concat(classes.description && classes.description, " ").concat(colorType[type].description),
    startIcon: "mr-2.5 stroke-current fill-current ".concat(classes.icon && classes.icon, " ").concat(colorType[type].icon),
    endIcon: "cursor-pointer stroke-current fill-current ".concat(colorType[type].closeIcon)
  });
  var toastRef = (0, _react.useRef)(null);
  var timer = '';
  (0, _react.useEffect)(function () {
    if (timeOut > 0) {
      var toastEl = toastRef.current;
      var fade = '';
      open && (timer = setTimeout(function () {
        if (onTimeOut) onTimeOut();
        onClose();
      }, timeOut));

      if (toastEl && open) {
        fade = setTimeout(function () {
          toastEl.style.visibility = 'visible';
          toastEl.style.opacity = 1;
        }, 500);
      } else if (toastEl && !open) {
        setTimeout(function () {
          toastEl.style.visibility = 'hidden';
          toastEl.style.opacity = 0;
        }, 500);
        if (fade) clearTimeout(fade);
      }
    }
  }, [open]);

  var handleOnClose = function handleOnClose() {
    onClose();
    if (timer) clearTimeout(timer);
  };

  var _button = /*#__PURE__*/_react["default"].createElement("div", {
    className: toastClasses.button
  }, button);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    ref: toastRef,
    className: "inline-flex shadow-light-40 ".concat(timeOut > 0 && 'invisible opacity-0 transition-all duration-500')
  }, /*#__PURE__*/_react["default"].createElement(_baseComponents.ToastBase, _extends({
    ref: ref,
    classes: toastClasses,
    variant: variant,
    title: title,
    description: description,
    button: button && _button,
    startIcon: icon,
    endIcon: /*#__PURE__*/_react["default"].createElement(_icons.Close, {
      size: "sm",
      onClick: handleOnClose
    })
  }, rest))));
});
Toast.propTypes = {
  classes: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['horizontal', 'vertical']),
  open: _propTypes["default"].bool,
  onClose: _propTypes["default"].func,
  type: _propTypes["default"].oneOf(['light', 'dark', 'semantic-light', 'semantic-dark']),
  color: _propTypes["default"].string,
  title: _propTypes["default"].string,
  description: _propTypes["default"].string,
  button: _propTypes["default"].node,
  icon: _propTypes["default"].node,
  timeOut: _propTypes["default"].number,
  onTimeOut: _propTypes["default"].func
};
Toast.defaultProps = {
  classes: {
    root: '',
    header: '',
    title: '',
    content: '',
    description: '',
    icon: ''
  },
  variant: 'horizontal',
  open: true,
  onClose: function onClose() {},
  type: 'light',
  color: 'info',
  title: '',
  description: '',
  button: null,
  icon: null,
  timeOut: 0,
  onTimeOut: function onTimeOut() {}
};
Toast.displayName = 'Toast';
var _default = Toast;
exports["default"] = _default;