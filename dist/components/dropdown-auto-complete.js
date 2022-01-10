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

var _ = require("..");

var _hooks = require("../hooks");

var _excluded = ["classes", "data", "size", "value", "onSelect", "onDelete", "inputProps", "showType", "disabled"];

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
        optionSize: 'mb-9px',
        itemContainer: 'py-5px',
        contentContainer: 'py-5px',
        type: 'py-2.5',
        description: 'text-xs',
        dividerContainer: 'pt-3.5 pb-2.5'
      };
      break;

    case 'md':
      contentSize = {
        optionSize: 'mb-5px',
        itemContainer: 'py-3px',
        contentContainer: 'py-3px',
        type: 'py-1.5',
        description: 'text-11px',
        dividerContainer: 'pt-2 pb-1.5'
      };
      break;

    default:
      break;
  }

  return contentSize;
};

var DropdownAutoComplete = function DropdownAutoComplete(_ref) {
  var classes = _ref.classes,
      data = _ref.data,
      size = _ref.size,
      value = _ref.value,
      onSelect = _ref.onSelect,
      onDelete = _ref.onDelete,
      inputProps = _ref.inputProps,
      showType = _ref.showType,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(data),
      _useState2 = _slicedToArray(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = (0, _react.useState)(value || {}),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedOptions = _useState4[0],
      setSelectedOptions = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      open = _useState6[0],
      setOpen = _useState6[1];

  var _useState7 = (0, _react.useState)(value ? value.title : ''),
      _useState8 = _slicedToArray(_useState7, 2),
      userInput = _useState8[0],
      setUserInput = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      filteredOptions = _useState10[0],
      setFilteredOptions = _useState10[1];

  var _useComponentIsActive = (0, _hooks.useComponentIsActive)(),
      ref = _useComponentIsActive.ref,
      componentIsActive = _useComponentIsActive.componentIsActive,
      setComponentIsActive = _useComponentIsActive.setComponentIsActive;

  var contentSize = _contentSize(size);

  var dropdownAutoCompleteClasses = Object.freeze({
    listContainer: "capitalize ".concat(classes.listContainer),
    itemContainer: "text-secondary-600 ".concat(contentSize.itemContainer),
    contentContainer: "px-2.5 cursor-pointer hover:bg-neutral-100 hover:text-secondary-800 active:bg-neutral-200\n      ".concat(contentSize.contentContainer, " ").concat(classes.contentContainer),
    contentHeader: "w-full flex flex-row items-center justify-between ".concat(classes.contentHeader),
    type: "px-5px flex items-center font-semibold text-secondary-400 ".concat(contentSize.type, " ").concat(classes.type),
    description: "pt-5px font-normal text-secondary-500 ".concat(contentSize.description, " ").concat(classes.description),
    dividerContainer: "px-2.5 flex flex-row items-center font-bold text-secondary-600 border-t border-secondary-300 cursor-pointer \n      ".concat(contentSize.dividerContainer, " ").concat(classes.dividerContainer),
    startIcon: 'mr-2.5 fill-current stroke-current',
    endIcon: 'ml-2.5 fill-current stroke-current',
    selected: 'font-semibold text-secondary-900 bg-interactive-100 hover:text-secondary-900 hover:bg-interactive-100'
  });
  var dropdownClasses = Object.freeze({
    root: classes.root,
    menu: "".concat(!data.length > 0 && 'hidden', " ").concat(classes.menu ? classes.menu : 'w-250px'),
    content: classes.content
  });
  var textFieldClasses = Object.freeze({
    container: classes.inputContainer,
    input: "capitalize ".concat(classes.input)
  });
  (0, _react.useEffect)(function () {
    var initialOptions = [];
    data && data.forEach(function (el) {
      el.items.forEach(function (item) {
        initialOptions.push(_objectSpread(_objectSpread({}, item), {}, {
          type: el.type && el.type.title
        }));
      });
    });
    setOptions(initialOptions);
    setFilteredOptions(initialOptions);
  }, [data]);

  if (!componentIsActive && open) {
    setOpen(!open);
  }

  var onClickSelect = function onClickSelect() {
    setComponentIsActive(function (state) {
      return !state;
    });
    setOpen(!open);
  };

  var renderList = function renderList(data) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, data.map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: "item-container-".concat(index),
        className: "item-container-".concat(index, " \n              ").concat(dropdownAutoCompleteClasses.itemContainer, "\n              ").concat(!filteredOptions.some(function (op) {
          return op.title === item.title;
        }) && 'hidden', " \n            "),
        onClick: function onClick() {
          return handleOnClick(index, item);
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "content-container-".concat(index, "\n                ").concat(dropdownAutoCompleteClasses.contentContainer, "\n                ").concat(selectedOptions.title === item.title && dropdownAutoCompleteClasses.selected, " \n              ")
      }, renderListItem(item), item.description && /*#__PURE__*/_react["default"].createElement("div", {
        className: "description-container-".concat(index, " ").concat(dropdownAutoCompleteClasses.description)
      }, item.description)));
    }));
  };

  var renderListItem = function renderListItem(item) {
    var selected = null;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: dropdownAutoCompleteClasses.contentHeader
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex flex-row items-center"
    }, item.startIcon && /*#__PURE__*/_react["default"].createElement("div", {
      className: dropdownAutoCompleteClasses.startIcon
    }, item.startIcon), /*#__PURE__*/_react["default"].createElement("span", null, item.title || item.type), item.endIcon && /*#__PURE__*/_react["default"].createElement("div", {
      className: dropdownAutoCompleteClasses.endIcon
    }, item.endIcon)), selected);
  };

  var handleOnClick = function handleOnClick(i, value) {
    if (selectedOptions && selectedOptions.title === value.title) {
      setSelectedOptions([]);
      setUserInput('');
    } else {
      setSelectedOptions(value);
      setUserInput(value.title);
      onClickSelect();
    }

    onSelect(_objectSpread(_objectSpread({}, value), {}, {
      i: i
    }));
    setFilteredOptions(options);
  };

  var onChange = function onChange(val) {
    var filteredSuggestions = options.filter(function (suggestion) {
      return suggestion.title.toLowerCase().indexOf(val.toLowerCase()) > -1 || suggestion.type && suggestion.type.toLowerCase().indexOf(val.toLowerCase()) > -1;
    });

    if (!val || val != selectedOptions.title) {
      setSelectedOptions([]);
    }

    if (filteredSuggestions.length) {
      setOpen(true);
    } else {
      setOpen(false);
    }

    if (val) {
      setOpen(true);
      setComponentIsActive(true);
    }

    setFilteredOptions(filteredSuggestions);
    setUserInput(val);
  };

  var onClickDelete = function onClickDelete(e) {
    onDelete(e);
  };

  var autoComplete = /*#__PURE__*/_react["default"].createElement(_.TextField, {
    classes: textFieldClasses,
    size: size,
    value: userInput,
    onClick: onClickSelect,
    onChange: onChange,
    onDelete: onClickDelete,
    inputProps: inputProps,
    disabled: disabled
  });

  return /*#__PURE__*/_react["default"].createElement(_baseComponents.DropdownBase, _extends({
    ref: ref,
    classes: dropdownClasses,
    open: open,
    size: size,
    customTrigger: autoComplete,
    disabled: disabled
  }, rest), /*#__PURE__*/_react["default"].createElement("ul", null, data && data.map(function (el, index) {
    return /*#__PURE__*/_react["default"].createElement(_react2.Menu.Item, {
      as: "li",
      key: "list-container-".concat(index),
      className: "list-container-".concat(index, " ").concat(dropdownAutoCompleteClasses.listContainer)
    }, showType && el.type && /*#__PURE__*/_react["default"].createElement("label", {
      className: "\n                    type-container-".concat(index, " ").concat(dropdownAutoCompleteClasses.type, "\n                    ").concat(!filteredOptions.some(function (op) {
        return op.type === el.type.title;
      }) && 'hidden', "\n                  "),
      htmlFor: "span"
    }, renderListItem(el.type)), renderList(el.items), el.divider && /*#__PURE__*/_react["default"].createElement("div", {
      className: "divider-container-".concat(index, " ").concat(dropdownAutoCompleteClasses.dividerContainer)
    }, renderListItem(el.divider)));
  })));
};

