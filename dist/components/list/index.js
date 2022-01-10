"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _listCol = _interopRequireDefault(require("./list-col"));

require("./scrollbar.css");

var _excluded = ["children", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*-- ListBase - base component for List --*/
var ListBase = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("ul", {
    ref: ref,
    className: className
  }, _react["default"].Children.map(children, function (child) {
    if ( /*#__PURE__*/_react["default"].isValidElement(child)) return /*#__PURE__*/_react["default"].cloneElement(child, _objectSpread({}, props));
    return child;
  }));
});

ListBase.displayName = 'ListBase';
ListBase.propTypes = {
  children: _propTypes["default"].node.isRequired,
  className: _propTypes["default"].string
};
ListBase.defaultProps = {
  className: ''
};
/*-- ListItem --*/

var ListItem = /*#__PURE__*/_react["default"].forwardRef(function (_ref2, ref) {
  var children = _ref2.children,
      className = _ref2.className,
      classes = _ref2.classes,
      gridCols = _ref2.gridCols,
      selected = _ref2.selected,
      onClick = _ref2.onClick;

  var _grid = gridCols > 0 ? ['grid grid-cols', gridCols].join('-') : '';

  var _selected = selected ? classes.selected ? classes.selected : 'bg-secondary-100' : '';

  return /*#__PURE__*/_react["default"].createElement("li", {
    ref: ref,
    onClick: onClick,
    className: "".concat(_grid, " ").concat(_selected, " ").concat(className)
  }, children);
});

ListItem.displayName = 'ListItem';
ListItem.propTypes = {
  children: _propTypes["default"].node.isRequired,
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  gridCols: _propTypes["default"].number,
  selected: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};
ListItem.defaultProps = {
  className: '',
  classes: {},
  gridCols: 0,
  selected: false,
  onClick: function onClick() {}
};
/*-- List --*/

var renderListItems = function renderListItems(_ref3) {
  var data = _ref3.data,
      gridCols = _ref3.gridCols,
      renderItem = _ref3.renderItem;
  return data.map(function (item, index) {
    var _item = {
      item: item,
      index: index
    };
    return renderItem(gridCols ? _objectSpread(_objectSpread({}, _item), {}, {
      ListCol: _listCol["default"]
    }) : _item);
  });
};

var List = /*#__PURE__*/_react["default"].forwardRef(function (_ref4, ref) {
  var classes = _ref4.classes,
      data = _ref4.data,
      renderHeader = _ref4.renderHeader,
      renderFooter = _ref4.renderFooter,
      renderItem = _ref4.renderItem,
      spacing = _ref4.spacing,
      gridCols = _ref4.gridCols;

  var _grid = gridCols > 0 ? ['grid grid-cols', gridCols].join('-') : '';

  var _spacing = ['space-y', spacing].join('-');

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    className: classes.root
  }, renderHeader && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.headerContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_grid, " ").concat(classes.header)
  }, gridCols ? renderHeader({
    ListCol: _listCol["default"]
  }) : renderHeader())), /*#__PURE__*/_react["default"].createElement(ListBase, {
    className: "flex flex-col ".concat(_spacing, " overflow-y-scroll scrollbar ").concat(classes.list),
    classes: classes,
    gridCols: gridCols
  }, renderListItems({
    data: data,
    gridCols: gridCols,
    renderItem: renderItem
  })), renderFooter && /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_grid, " ").concat(classes.footer)
  }, gridCols ? renderFooter({
    ListCol: _listCol["default"]
  }) : renderFooter()));
});

List.displayName = 'List';
List.propTypes = {
  data: _propTypes["default"].array.isRequired,
  renderItem: _propTypes["default"].oneOfType([_propTypes["default"].func.isRequired, _propTypes["default"].elementType.isRequired]),
  classes: _propTypes["default"].object,
  renderHeader: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].elementType]),
  renderFooter: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].elementType]),
  spacing: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  gridCols: _propTypes["default"].number
};
List.defaultProps = {
  classes: {
    root: '',
    header: '',
    list: '',
    footer: '',
    selected: ''
  },
  renderHeader: null,
  renderFooter: null,
  spacing: 0,
  gridCols: 0
};
List.ListItem = ListItem;
var _default = List;
exports["default"] = _default;