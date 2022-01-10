"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@headlessui/react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icons = require("../../icons");

var _excluded = ["classes", "children", "close"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Header = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var classes = _ref.classes,
      children = _ref.children,
      close = _ref.close,
      rest = _objectWithoutProperties(_ref, _excluded);

  var modalClasses = Object.freeze({
    header: "p-5 flex justify-between border-b ".concat(classes.header),
    title: "font-bold text-xl font-sans text-secondary-900 tracking-xs leading-1.2 ".concat(classes.title),
    close: "focus:outline-none text-secondary-600 fill-current ".concat(classes.close)
  });
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    ref: ref,
    className: "header-container ".concat(modalClasses.header)
  }, rest), /*#__PURE__*/_react["default"].createElement(_react2.Dialog.Title, {
    as: "span",
    className: modalClasses.title
  }, children), /*#__PURE__*/_react["default"].createElement("button", {
    className: modalClasses.close,
    onClick: close
  }, /*#__PURE__*/_react["default"].createElement(_icons.Close, {
    size: "lg"
  })));
});
Header.propTypes = {
  children: _propTypes["default"].any,
  classes: _propTypes["default"].object,
  close: _propTypes["default"].func
};
Header.defaultProps = {
  classes: {
    header: '',
    title: '',
    close: ''
  },
  close: function close() {}
};
Header.displayName = 'Header';
var _default = Header;
exports["default"] = _default;