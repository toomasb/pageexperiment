// ConversionClick.js
'use client';

import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
var __jsx = React.createElement;
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import { useABTest } from './PageExperimentContextClient';
import { sendConversionData } from './utils/sendConversionData';
var ConversionClick = function ConversionClick(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    affectedExperiments = _ref.affectedExperiments,
    conversionName = _ref.conversionName;
  var _useABTest = useABTest(),
    pageExperimentConfig = _useABTest.pageExperimentConfig,
    apiKey = _useABTest.apiKey;
  var handleClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(e, childOnClick) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.stopPropagation();
            if (childOnClick) {
              childOnClick(e);
            }
            _context.next = 4;
            return sendConversionData({
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
  var childrenWithProps = React.Children.map(children, function (child) {
    return /*#__PURE__*/React.cloneElement(child, {
      onClick: function onClick(e) {
        return handleClick(e, child.props.onClick);
      }
    });
  });
  return __jsx(React.Fragment, null, childrenWithProps);
};
export default ConversionClick;