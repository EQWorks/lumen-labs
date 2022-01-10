"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _hooks = require("../hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _baseClasses = function _baseClasses(_ref) {
  var anchor = _ref.anchor;
  return {
    root: (0, _clsx2["default"])('relative inline-flex', {
      'flex-row': anchor === 'horizontal',
      'flex-col': anchor === 'vertical'
    }),
    dialog: 'absolute',
    modal: 'fixed z-20 max-h-full max-w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    overlay: 'absolute z-10 inset-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-200'
  };
};

var DialogBase = function DialogBase(_ref2) {
  var _clsx;

  var classes = _ref2.classes,
      button = _ref2.button,
      children = _ref2.children,
      modal = _ref2.modal,
      open = _ref2.open,
      anchor = _ref2.anchor,
      onClick = _ref2.onClick,
      disabled = _ref2.disabled;

  var baseClasses = _baseClasses({
    anchor: anchor,
    modal: modal
  });

  var _useComponentIsActive = (0, _hooks.useComponentIsActive)(),
      ref = _useComponentIsActive.ref,
      componentIsActive = _useComponentIsActive.componentIsActive,
      setComponentIsActive = _useComponentIsActive.setComponentIsActive;

  var controlledOpen = open || open === false || open === '';
  var _open = componentIsActive;

  if (controlledOpen) {
    _open = open;
  }

  if (!componentIsActive && open) {
    onClick();
  }

  var handleClick = function handleClick() {
    if (!disabled) {
      if (!controlledOpen) {
        setComponentIsActive(function (state) {
          return !state;
        });
      } else {
        setComponentIsActive(!open);
      }

      onClick();
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    className: "".concat(baseClasses.root, " ").concat(classes.root)
  }, button && /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.button,
    onClick: handleClick
  }, button), _open && /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx2["default"])((_clsx = {}, _defineProperty(_clsx, "".concat(baseClasses.modal, " ").concat(classes.modal), modal), _defineProperty(_clsx, "".concat(baseClasses.dialog, " ").concat(classes.dialog), !modal), _clsx))
  }, children))), _open && modal && /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(baseClasses.overlay, " ").concat(classes.overlay)
  }));
};

DialogBase.propTypes = {
  children: _propTypes["default"].node.isRequired,
  button: _propTypes["default"].node,
  classes: _propTypes["default"].object,
  modal: _propTypes["default"].bool,
  open: _propTypes["default"].bool,
  anchor: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  disabled: _propTypes["default"].bool
};
DialogBase.defaultProps = {
  classes: {
    root: '',
    button: '',
    modal: '',
    dialog: '',
    overlay: ''
  },
  button: null,
  modal: false,
  open: undefined,
  anchor: 'vertical',
  onClick: function onClick() {},
  disabled: false
};
var _default = DialogBase;
exports["default"] = _default;