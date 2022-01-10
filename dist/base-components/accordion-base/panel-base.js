"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _reactResizeDetector = require("react-resize-detector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var PanelBase = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _classes$details, _clsx;

  var children = _ref.children,
      classes = _ref.classes,
      id = _ref.id,
      header = _ref.header,
      ExpandIcon = _ref.ExpandIcon,
      CompressIcon = _ref.CompressIcon,
      alignIcon = _ref.alignIcon,
      open = _ref.open,
      setOpen = _ref.setOpen,
      onChange = _ref.onChange,
      autoHeight = _ref.autoHeight;
  var detailsNoHeight = (_classes$details = classes.details) === null || _classes$details === void 0 ? void 0 : _classes$details.split(/\bh-\w+|\bp-\w+|\bpy-\w+/).map(function (r) {
    return r.trim();
  }).filter(function (r) {
    return r;
  }).join(' ');
  var Icon = open.includes(id) ? ExpandIcon : CompressIcon !== null && CompressIcon !== void 0 ? CompressIcon : ExpandIcon;

  var renderIcon = function renderIcon() {
    if (Icon) {
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "".concat(classes.iconRoot)
      }, /*#__PURE__*/_react["default"].createElement(Icon, {
        className: (0, _clsx2["default"])("".concat(classes.icon, " transition-transform duration-300 ease-in-out origin-center transform"), {
          'rotate-0': open.includes(id),
          '-rotate-90': !open.includes(id) && !CompressIcon
        })
      }));
    }

    return null;
  };

  var handleClick = function handleClick() {
    return setOpen(function (prev) {
      if (prev.includes(id)) {
        prev.splice(prev.indexOf(id), 1);
        onChange(id, prev);
        return _toConsumableArray(prev);
      }

      onChange(id, [].concat(_toConsumableArray(prev), [id]));
      return [].concat(_toConsumableArray(prev), [id]);
    });
  };

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      headerHeight = _useState2[0],
      setHeaderHeight = _useState2[1];

  var headerRef = (0, _react.useCallback)(function (node) {
    return setHeaderHeight(node === null || node === void 0 ? void 0 : node.getBoundingClientRect().height);
  }, []);

  var _useResizeDetector = (0, _reactResizeDetector.useResizeDetector)(),
      detailsHeight = _useResizeDetector.height,
      detailsRef = _useResizeDetector.ref;

  var height = (0, _react.useMemo)(function () {
    return headerHeight + detailsHeight;
  }, [headerHeight, detailsHeight]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    style: autoHeight ? {
      height: height
    } : {}
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: headerRef,
    className: (0, _clsx2["default"])("".concat(classes.header, " cursor-pointer flex flex-row"), {
      'justify-between': alignIcon === 'end'
    }),
    onClick: handleClick
  }, alignIcon === 'start' && renderIcon(), /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block align-baseline"
  }, header), alignIcon === 'end' && renderIcon()), /*#__PURE__*/_react["default"].createElement("div", {
    ref: autoHeight ? detailsRef : null,
    className: (0, _clsx2["default"])('transition-max-height ease-in-out duration-300 overflow-y-hidden', (_clsx = {}, _defineProperty(_clsx, "".concat(classes.details, " max-h-full"), autoHeight && open.includes(id)), _defineProperty(_clsx, "".concat(classes.details, " max-h-0"), autoHeight && !open.includes(id)), _defineProperty(_clsx, classes.details, !autoHeight && open.includes(id)), _defineProperty(_clsx, "".concat(detailsNoHeight, " h-0"), !autoHeight && !open.includes(id)), _clsx))
  }, children));
});

PanelBase.propTypes = {
  children: _propTypes["default"].node.isRequired,
  id: _propTypes["default"].oneOfType([_propTypes["default"].string.isRequired, _propTypes["default"].number.isRequired]),
  header: _propTypes["default"].any.isRequired,
  ExpandIcon: _propTypes["default"].elementType,
  CompressIcon: _propTypes["default"].elementType,
  alignIcon: _propTypes["default"].string,
  open: _propTypes["default"].array,
  setOpen: _propTypes["default"].func,
  classes: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  autoHeight: _propTypes["default"].bool
};
PanelBase.defaultProps = {
  open: [],
  setOpen: function setOpen() {},
  classes: {
    header: '',
    details: 'h-10',
    icon: '',
    iconRoot: ''
  },
  onChange: function onChange() {},
  ExpandIcon: null,
  CompressIcon: null,
  alignIcon: 'start',
  autoHeight: false
};
PanelBase.displayName = 'PanelBase';
var _default = PanelBase;
exports["default"] = _default;