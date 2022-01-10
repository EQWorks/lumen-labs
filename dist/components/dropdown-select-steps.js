"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@headlessui/react");

var _baseComponents = require("../base-components");

var _icons = require("../icons");

var _excluded = ["classes", "data", "button", "size", "onSelect", "startIcon", "endIcon", "placeholder", "showType", "showDivider", "disabled"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _contentSize = function _contentSize(size) {
  var contentSize = '';

  switch (size) {
    case 'lg':
      contentSize = {
        itemContainer: 'py-5px',
        contentContainer: 'py-5px',
        type: 'py-2.5',
        dividerContainer: 'pt-3.5 pb-2.5'
      };
      break;

    case 'md':
      contentSize = {
        itemContainer: 'py-3px',
        contentContainer: 'py-3px',
        type: 'py-1.5',
        dividerContainer: 'pt-2 pb-1.5'
      };
      break;

    default:
      break;
  }

  return contentSize;
};

var DropdownSelectSteps = function DropdownSelectSteps(_ref) {
  var classes = _ref.classes,
      data = _ref.data,
      button = _ref.button,
      size = _ref.size,
      onSelect = _ref.onSelect,
      startIcon = _ref.startIcon,
      endIcon = _ref.endIcon,
      placeholder = _ref.placeholder,
      showType = _ref.showType,
      showDivider = _ref.showDivider,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedOptions = _useState6[0],
      setSelectedOptions = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      categoryData = _useState8[0],
      setCategoryData = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      subCategoryData = _useState10[0],
      setSubCategoryData = _useState10[1];

  var contentSize = _contentSize(size);

  var dropdownSelectStepsClasses = Object.freeze({
    listContainer: "w-250px h-auto focus:outline-none ".concat(classes.listContainer),
    itemContainer: "text-secondary-600 ".concat(contentSize.itemContainer),
    contentContainer: "px-2.5 cursor-pointer hover:bg-neutral-100 hover:text-secondary-800 active:bg-neutral-200 \n      ".concat(contentSize.contentContainer, " ").concat(classes.contentContainer),
    contentHeader: "w-full flex flex-row items-center justify-between cursor-pointer ".concat(classes.contentHeader),
    type: "px-5px flex items-center font-semibold text-secondary-400 ".concat(contentSize.type, " ").concat(classes.type),
    dividerContainer: "px-2.5 flex flex-row items-center font-bold text-secondary-600 border-t border-secondary-300 cursor-pointer \n      ".concat(contentSize.dividerContainer, " ").concat(classes.dividerContainer),
    startIcon: 'mr-2.5 fill-current stroke-current',
    endIcon: 'ml-2.5 fill-current stroke-current',
    selected: 'font-semibold text-secondary-900 bg-interactive-100 hover:text-secondary-900 hover:bg-interactive-100',
    category: "".concat(categoryData.items && 'hidden'),
    subCategory: "".concat(subCategoryData.items && 'hidden')
  });
  var dropdownClasses = Object.freeze({
    root: classes.root,
    menu: "w-auto mt-5px flex flex-row ".concat(!data.length > 0 && 'hidden', " ").concat(classes.menu),
    button: classes.container,
    content: classes.content
  });
  (0, _react.useEffect)(function () {
    setOptions(data);
  }, [data]);

  var onClickSelect = function onClickSelect() {
    setOpen(!open);
  };

  var renderSelectedOptions = function renderSelectedOptions() {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, categoryData.title ? /*#__PURE__*/_react["default"].createElement("span", {
      className: "mr-2.5 text-secondary-800"
    }, "".concat(categoryData.title, " ").concat(subCategoryData && "> ".concat(subCategoryData.title), " ").concat(selectedOptions && "> ".concat(selectedOptions.title))) : '');
  };

  var handleCategoryOnClick = function handleCategoryOnClick(value, index) {
    if (categoryData === value) {
      setCategoryData('');
      setSubCategoryData('');
      setSelectedOptions('');
    } else {
      setCategoryData(value);
      !value.items && setOpen(!open);
      onSelect(_objectSpread(_objectSpread({}, value), {}, {
        index: index
      }));
    }
  };

  var handleSubCategoryOnClick = function handleSubCategoryOnClick(value, index) {
    var selectedItem = {
      type: categoryData.type,
      title: categoryData.title,
      item: value,
      index: index
    };

    if (subCategoryData === value) {
      setSubCategoryData('');
      setSelectedOptions('');
    } else {
      setSubCategoryData(value);
      !value.items && setOpen(!open);
      onSelect(selectedItem);
    }
  };

  var handleItemOnClick = function handleItemOnClick(value, index) {
    var selectedItem = {
      type: categoryData.type,
      title: categoryData.title,
      item: {
        type: subCategoryData.type,
        title: subCategoryData.title,
        subItem: value,
        index: index
      }
    };

    if (selectedOptions === value) {
      setSelectedOptions('');
    } else {
      setSelectedOptions(value);
      setOpen(!open);
      onSelect(selectedItem);
    }
  };

  var renderList = function renderList(data, type) {
    var handleOnClick = '';
    var selectedData = '';

    switch (type) {
      case 'category':
        handleOnClick = handleCategoryOnClick;
        selectedData = categoryData;
        break;

      case 'subcategory':
        handleOnClick = handleSubCategoryOnClick;
        selectedData = subCategoryData;
        break;

      case 'item':
        handleOnClick = handleItemOnClick;
        selectedData = selectedOptions;
        break;

      default:
        break;
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, data.map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement(_react2.Menu.Item, {
        as: "li",
        key: index,
        className: "item-container-".concat(index, " ").concat(dropdownSelectStepsClasses.itemContainer),
        onClick: function onClick() {
          return handleOnClick(item, index);
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "content-container-".concat(index, "\n                ").concat(dropdownSelectStepsClasses.contentContainer, " \n                ").concat(Object.values(selectedData).includes(item.title) && dropdownSelectStepsClasses.selected, "\n              ")
      }, renderListItem(item, selectedData)));
    }));
  };

  var renderListItem = function renderListItem(item, selectedData) {
    var selected = '';

    if (!item.items && Object.values(selectedData).includes(item.title)) {
      selected = /*#__PURE__*/_react["default"].createElement(_icons.ValidationCheck, {
        size: size
      });
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: dropdownSelectStepsClasses.contentHeader
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex flex-row items-center"
    }, item.startIcon && /*#__PURE__*/_react["default"].createElement("div", {
      className: dropdownSelectStepsClasses.startIcon
    }, item.startIcon), /*#__PURE__*/_react["default"].createElement("span", null, item.title || item.type), item.endIcon && /*#__PURE__*/_react["default"].createElement("div", {
      className: dropdownSelectStepsClasses.endIcon
    }, item.endIcon)), selected);
  };

  return /*#__PURE__*/_react["default"].createElement(_baseComponents.DropdownBase, _extends({
    classes: dropdownClasses,
    renderSelectedOptions: renderSelectedOptions,
    button: button,
    onClick: onClickSelect,
    open: open,
    size: size,
    startIcon: startIcon,
    endIcon: endIcon,
    placeholder: placeholder,
    disabled: disabled
  }, rest), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "capitalize ".concat(dropdownSelectStepsClasses.listContainer, " ").concat(dropdownSelectStepsClasses.category)
  }, options && renderList(options, 'category')), categoryData.items && /*#__PURE__*/_react["default"].createElement("ul", {
    className: "".concat(dropdownSelectStepsClasses.listContainer, " ").concat(dropdownSelectStepsClasses.subCategory)
  }, showType && categoryData.type && /*#__PURE__*/_react["default"].createElement("label", {
    className: "capitalize ".concat(dropdownSelectStepsClasses.type),
    htmlFor: "span"
  }, renderListItem(categoryData)), renderList(categoryData.items, 'subcategory'), showDivider && categoryData.type && /*#__PURE__*/_react["default"].createElement("div", {
    className: "capitalize ".concat(dropdownSelectStepsClasses.dividerContainer),
    onClick: function onClick() {
      return handleCategoryOnClick(categoryData);
    }
  }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowLeft, {
    className: dropdownSelectStepsClasses.startIcon,
    size: size
  }), /*#__PURE__*/_react["default"].createElement("span", null, categoryData.type))), subCategoryData.items && /*#__PURE__*/_react["default"].createElement("ul", {
    className: dropdownSelectStepsClasses.listContainer
  }, showType && categoryData.type && /*#__PURE__*/_react["default"].createElement("label", {
    className: dropdownSelectStepsClasses.type,
    htmlFor: "span"
  }, renderListItem(subCategoryData)), renderList(subCategoryData.items, 'item'), showDivider && subCategoryData.type && /*#__PURE__*/_react["default"].createElement("div", {
    className: dropdownSelectStepsClasses.dividerContainer,
    onClick: function onClick() {
      return handleSubCategoryOnClick(subCategoryData);
    }
  }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowLeft, {
    className: dropdownSelectStepsClasses.startIcon,
    size: size
  }), /*#__PURE__*/_react["default"].createElement("span", null, subCategoryData.type))));
};

