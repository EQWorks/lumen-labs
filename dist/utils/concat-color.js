"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatTargetColor = exports.concatStateColor = void 0;

/**
 * @param {string} color the color type for target and states. 
 * @param {string} target the element target for color and states.
 * @param {array} state pseudo elements state to apply to the target.
 * @param {array} shades defines the color opacity/shade level for the target DEFAULT: 500.
 */
var concatStateColor = function concatStateColor(color, target) {
  var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var shades = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [500];
  return state.map(function (s, i) {
    return ["".concat(s, ":").concat(target), color, shades[i] ? shades[i] : shades[0]].join('-');
  }).join(' ');
};
/**
 * @param {string} color the color type for target and states. 
 * @param {array} target the element targets for color and shades.
 * @param {array} shades defines the color opacity/shade level for the target DEFAULT: 500.
 */


exports.concatStateColor = concatStateColor;

var concatTargetColor = function concatTargetColor(color) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var shades = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [500];
  return target.map(function (t, i) {
    return [t, color, shades[i] ? shades[i] : shades[0]].join('-');
  }).join(' ');
};

exports.concatTargetColor = concatTargetColor;