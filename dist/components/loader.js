"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _baseComponents = require("../base-components");

var _icons = require("../icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Loader = function Loader(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      backdrop = _ref.backdrop,
      open = _ref.open,
      message = _ref.message,
      Icon = _ref.Icon;
  var iconClass = "fill-current text-white animate-spin ".concat(classes.icon);
  var LoaderIcon = _icons.CircleLoader;

  if (Icon) {
    LoaderIcon = Icon;
  }

  if (backdrop) {
    return /*#__PURE__*/_react["default"].createElement(_baseComponents.DialogBase, {
      modal: true,
      open: open
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "inline-flex"
    }, /*#__PURE__*/_react["default"].createElement(LoaderIcon, {
      className: iconClass
    }), message && /*#__PURE__*/_react["default"].createElement("p", {
      className: "ml-2 text-white ".concat(classes.message)
    }, message)));
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative inline-flex"
  }, children, open && /*#__PURE__*/_react["default"].createElement(LoaderIcon, {
    className: "absolute top-1/2 left-1/2 -mt-2.5 -ml-2.5 ".concat(iconClass)
  }));
};

Loader.propTypes = {
  children: _propTypes["default"].node,
  classes: _propTypes["default"].object,
  backdrop: _propTypes["default"].bool,
  open: _propTypes["default"].bool,
  message: _propTypes["default"].string,
  Icon: _propTypes["default"].node
};
Loader.defaultProps = {
  children: null,
  classes: {
    icon: '',
    message: ''
  },
  backdrop: false,
  open: false,
  message: '',
  Icon: null
};
var _default = Loader;
exports["default"] = _default;