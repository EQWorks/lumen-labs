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

var _baseComponents = require("../../base-components");

require("./range-slider-label.css");

var _excluded = ["classes", "color", "min", "max", "values", "onChange", "width", "showLabel", "showTooltip", "disabled"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RangeSliderLabel = function RangeSliderLabel(_ref) {
  var classes = _ref.classes,
      color = _ref.color,
      min = _ref.min,
      max = _ref.max,
      values = _ref.values,
      onChange = _ref.onChange,
      width = _ref.width,
      showLabel = _ref.showLabel,
      showTooltip = _ref.showTooltip,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, _excluded);

  var tooltipColor = (0, _concatColor.concatTargetColor)(color.tooltip, ['bg'], [500]); //pseudo elements dynamic color

  var tooltipTailColor = (0, _tailwindConfigColor.getTailwindConfigColor)("".concat(color.tooltip, "-500"));
  var sliderClasses = Object.freeze({
    thumbColor: color.thumb,
    sliderTrack: color.sliderTrack ? color.sliderTrack : 'bg-interactive-200',
    sliderRange: color.sliderRange ? color.sliderRange : 'bg-interactive-500'
  });
  var sliderLabelClasses = Object.freeze({
    label: "".concat(classes.label ? classes.label : 'pt-5 text-xs'),
    tooltip: "z-10 ".concat(classes.tooltip ? classes.tooltip : 'py-1 px-3 text-white rounded-sm ')
  });
  var sliderBaseRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var thumb = sliderBaseRef.current.querySelectorAll('.thumb');
    var tooltip = sliderBaseRef.current.querySelectorAll('output[name="tooltip"]');
    setTooltip(thumb, tooltip);
  });

  var setTooltip = function setTooltip(thumb, tooltip) {
    thumb.forEach(function (el, i) {
      var val = el.value;
      var min = el.min ? el.min : 0;
      var max = el.max ? el.max : 100;
      var newVal = Number((val - min) * 100 / (max - min));
      tooltip[i].style.left = "calc(".concat(newVal, "% + (").concat(8 - newVal * 0.15, "px))");
      el.addEventListener('mouseover', function () {
        tooltip[i].style.display = 'initial';
      });
      el.addEventListener('mouseleave', function () {
        tooltip[i].style.display = 'none';
      });
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_baseComponents.RangeSliderBase, _extends({
    ref: sliderBaseRef,
    classes: sliderClasses,
    min: min,
    max: max,
    values: [values[0], values[1]],
    onChange: onChange,
    width: width,
    disabled: disabled
  }, rest), showLabel && /*#__PURE__*/_react["default"].createElement("div", {
    className: 'label-container flex justify-between'
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "left-value ml-1 ".concat(sliderLabelClasses.label)
  }, min), /*#__PURE__*/_react["default"].createElement("label", {
    className: "right-value -mr-1 ".concat(sliderLabelClasses.label)
  }, max)), showTooltip && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("output", {
    className: "left-tooltip ".concat(sliderLabelClasses.tooltip, " ").concat(color.tooltip ? tooltipColor : 'bg-interactive-500'),
    name: "tooltip",
    style: {
      '--tooltip-tail-color': "".concat(tooltipTailColor, " transparent transparent transparent")
    }
  }, values[0]), /*#__PURE__*/_react["default"].createElement("output", {
    className: "right-tooltip ".concat(sliderLabelClasses.tooltip, " ").concat(color.tooltip ? tooltipColor : 'bg-interactive-500'),
    name: "tooltip",
    style: {
      '--tooltip-tail-color': "".concat(tooltipTailColor, " transparent transparent transparent")
    }
  }, values[1])));
};

RangeSliderLabel.propTypes = {
  classes: _propTypes["default"].exact({
    label: _propTypes["default"].string,
    tooltip: _propTypes["default"].string
  }),
  width: _propTypes["default"].string,
  color: _propTypes["default"].exact({
    thumb: _propTypes["default"].string,
    sliderTrack: _propTypes["default"].string,
    sliderRange: _propTypes["default"].string,
    tooltip: _propTypes["default"].string
  }),
  min: _propTypes["default"].number.isRequired,
  max: _propTypes["default"].number.isRequired,
  values: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  onChange: _propTypes["default"].func.isRequired,
  showLabel: _propTypes["default"].bool,
  showTooltip: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool
};
RangeSliderLabel.defaultProps = {
  classes: {
    label: '',
    tooltip: ''
  },
  color: {
    thumb: 'interactive',
    sliderTrack: 'interactive',
    sliderRange: 'interactive',
    tooltip: 'interactive'
  },
  width: 'w-48',
  showLabel: true,
  showTooltip: true,
  disabled: false
};
var _default = RangeSliderLabel;
exports["default"] = _default;