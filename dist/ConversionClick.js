"use strict";
// ConversionClick.js
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _PageExperimentContextClient = require("./PageExperimentContextClient");
var _sendConversionData = require("./utils/sendConversionData");
var __jsx = _react["default"].createElement;
var ConversionClick = function ConversionClick(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    affectedExperiments = _ref.affectedExperiments,
    conversionName = _ref.conversionName;
  var _useABTest = (0, _PageExperimentContextClient.useABTest)(),
    pageExperimentConfig = _useABTest.pageExperimentConfig,
    apiKey = _useABTest.apiKey;
  var handleClick = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e, childOnClick) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.stopPropagation();
            if (childOnClick) {
              childOnClick(e);
            }
            _context.next = 4;
            return (0, _sendConversionData.sendConversionData)({
              apiKey: apiKey,
              pageExperimentConfig: pageExperimentConfig,
              affectedExperiments: affectedExperiments,
              conversionName: conversionName,
              conversionType: 'click',
              durationInSeconds: null
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleClick(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  // Cloning the child element and injecting the new onClick handler
  var childrenWithProps = _react["default"].Children.map(children, function (child) {
    return /*#__PURE__*/_react["default"].cloneElement(child, {
      onClick: function onClick(e) {
        return handleClick(e, child.props.onClick);
      }
    });
  });
  return __jsx(_react["default"].Fragment, null, childrenWithProps);
};
var _default = exports["default"] = ConversionClick;