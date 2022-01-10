"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@headlessui/react");

var _excluded = ["classes", "children", "open", "closeModal"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ModalBase = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var classes = _ref.classes,
      children = _ref.children,
      open = _ref.open,
      closeModal = _ref.closeModal,
      rest = _objectWithoutProperties(_ref, _excluded);

  var modalClasses = Object.freeze({
    root: "min-h-screen flex justify-center items-center ".concat(classes.root),
    main: "flex justify-center items-center transition-all transform ".concat(classes.main),
    overlay: "fixed inset-0 ".concat(classes.overlay)
  });
  return /*#__PURE__*/_react["default"].createElement(_react2.Dialog, _extends({
    ref: ref,
    as: "div",
    className: "fixed inset-0 z-10 overflow-y-auto",
    open: open,
    onClose: closeModal
  }, rest), /*#__PURE__*/_react["default"].createElement("div", {
    className: modalClasses.root
  }, /*#__PURE__*/_react["default"].createElement(_react2.Dialog.Overlay, {
    className: modalClasses.overlay
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: modalClasses.main
  }, children)));
});
ModalBase.propTypes = {
  children: _propTypes["default"].any.isRequired,
  classes: _propTypes["default"].object,
  open: _propTypes["default"].bool.isRequired,
  closeModal: _propTypes["default"].func
};
ModalBase.defaultProps = {
  classes: {
    root: '',
    main: '',
    overlay: ''
  },
  open: false,
  closeModal: function closeModal() {}
};
ModalBase.displayName = 'ModalBase';
var _default = ModalBase;
exports["default"] = _default;