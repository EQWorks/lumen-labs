"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*-- ListCol - grid column component wrapper if gridCols > 0 --*/
var ListCol = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      colSpan = _ref.colSpan;

  var _colSpan = ['col-span', colSpan].join('-');

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    className: "".concat(_colSpan, " ").concat(className)
  }, children);
});

ListCol.propTypes = {
  children: _propTypes["default"].node.isRequired,
  colSpan: _propTypes["default"].number.isRequired,
  className: _propTypes["default"].string
};
ListCol.defaultProps = {
  className: ''
};
ListCol.displayName = 'ListCol';
var _default = ListCol;
exports["default"] = _default;