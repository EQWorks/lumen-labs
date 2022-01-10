"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icons = require("../icons");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Pagination = function Pagination(_ref) {
  var classes = _ref.classes,
      items = _ref.items,
      onChangePage = _ref.onChangePage,
      initialPage = _ref.initialPage,
      pageSize = _ref.pageSize,
      showPage = _ref.showPage,
      firstLast = _ref.firstLast,
      counter = _ref.counter,
      rowsPerPage = _ref.rowsPerPage;
  var paginationClasses = Object.freeze({
    container: "flex items-center text-xs tracking-md leading-1.33 bg-secondary-50\n      ".concat(classes.container && classes.container),
    item: "min-w-5 mr-5px py-0.5 flex justify-center text-secondary-400 cursor-pointer rounded-sm 'hover:text-secondary-900'\n      ".concat(classes.item && classes.item),
    arrow: "min-h-5 flex justify-center items-center cursor-pointer ".concat(classes.arrow && classes.arrow),
    pageItem: "".concat(classes.pageItem && classes.pageItem),
    currentPageColor: "bg-secondary-200 text-secondary-900 ".concat(classes.currentPageColor && classes.currentPageColor)
  });

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      pager = _useState2[0],
      setPager = _useState2[1];

  var _useState3 = (0, _react.useState)(pageSize),
      _useState4 = _slicedToArray(_useState3, 2),
      rowsPerPageSize = _useState4[0],
      setRowsPerPageSize = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      dropdownData = _useState6[0],
      setDropdownData = _useState6[1];

  (0, _react.useEffect)(function () {
    if (rowsPerPage) {
      var _dropdownData = [];
      rowsPerPage.forEach(function (data) {
        _dropdownData.push({
          title: data
        });
      });
      setDropdownData(_dropdownData);
    }
  }, [rowsPerPage]);

  var setPage = function setPage(page) {
    var _pager = pager;

    if (page < 1 || page > _pager.totalPages) {
      return;
    }

    _pager = getPagerObject(items.length, page, rowsPerPageSize);
    var pageOfItems = items.slice(_pager.startIndex, _pager.endIndex + 1);
    setPager(_pager);
    onChangePage(pageOfItems, _pager);
  };

  var getPagerObject = function getPagerObject(totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1;
    pageSize = pageSize || 10;
    var totalPages = Math.ceil(totalItems / pageSize);
    var startPage, endPage;

    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    var pages = _toConsumableArray(Array(endPage + 1 - startPage).keys()).map(function (i) {
      return startPage + i;
    });

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  };

  (0, _react.useEffect)(function () {
    setPage(items && items.length && initialPage);
  }, [items, rowsPerPageSize]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, pager.pages && /*#__PURE__*/_react["default"].createElement("ul", {
    className: "pagination ".concat(paginationClasses.container)
  }, rowsPerPageSize !== pager.totalItems && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, counter && /*#__PURE__*/_react["default"].createElement("li", {
    className: "min-w-40 px-2"
  }, /*#__PURE__*/_react["default"].createElement("span", null, pager.startIndex + 1, " - ", pager.endIndex + 1, " of ", pager.totalItems, " items")), /*#__PURE__*/_react["default"].createElement("li", {
    className: "mr-5px\n              ".concat(paginationClasses.arrow, " \n              ").concat(pager.currentPage === 1 ? 'text-secondary-400 disabled' : 'text-secondary-900', "\n            ")
  }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowLeft, {
    size: "md",
    onClick: function onClick() {
      return setPage(pager.currentPage - 1);
    }
  })), firstLast && pager.startPage > 1 && /*#__PURE__*/_react["default"].createElement("li", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(paginationClasses.item, " ").concat(pager.currentPage === pager.totalPages ? 'disabled' : ''),
    onClick: function onClick() {
      return setPage(1);
    }
  }, "1"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "min-w-5 mr-5px py-0.5 flex justify-center"
  }, "...")), showPage && pager.pages.map(function (page, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index,
      className: "\n                ".concat(paginationClasses.item, "\n                ").concat(paginationClasses.pageItem, "\n                ").concat(pager.currentPage === page ? paginationClasses.currentPageColor : '', "\n              "),
      onClick: function onClick() {
        return setPage(page);
      }
    }, page);
  }), firstLast && pager.currentPage + 2 < pager.totalPages && pager.totalPages > 5 && /*#__PURE__*/_react["default"].createElement("li", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "min-w-5 mr-5px py-0.5 flex justify-center"
  }, "..."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(paginationClasses.item, " ").concat(pager.currentPage === pager.totalPages ? 'disabled' : ''),
    onClick: function onClick() {
      return setPage(pager.totalPages);
    }
  }, pager.totalPages)), /*#__PURE__*/_react["default"].createElement("li", {
    className: "\n              ".concat(paginationClasses.arrow, " \n              ").concat(pager.currentPage === pager.totalPages ? 'text-secondary-400 disabled' : 'text-secondary-900', "\n            ")
  }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, {
    size: "md",
    onClick: function onClick() {
      return setPage(pager.currentPage + 1);
    }
  }))), rowsPerPage && /*#__PURE__*/_react["default"].createElement("li", {
    className: "min-h-5 pl-5 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: 'mr-2.5'
  }, "Rows: "), /*#__PURE__*/_react["default"].createElement(_.DropdownAutoCenter, {
    data: dropdownData,
    onSelect: function onSelect(val) {
      setRowsPerPageSize(Number(val.title));
    },
    value: {
      title: pageSize
    },
    endIcon: /*#__PURE__*/_react["default"].createElement(_icons.ArrowUpDown, {
      size: "sm"
    })
  }))));
};

Pagination.propTypes = {
  classes: _propTypes["default"].exact({
    container: _propTypes["default"].string,
    item: _propTypes["default"].string,
    arrow: _propTypes["default"].string,
    pageItem: _propTypes["default"].string,
    currentPageColor: _propTypes["default"].string
  }),
  items: _propTypes["default"].array.isRequired,
  onChangePage: _propTypes["default"].func.isRequired,
  initialPage: _propTypes["default"].number,
  pageSize: _propTypes["default"].number,
  showPage: _propTypes["default"].bool,
  firstLast: _propTypes["default"].bool,
  counter: _propTypes["default"].bool,
  rowsPerPage: _propTypes["default"].arrayOf(_propTypes["default"].number)
};
Pagination.defaultProps = {
  classes: {
    container: '',
    item: '',
    arrow: '',
    pageItem: '',
    currentPageColor: ''
  },
  initialPage: 1,
  pageSize: 10,
  showPage: true,
  firstLast: true,
  counter: true
};
var _default = Pagination;
exports["default"] = _default;