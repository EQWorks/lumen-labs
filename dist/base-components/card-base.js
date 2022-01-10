"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icons = require("../icons");

var _layout = _interopRequireDefault(require("../components/layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardBase = function CardBase(_ref) {
  var classes = _ref.classes,
      header = _ref.header,
      content = _ref.content,
      footer = _ref.footer,
      onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "inline-flex flex-col border ".concat(classes.root)
  }, onClose && /*#__PURE__*/_react["default"].createElement(_icons.Close, {
    size: "md",
    className: "self-end cursor-pointer ".concat(classes.closeIcon),
    onClick: onClose
  }), /*#__PURE__*/_react["default"].createElement(_layout["default"], {
    className: "h-full"
  }, header && /*#__PURE__*/_react["default"].createElement(_layout["default"].Header, {
    className: classes.header
  }, header), /*#__PURE__*/_react["default"].createElement(_layout["default"].Content, {
    className: "h-full ".concat(classes.content)
  }, content), footer && /*#__PURE__*/_react["default"].createElement(_layout["default"].Footer, {
    className: classes.footer
  }, footer)));
};

CardBase.propTypes = {
  content: _propTypes["default"].any.isRequired,
  classes: _propTypes["default"].object,
  header: _propTypes["default"].any,
  footer: _propTypes["default"].any,
  onClose: _propTypes["default"].func
};
CardBase.defaultProps = {
  classes: {
    root: '',
    closeIcon: '',
    header: '',
    content: '',
    footer: ''
  },
  header: null,
  footer: null,
  onClose: null
};
var _default = CardBase;
exports["default"] = _default;