"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _baseComponents = require("../../base-components");

var _header = _interopRequireDefault(require("./header"));

var _content = _interopRequireDefault(require("./content"));

var _footer = _interopRequireDefault(require("./footer"));

var _excluded = ["classes", "children", "open", "closeModal", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _modalSize = function _modalSize(size) {
  var modalSize = {};

  switch (size) {
    case 'sm':
      modalSize = {
        container: 'w-450px h-300px'
      };
      break;

    case 'md':
      modalSize = {
        container: 'w-600px h-500px'
      };
      break;

    case 'lg':
      modalSize = {
        container: 'w-1000px h-760px'
      };
      break;

    default:
      break;
  }

  return modalSize;
};

var Modal = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var classes = _ref.classes,
      children = _ref.children,
      open = _ref.open,
      closeModal = _ref.closeModal,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, _excluded);

  var modalSize = _modalSize(size);

  var modalClasses = Object.freeze({
    container: "flex flex-col justify-between bg-secondary-50 rounded-sm border shadow-blue-60 ".concat(modalSize.container, " ").concat(classes.content)
  });
  var modalBaseClasses = Object.freeze({
    root: "px-10 py-5 ".concat(classes.root),
    main: classes.main,
    overlay: "bg-secondary-700 opacity-70 ".concat(classes.overlay)
  });
  return /*#__PURE__*/_react["default"].createElement(_baseComponents.ModalBase, _extends({
    ref: ref,
    classes: modalBaseClasses,
    open: open,
    closeModal: closeModal
  }, rest), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-container ".concat(modalClasses.container)
  }, _react["default"].Children.map(children, function (child) {
    if ( /*#__PURE__*/_react["default"].isValidElement(child)) {
      return /*#__PURE__*/_react["default"].cloneElement(child, child.type.displayName === 'Header' && {
        close: closeModal
      });
    }

    return child;
  })));
});
Modal.propTypes = {
  children: _propTypes["default"].any,
  classes: _propTypes["default"].object,
  open: _propTypes["default"].bool.isRequired,
  closeModal: _propTypes["default"].func,
  size: _propTypes["default"].string
};
Modal.defaultProps = {
  classes: {
    root: '',
    main: '',
    overlay: '',
    container: ''
  },
  open: false,
  closeModal: function closeModal() {},
  size: 'md'
};
Modal.displayName = 'Modal';
Modal.Header = _header["default"];
Modal.Content = _content["default"];
Modal.Footer = _footer["default"];
var _default = Modal;
exports["default"] = _default;