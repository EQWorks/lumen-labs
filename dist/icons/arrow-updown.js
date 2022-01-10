"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["className", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5 h-2.5'
});

var ArrowUpDown = function ArrowUpDown(_ref) {
  var className = _ref.className,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    className: "".concat(iconSize[size], " ").concat(className),
    viewBox: "0 0 140 140",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    stroke: "none"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    transform: "matrix(14,0,0,14,0,0)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.75195 5.504H3.25195C3.15409 5.50537 3.05878 5.53544 2.97784 5.59047C2.8969 5.6455 2.8339 5.72307 2.79663 5.81357C2.75937 5.90407 2.74948 6.00352 2.7682 6.09959C2.78693 6.19565 2.83343 6.28411 2.90195 6.354L4.65195 8.104C4.6984 8.15056 4.75357 8.1875 4.81432 8.21271C4.87506 8.23792 4.94018 8.25089 5.00595 8.25089C5.07172 8.25089 5.13684 8.23792 5.19758 8.21271C5.25833 8.1875 5.3135 8.15056 5.35995 8.104L7.10195 6.354C7.17047 6.28411 7.21697 6.19565 7.23569 6.09959C7.25441 6.00352 7.24453 5.90407 7.20727 5.81357C7.17 5.72307 7.10699 5.6455 7.02606 5.59047C6.94512 5.53544 6.84981 5.50537 6.75195 5.504V5.504Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.25196 4.50001H6.75196C6.84982 4.49863 6.94513 4.46857 7.02607 4.41354C7.10701 4.35851 7.17001 4.28093 7.20728 4.19043C7.24454 4.09993 7.25443 4.00048 7.23571 3.90442C7.21698 3.80835 7.17048 3.71989 7.10196 3.65001L5.35596 1.89601C5.30952 1.84945 5.25434 1.8125 5.19359 1.7873C5.13285 1.76209 5.06773 1.74911 5.00196 1.74911C4.93619 1.74911 4.87107 1.76209 4.81033 1.7873C4.74958 1.8125 4.69441 1.84945 4.64796 1.89601L2.90196 3.65001C2.83185 3.71994 2.78409 3.80911 2.76472 3.90622C2.74536 4.00333 2.75526 4.104 2.79318 4.19547C2.83109 4.28695 2.89532 4.3651 2.97771 4.42003C3.0601 4.47496 3.15694 4.50419 3.25596 4.50401L3.25196 4.50001Z"
  })));
};

ArrowUpDown.propTypes = {
  className: _propTypes["default"].string,
  size: _propTypes["default"].string
};
ArrowUpDown.defaultProps = {
  className: '',
  size: ''
};
var _default = ArrowUpDown;
exports["default"] = _default;