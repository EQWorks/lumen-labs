"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _baseComponents = require("../../base-components");

require("./dropdown-auto-center.css");

var _excluded = ["classes", "data", "onSelect", "value", "startIcon", "endIcon", "scrollable", "disabled"];

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

var DropdownAutoCenter = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var classes = _ref.classes,
      data = _ref.data,
      onSelect = _ref.onSelect,
      value = _ref.value,
      startIcon = _ref.startIcon,
      endIcon = _ref.endIcon,
      scrollable = _ref.scrollable,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, _excluded);

  var dialogClasses = Object.freeze({
    root: "min-w-5 min-h-5 text-xxs uppercase tracking-lg ".concat(classes.root)
  });
  var dropdownClasses = Object.freeze({
    button: "min-w-10 px-1.5 py-0.5 flex items-center justify-between cursor-pointer rounded-sm shadow-light-10 shadow-secondary-200\n      hover:shadow-primary-50 ".concat(classes.button && classes.button, " ").concat(disabled ? 'text-secondary-400' : 'text-interactive-500'),
    menu: "min-w-10 overflow-y-auto overflow-x-hidden relative rounded-sm shadow-light-10 bg-secondary-50 shadow-secondary-200\n      hover:shadow-primary-50 ".concat(scrollable && 'h-10', " ").concat(classes.menu && classes.menu),
    item: "rows-selection flex px-1.5 py-0.5 cursor-pointer rounded-sm text-secondary-600\n      hover:bg-secondary-50 hover:text-secondary-800 hover:shadow-light-10\n      ".concat(classes.item && classes.item),
    disabled: 'bg-secondary-100 border-secondary-400 cursor-not-allowed pointer-events-none'
  });

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      dropdownOffsetTop = _useState4[0],
      setDropdownOffsetTop = _useState4[1];

  var _useState5 = (0, _react.useState)(value || ''),
      _useState6 = _slicedToArray(_useState5, 2),
      active = _useState6[0],
      setActive = _useState6[1];

  var dropdownRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    dropdownRef.current && dropdownRef.current.childNodes.forEach(function (node) {
      if (node.innerText.toString() === active.title.toString().toUpperCase()) {
        if (scrollable) {
          if (active.title === data[0].title) {
            dropdownRef.current.style.height = "".concat(dropdownRef.current.clientHeight - dropdownRef.current.clientHeight / 4, "px");
            setDropdownOffsetTop(node.clientHeight);
          } else if (active.title === data[data.length - 1].title) {
            setDropdownOffsetTop(node.clientHeight + node.clientHeight / 2);
            dropdownRef.current.style.height = "".concat(dropdownRef.current.clientHeight - dropdownRef.current.clientHeight / 4, "px");
            dropdownRef.current.scrollTop = node.offsetTop;
          } else {
            setDropdownOffsetTop(node.clientHeight + node.clientHeight / 2);
            dropdownRef.current.scrollTop = node.offsetTop - node.clientHeight / 2;
          }
        } else {
          setDropdownOffsetTop(node.offsetTop + node.clientHeight);
        }
      }
    });
  }, [open]);

  var handleSelectRowsOnClick = function handleSelectRowsOnClick() {
    setOpen(!open);
  };

  var onSelectRowOptions = function onSelectRowOptions(event, item, index) {
    setOpen(!open);
    onSelect(event, {
      item: item,
      index: index
    });
  };

  var dropdownButton = /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(dropdownClasses.button, " ").concat(disabled && dropdownClasses.disabled)
  }, startIcon && startIcon, /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(startIcon && 'ml-1', " ").concat(endIcon && 'mr-1')
  }, active.title), endIcon && endIcon);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_baseComponents.DialogBase, _extends({
    ref: ref,
    classes: dialogClasses,
    open: open,
    button: dropdownButton,
    onClick: handleSelectRowsOnClick,
    disabled: disabled
  }, rest), /*#__PURE__*/_react["default"].createElement("ul", {
    ref: function ref(el) {
      return dropdownRef.current = el;
    },
    className: dropdownClasses.menu,
    style: {
      top: "-".concat(dropdownOffsetTop, "px")
    }
  }, data.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index,
      className: "".concat(dropdownClasses.item, " ").concat(item.title.toString() === active.title.toString() && 'text-interactive-500 shadow-light-10 scale-105'),
      onClick: function onClick(e) {
        return onSelectRowOptions(e, item, index);
      },
      onPointerDown: function onPointerDown() {
        return setActive(item);
      }
    }, item.title);
  }))));
});
DropdownAutoCenter.propTypes = {
  classes: _propTypes["default"].exact({
    root: _propTypes["default"].string,
    button: _propTypes["default"].string,
    menu: _propTypes["default"].string,
    item: _propTypes["default"].string
  }),
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string
  })),
  onSelect: _propTypes["default"].func,
  value: _propTypes["default"].any,
  startIcon: _propTypes["default"].node,
  endIcon: _propTypes["default"].node,
  scrollable: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool
};
DropdownAutoCenter.defaultProps = {
  classes: {
    root: '',
    button: '',
    menu: '',
    item: ''
  },
  data: [],
  onSelect: function onSelect() {},
  startIcon: null,
  endIcon: null,
  scrollable: false,
  disabled: false
};
DropdownAutoCenter.displayName = 'DropdownAutoCenter';
var _default = DropdownAutoCenter;
exports["default"] = _default;