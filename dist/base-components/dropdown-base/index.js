"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _react2 = require("@headlessui/react");

require("./dropdown-base.css");

var _excluded = ["classes", "renderSelectedOptions", "button", "onClick", "open", "startIcon", "endIcon", "size", "children", "placeholder", "multiSelect", "customTrigger", "overflow", "disabled"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _contentSize = function _contentSize(size, multiSelect, selectedOptions) {
  var contentSize = '';

  switch (size) {
    case 'lg':
      contentSize = {
        menu: 'py-5px',
        box: "min-h-9 px-2.5 ".concat(selectedOptions && multiSelect ? 'py-9px' : 'py-2'),
        font: 'text-sm tracking-sm leading-1.43',
        icon: 'mb-9px'
      };
      break;

    case 'md':
      contentSize = {
        menu: 'py-3px',
        box: "min-h-7 px-2.5 ".concat(selectedOptions && multiSelect ? 'p-5px' : 'py-1.5'),
        font: 'text-xs tracking-md leading-1.33',
        icon: 'mb-5px'
      };
      break;

    default:
      break;
  }

  return contentSize;
};

var DropdownBase = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _renderSelectedOption, _renderSelectedOption2;

  var classes = _ref.classes,
      renderSelectedOptions = _ref.renderSelectedOptions,
      button = _ref.button,
      onClick = _ref.onClick,
      open = _ref.open,
      startIcon = _ref.startIcon,
      endIcon = _ref.endIcon,
      size = _ref.size,
      children = _ref.children,
      placeholder = _ref.placeholder,
      multiSelect = _ref.multiSelect,
      customTrigger = _ref.customTrigger,
      overflow = _ref.overflow,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, _excluded);

  var selectedOptions = typeof renderSelectedOptions === 'function' && Boolean((_renderSelectedOption = renderSelectedOptions()) === null || _renderSelectedOption === void 0 ? void 0 : (_renderSelectedOption2 = _renderSelectedOption.props) === null || _renderSelectedOption2 === void 0 ? void 0 : _renderSelectedOption2.children);

  var contentSize = _contentSize(size, multiSelect, selectedOptions);

  var dropdownClasses = Object.freeze({
    button: (0, _clsx["default"])("font-sans cursor-pointer border rounded-sm ".concat(classes.button ? classes.button : 'w-250px'), {
      'border-secondary-400 hover:border-secondary-500': !disabled && !open
    }, {
      'border-interactive-500 shadow-focused-interactive': open && !disabled
    }, {
      'pointer-events-none bg-secondary-100 text-secondary-400 border-secondary-400': disabled
    }),
    content: "flex justify-between items-center ".concat(contentSize.box, " ").concat(classes.content ? classes.content : 'w-full'),
    placeholder: "normal-case ".concat(disabled ? 'text-secondary-300' : 'text-secondary-400'),
    startIcon: (0, _clsx["default"])("mr-2.5 fill-current stroke-current ".concat(selectedOptions && multiSelect && contentSize.icon), {
      'text-secondary-600': !disabled
    }),
    endIcon: (0, _clsx["default"])("fill-current stroke-current \n      ".concat(selectedOptions && multiSelect && contentSize.icon, "\n      ").concat(overflow === 'horizontal' && 'ml-2.5'), {
      'text-secondary-600': !disabled
    }, {
      'text-interactive-500': open && !disabled
    })
  });
  var containerClasses = Object.freeze({
    root: "relative ".concat(contentSize.font, " ").concat(classes.root),
    menu: "absolute max-h-screen overflow-y-auto font-sans bg-white z-10 shadow-blue-30 mt-5px border rounded-sm border-secondary-400 focus:outline-none\n      ".concat(contentSize.menu, " ").concat(classes.menu ? classes.menu : 'w-full')
  });

  var _button = /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(selectedOptions && multiSelect && 'pb-0', " ").concat(dropdownClasses.content)
  }, startIcon && /*#__PURE__*/_react["default"].createElement("div", {
    className: dropdownClasses.startIcon
  }, startIcon), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-content flex flex-row capitalize whitespace-nowrap \n        ".concat(overflow === 'vertical' && selectedOptions && 'flex-wrap', "\n        ").concat(overflow === 'horizontal' && selectedOptions && 'scroll-overlay overflow-x-auto overflow-y-hidden')
  }, selectedOptions ? renderSelectedOptions() : /*#__PURE__*/_react["default"].createElement("span", {
    className: dropdownClasses.placeholder
  }, placeholder)), endIcon && /*#__PURE__*/_react["default"].createElement("div", {
    className: dropdownClasses.endIcon
  }, endIcon));

  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    ref: ref,
    className: containerClasses.root
  }, rest), /*#__PURE__*/_react["default"].createElement(_react2.Menu, null, customTrigger || /*#__PURE__*/_react["default"].createElement(_react2.Menu.Button, {
    as: "div"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(button ? 'button-container' : dropdownClasses.button),
    onClick: onClick
  }, button ? button : _button)), open && /*#__PURE__*/_react["default"].createElement(_react2.Menu.Items, {
    "static": true,
    className: containerClasses.menu
  }, children)));
});
DropdownBase.propTypes = {
  classes: _propTypes["default"].exact({
    root: _propTypes["default"].string,
    button: _propTypes["default"].string,
    content: _propTypes["default"].string,
    menu: _propTypes["default"].string
  }),
  children: _propTypes["default"].node,
  renderSelectedOptions: _propTypes["default"].func,
  button: _propTypes["default"].node,
  onClick: _propTypes["default"].func,
  open: _propTypes["default"].bool,
  size: _propTypes["default"].string,
  startIcon: _propTypes["default"].node,
  endIcon: _propTypes["default"].node,
  placeholder: _propTypes["default"].string,
  multiSelect: _propTypes["default"].bool,
  customTrigger: _propTypes["default"].node,
  overflow: _propTypes["default"].oneOf(['horizontal', 'vertical']),
  disabled: _propTypes["default"].bool
};
DropdownBase.defaultProps = {
  classes: {
    root: '',
    button: '',
    content: '',
    menu: ''
  },
  children: null,
  renderSelectedOptions: function renderSelectedOptions() {},
  button: null,
  size: 'md',
  startIcon: null,
  endIcon: null,
  placeholder: 'Select',
  multiSelect: false,
  customTrigger: null,
  overflow: 'horizontal',
  disabled: false
};
DropdownBase.displayName = 'DropdownBase';
var _default = DropdownBase;
exports["default"] = _default;