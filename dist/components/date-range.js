"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DateRange = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var classes = _ref.classes,
      defaultValue = _ref.defaultValue,
      setFromValue = _ref.setFromValue,
      setToValue = _ref.setToValue,
      showLabel = _ref.showLabel;
  var dateRangeClasses = Object.freeze({
    form: "".concat(classes.form ? classes.form : 'container w-96 flex'),
    field: "".concat(classes.field ? classes.field : 'w-full mx-2'),
    label: "".concat(classes.label ? classes.label : 'text-xs text-secondary-500'),
    input: "".concat(classes.input ? classes.input : 'w-full pb-2 text-sm border-b border-secondary-500 hover:border-black hover:border-b-2 focus:outline-none')
  });
  return /*#__PURE__*/_react["default"].createElement("form", {
    ref: ref,
    className: "".concat(dateRangeClasses.form),
    noValidate: true
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fieldContainer ".concat(dateRangeClasses.field)
  }, showLabel && /*#__PURE__*/_react["default"].createElement("label", {
    className: "".concat(dateRangeClasses.label),
    htmlFor: "from"
  }, "From"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "date-input ".concat(dateRangeClasses.input),
    type: "date",
    id: "from",
    name: "from",
    pattern: "\\d{4}-\\d{2}-\\d{2}",
    value: defaultValue[0] || '',
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      return setFromValue(value);
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "fieldContainer ".concat(dateRangeClasses.field)
  }, showLabel && /*#__PURE__*/_react["default"].createElement("label", {
    className: "".concat(dateRangeClasses.label),
    htmlFor: "to"
  }, "To"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "date-input ".concat(dateRangeClasses.input),
    type: "date",
    id: "to",
    name: "to",
    pattern: "\\d{4}-\\d{2}-\\d{2}",
    value: defaultValue[1] || '',
    onChange: function onChange(_ref3) {
      var value = _ref3.target.value;
      return setToValue(value);
    }
  })));
});
DateRange.propTypes = {
  classes: _propTypes["default"].exact({
    form: _propTypes["default"].string,
    field: _propTypes["default"].string,
    label: _propTypes["default"].string,
    input: _propTypes["default"].string
  }),
  defaultValue: _propTypes["default"].array.isRequired,
  setFromValue: _propTypes["default"].func.isRequired,
  setToValue: _propTypes["default"].func.isRequired,
  showLabel: _propTypes["default"].bool
};
DateRange.defaultProps = {
  classes: {
    form: '',
    field: '',
    label: '',
    input: ''
  },
  showLabel: true
};
DateRange.displayName = 'DateRange';
var _default = DateRange;
exports["default"] = _default;