DropdownSelectSteps.propTypes = {
  classes: _propTypes["default"].object,
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    type: _propTypes["default"].string,
    title: _propTypes["default"].string,
    startIcon: _propTypes["default"].node,
    endIcon: _propTypes["default"].node,
    items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      type: _propTypes["default"].string,
      title: _propTypes["default"].string,
      startIcon: _propTypes["default"].node,
      endIcon: _propTypes["default"].node,
      items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
        title: _propTypes["default"].string,
        startIcon: _propTypes["default"].node,
        endIcon: _propTypes["default"].node
      }))
    }))
  })),
  button: _propTypes["default"].node,
  size: _propTypes["default"].string,
  onSelect: _propTypes["default"].func,
  startIcon: _propTypes["default"].node,
  endIcon: _propTypes["default"].node,
  placeholder: _propTypes["default"].string,
  showType: _propTypes["default"].bool,
  showDivider: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool
};
DropdownSelectSteps.defaultProps = {
  classes: {
    root: '',
    menu: '',
    button: '',
    content: '',
    listContainer: '',
    itemContainer: '',
    contentContainer: '',
    contentHeader: '',
    type: '',
    dividerContainer: ''
  },
  data: [],
  button: null,
  size: 'md',
  onSelect: function onSelect() {},
  startIcon: null,
  endIcon: null,
  placeholder: 'Select',
  showType: true,
  showDivider: true,
  disabled: false
};
DropdownSelectSteps.displayName = 'DropdownSelectSteps';
var _default = DropdownSelectSteps;
exports["default"] = _default;