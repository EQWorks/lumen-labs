"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _accordionBase = _interopRequireDefault(require("../../base-components/accordion-base"));

var _panel = _interopRequireDefault(require("./panel"));

var _excluded = ["children", "variant", "color", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var variants = Object.freeze({
  'left-bordered': 'border-l-4'
});

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      variant = _ref.variant,
      color = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var _color = variant !== 'default' && !color ? 'primary' : color;

  var borderColor = ['border', _color === 'primary' ? 'interactive' : _color, _color === 'primary' ? 500 : 700].join('-');
  return /*#__PURE__*/_react["default"].createElement(_accordionBase["default"], _extends({
    className: (0, _clsx2["default"])("".concat(variants[variant], " ").concat(className), _defineProperty({}, borderColor, _color))
  }, props), _react["default"].Children.map(children, function (child) {
    if ( /*#__PURE__*/_react["default"].isValidElement(child)) {
      return /*#__PURE__*/_react["default"].cloneElement(child, {
        variant: variant,
        color: _color
      });
    }

    return child;
  }));
};

Accordion.propTypes = {
  children: _propTypes["default"].node.isRequired,
  className: _propTypes["default"].string,
  variant: _propTypes["default"].string,
  color: _propTypes["default"].string
};
Accordion.defaultProps = {
  className: '',
  variant: 'default',
  color: ''
};
Accordion.Panel = _panel["default"];
var _default = Accordion;
exports["default"] = _default;