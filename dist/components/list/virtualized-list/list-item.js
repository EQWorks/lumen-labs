"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropsInheritor = exports.ListItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PropsInheritor = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref
  }, _react["default"].Children.map(children, function (child) {
    if ( /*#__PURE__*/_react["default"].isValidElement(child)) {
      return /*#__PURE__*/_react["default"].cloneElement(child, _objectSpread({}, props));
    }

    return child;
  }));
});

exports.PropsInheritor = PropsInheritor;
PropsInheritor.propTypes = {
  children: _propTypes["default"].node.isRequired
};

var ListItem = /*#__PURE__*/_react["default"].forwardRef(function (_ref2, ref) {
  var children = _ref2.children,
      style = _ref2.style,
      className = _ref2.className,
      width = _ref2.width,
      classes = _ref2.classes,
      gridCols = _ref2.gridCols,
      selected = _ref2.selected,
      onClick = _ref2.onClick;

  var _grid = gridCols > 0 ? ['grid grid-cols', gridCols].join('-') : '';

  var _selected = selected ? classes.selected ? classes.selected : 'bg-secondary-100' : '';

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: width || '100%'
    }),
    onClick: onClick,
    className: "".concat(_grid, " ").concat(_selected, " ").concat(className)
  }, children);
});

exports.ListItem = ListItem;
ListItem.propTypes = {
  children: _propTypes["default"].node.isRequired,
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  gridCols: _propTypes["default"].number,
  selected: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
ListItem.defaultProps = {
  style: {},
  className: '',
  classes: {},
  gridCols: 0,
  selected: false,
  onClick: function onClick() {},
  width: '100%'
};
PropsInheritor.displayName = 'PropsInheritor';
ListItem.displayName = 'ListItem';