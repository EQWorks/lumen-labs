"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tailwindConfigColor = require("../../utils/tailwind-config-color");

var _concatColor = require("../../utils/concat-color");

require("./range-slider-base.css");

var _excluded = ["classes", "min", "max", "values", "onChange", "width", "children", "disabled"];

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

var RangeSliderBase = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var classes = _ref.classes,
      min = _ref.min,
      max = _ref.max,
      values = _ref.values,
      _onChange = _ref.onChange,
      width = _ref.width,
      children = _ref.children,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, _excluded);

  var sliderTrackColor = (0, _concatColor.concatTargetColor)(classes.sliderTrack, ['bg'], [100]);
  var sliderRangeColor = (0, _concatColor.concatTargetColor)(classes.sliderRange, ['bg'], [500]); //pseudo elements dynamic color

  var thumbColor = (0, _tailwindConfigColor.getTailwindConfigColor)("".concat(classes.thumbColor, "-500"));
  var sliderClasses = Object.freeze({
    sliderContainer: "".concat(width, " relative my-2.5 h-px"),
    thumb: "".concat(width),
    thumbColor: thumbColor ? thumbColor : '#000',
    slider: 'h-1 rounded-sm',
    sliderTrack: "".concat(classes.sliderTrack ? sliderTrackColor : 'bg-secondary-300'),
    sliderRange: "".concat(classes.sliderRange ? sliderRangeColor : 'bg-black')
  });

  var _useState = (0, _react.useState)(values[0]),
      _useState2 = _slicedToArray(_useState, 2),
      minVal = _useState2[0],
      setMinVal = _useState2[1];

  var _useState3 = (0, _react.useState)(values[1]),
      _useState4 = _slicedToArray(_useState3, 2),
      maxVal = _useState4[0],
      setMaxVal = _useState4[1];

  var minValRef = (0, _react.useRef)(values[0]);
  var maxValRef = (0, _react.useRef)(values[1]);
  var range = (0, _react.useRef)(null);
  var getPercent = (0, _react.useCallback)(function (value) {
    return Math.round((value - min) / (max - min) * 100);
  }, [min, max]); // Set width of the range to change from the left side

  (0, _react.useEffect)(function () {
    var minPercent = getPercent(minVal);
    var maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = "".concat(minPercent, "%");
      range.current.style.width = "".concat(maxPercent - minPercent, "%");
    }
  }, [minVal, getPercent]); // Set width of the range to change from the right side

  (0, _react.useEffect)(function () {
    var minPercent = getPercent(minValRef.current);
    var maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = "".concat(maxPercent - minPercent, "%");
    }
  }, [maxVal, getPercent]);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    ref: ref,
    className: "slider-container ".concat(sliderClasses.sliderContainer)
  }, rest), /*#__PURE__*/_react["default"].createElement("input", {
    type: "range",
    min: min,
    max: max,
    value: minVal,
    onChange: function onChange(event) {
      var value = Math.min(Number(event.target.value), maxVal - 1);
      setMinVal(value);
      _onChange && _onChange(event, [value, maxVal]);
      minValRef.current = value;
    },
    className: "thumb thumb-left ".concat(sliderClasses.thumb, " ").concat(disabled && 'slider-disabled'),
    style: {
      '--slider-thumb-color': sliderClasses.thumbColor && sliderClasses.thumbColor,
      zIndex: minVal > max - 100 && '5'
    },
    disabled: disabled
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "range",
    min: min,
    max: max,
    value: maxVal,
    onChange: function onChange(event) {
      var value = Math.max(Number(event.target.value), minVal + 1);
      setMaxVal(value);
      _onChange && _onChange(event, [minVal, value]);
      maxValRef.current = value;
    },
    className: "thumb thumb-right ".concat(sliderClasses.thumb, " ").concat(disabled && 'slider-disabled'),
    style: {
      '--slider-thumb-color': sliderClasses.thumbColor && sliderClasses.thumbColor
    },
    disabled: disabled
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider-track absolute ".concat(sliderClasses.slider, " ").concat(sliderClasses.sliderTrack, " ").concat(disabled && 'slider-disabled')
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: range,
    className: "slider-range absolute ".concat(sliderClasses.slider, " ").concat(sliderClasses.sliderRange, " ").concat(disabled && 'slider-disabled')
  }), children && children);
});
RangeSliderBase.propTypes = {
  classes: _propTypes["default"].exact({
    thumbColor: _propTypes["default"].string,
    sliderTrack: _propTypes["default"].string,
    sliderRange: _propTypes["default"].string
  }),
  min: _propTypes["default"].number.isRequired,
  max: _propTypes["default"].number.isRequired,
  values: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  onChange: _propTypes["default"].func,
  width: _propTypes["default"].string,
  children: _propTypes["default"].node,
  disabled: _propTypes["default"].bool
};
RangeSliderBase.defaultProps = {
  classes: {
    thumbColor: '',
    sliderTrack: '',
    sliderRange: ''
  },
  width: 'w-48',
  disabled: false
};
RangeSliderBase.displayName = 'RangeSliderBase';
var _default = RangeSliderBase;
exports["default"] = _default;