DropdownAutoComplete.propTypes = {
  classes: _propTypes["default"].object,
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    type: _propTypes["default"].shape({
      title: _propTypes["default"].string,
      startIcon: _propTypes["default"].node,
      endIcon: _propTypes["default"].node
    }),
    items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      title: _propTypes["default"].string,
      description: _propTypes["default"].string,
      startIcon: _propTypes["default"].node,
      endIcon: _propTypes["default"].node
    })),
    divider: _propTypes["default"].shape({
      title: _propTypes["default"].string,
      startIcon: _propTypes["default"].node,
      endIcon: _propTypes["default"].node
    })
  })),
  size: _propTypes["default"].string,
  value: _propTypes["default"].shape({
    title: _propTypes["default"].string.isRequired
  }),
  onSelect: _propTypes["default"].func,
  onDelete: _propTypes["default"].func,
  inputProps: _propTypes["default"].object,
  showType: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool
};
DropdownAutoComplete.defaultProps = {
  classes: {
    root: '',
    menu: '',
    input: '',
    inputContainer: '',
    content: '',
    listContainer: '',
    itemContainer: '',
    contentContainer: '',
    contentHeader: '',
    description: '',
    type: '',
    dividerContainer: ''
  },
  data: [],
  size: 'md',
  onSelect: function onSelect() {},
  onDelete: function onDelete() {},
  inputProps: {},
  showType: false,
  disabled: false
};
DropdownAutoComplete.displayName = 'DropdownAutoComplete';
var _default = DropdownAutoComplete;
exports["default"] = _default;