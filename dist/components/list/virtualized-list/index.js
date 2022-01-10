"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactWindow = require("react-window");

var _reactVirtualizedAutoSizer = _interopRequireDefault(require("react-virtualized-auto-sizer"));

var _listItem = require("./list-item");

var _listCol = _interopRequireDefault(require("../list-col"));

require("../scrollbar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _renderItems = function _renderItems(_ref) {
  var data = _ref.data,
      index = _ref.index,
      columnIndex = _ref.columnIndex,
      rowIndex = _ref.rowIndex,
      style = _ref.style;
  return function (_ref2) {
    var renderItem = _ref2.renderItem,
        gridCols = _ref2.gridCols,
        isGrid = _ref2.isGrid,
        columnCount = _ref2.columnCount;

    var _index = isGrid ? columnCount * rowIndex + columnIndex : index;

    var item = {
      item: data[_index] || {},
      index: _index,
      columnIndex: columnIndex,
      rowIndex: rowIndex,
      style: style
    };
    return renderItem(gridCols > -1 ? _objectSpread(_objectSpread({}, item), {}, {
      ListCol: _listCol["default"]
    }) : item);
  };
};

var VirtualizedList = function VirtualizedList(_ref3) {
  var classes = _ref3.classes,
      data = _ref3.data,
      rowHeight = _ref3.rowHeight,
      gridCols = _ref3.gridCols,
      renderItem = _ref3.renderItem,
      renderHeader = _ref3.renderHeader,
      renderFooter = _ref3.renderFooter,
      scrollbar = _ref3.scrollbar,
      columnCount = _ref3.columnCount,
      columnWidth = _ref3.columnWidth,
      rowCount = _ref3.rowCount,
      rowWidth = _ref3.rowWidth;
  var isGrid = columnCount > -1 || columnWidth > -1 || rowCount > -1 || rowWidth > -1;
  var props = isGrid ? {
    columnCount: columnCount,
    columnWidth: columnWidth,
    rowCount: rowCount,
    rowWidth: rowWidth,
    rowHeight: rowHeight
  } : {
    itemSize: rowHeight
  };
  var ListElement = isGrid ? _reactWindow.FixedSizeGrid : _reactWindow.FixedSizeList;
  var ref = /*#__PURE__*/(0, _react.createRef)();

  var _grid = gridCols > 0 ? ['grid grid-cols', gridCols].join('-') : '';

  var _scrollbar = scrollbar ? 'scrollbar' : 'noscrollbar';

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, renderHeader && /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_grid, " ").concat(classes.header)
  }, gridCols ? renderHeader({
    ListCol: _listCol["default"]
  }) : renderHeader()), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.list
  }, /*#__PURE__*/_react["default"].createElement(_reactVirtualizedAutoSizer["default"], null, function (_ref4) {
    var height = _ref4.height,
        width = _ref4.width;
    return /*#__PURE__*/_react["default"].createElement(ListElement, _extends({
      ref: ref,
      className: "overflow-y-scroll ".concat(_scrollbar, " ").concat(classes.list),
      width: width,
      height: height,
      itemData: data,
      itemCount: data.length
    }, props), function (v) {
      return /*#__PURE__*/_react["default"].createElement(_listItem.PropsInheritor, {
        style: v.style,
        gridCols: gridCols,
        classes: classes
      }, _renderItems(v)({
        renderItem: renderItem,
        gridCols: gridCols,
        isGrid: isGrid,
        columnCount: columnCount
      }));
    });
  })), renderFooter && /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_grid, " ").concat(classes.footer)
  }, gridCols ? renderFooter({
    ListCol: _listCol["default"]
  }) : renderFooter()));
};

VirtualizedList.propTypes = {
  data: _propTypes["default"].array.isRequired,
  rowHeight: _propTypes["default"].number.isRequired,
  renderItem: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].object,
  gridCols: _propTypes["default"].number,
  renderHeader: _propTypes["default"].func,
  renderFooter: _propTypes["default"].func,
  scrollbar: _propTypes["default"].bool,
  columnCount: _propTypes["default"].number,
  columnWidth: _propTypes["default"].number,
  rowCount: _propTypes["default"].number,
  rowWidth: _propTypes["default"].number
};
VirtualizedList.defaultProps = {
  classes: {
    root: 'w-full h-2/3',
    list: 'w-full h-full'
  },
  width: null,
  gridCols: -1,
  renderHeader: function renderHeader() {},
  renderFooter: function renderFooter() {},
  scrollbar: true,
  columnCount: -1,
  columnWidth: -1,
  rowCount: -1,
  rowWidth: -1
};
VirtualizedList.ListItem = _listItem.ListItem;
var _default = VirtualizedList;
exports["default"] = _default;