"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateElement = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _generateElement = function _generateElement(Element) {
  return function (_ref) {
    var tagName = _ref.tagName,
        displayName = _ref.displayName;

    var Component = function Component(props) {
      return /*#__PURE__*/_react["default"].createElement(Element, _extends({
        tagName: tagName
      }, props));
    };

    Component.displayName = displayName;
    return Component;
  };
};

var LayoutElement = function LayoutElement(_ref2) {
  var children = _ref2.children,
      tagName = _ref2.tagName,
      className = _ref2.className;
  return /*#__PURE__*/_react["default"].createElement(tagName, {
    className: className
  }, children);
};

LayoutElement.propTypes = {
  children: _propTypes["default"].node.isRequired,
  tagName: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string
};
LayoutElement.defaultProps = {
  className: 'w-full'
};

var generateElement = _generateElement(LayoutElement);

exports.generateElement = generateElement;