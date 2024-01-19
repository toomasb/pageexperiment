// ConversionScrollTo.js
'use client';

import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
var __jsx = React.createElement;
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React, { useEffect, useRef } from 'react';
import { useABTest } from './PageExperimentContextClient';
import { sendConversionData } from './utils/sendConversionData';
var ConversionScrollTo = function ConversionScrollTo(_ref) {
  var children = _ref.children,
    affectedExperiments = _ref.affectedExperiments,
    conversionName = _ref.conversionName;
  var ref = useRef(null);
  var _useABTest = useABTest(),
    pageExperimentConfig = _useABTest.pageExperimentConfig,
    apiKey = _useABTest.apiKey;
  useEffect(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(entry) {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!entry.isIntersecting) {
                  _context.next = 4;
                  break;
                }
                _context.next = 3;
                return sendConversionData({
                  apiKey: apiKey,
                  pageExperimentConfig: pageExperimentConfig,
                  affectedExperiments: affectedExperiments,
                  conversionName: conversionName,
                  conversionType: "scrollTo",
                  durationInSeconds: null
                });
              case 3:
                observer.unobserve(ref.current);
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    }, {
      threshold: 1.0
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return function () {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return __jsx("div", {
    ref: ref
  }, children);
};
export default ConversionScrollTo;