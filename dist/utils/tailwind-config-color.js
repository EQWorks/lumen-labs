"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTailwindConfigColor = void 0;

var _resolveConfig = _interopRequireDefault(require("tailwindcss/resolveConfig"));

var _tailwind = _interopRequireDefault(require("../../tailwind.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Access theme color values for dynamically applying inline styles in React
var getTailwindConfigColor = function getTailwindConfigColor(color) {
  var fullConfig = (0, _resolveConfig["default"])(_tailwind["default"]);
  var parseColor = color.split('-');
  var value = parseColor.length > 1 && fullConfig.theme.colors[color];
  return value;
};

exports.getTailwindConfigColor = getTailwindConfigColor;