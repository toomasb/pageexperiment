// ConversionTimed.js
'use client';

import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
var __jsx = React.createElement;
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React, { useEffect, useRef } from 'react';
import { useABTest } from './PageExperimentContextClient';
import { sendConversionData } from './utils/sendConversionData';
var ConversionTimed = function ConversionTimed(_ref) {
  var children = _ref.children,
    affectedExperiments = _ref.affectedExperiments,
    conversionName = _ref.conversionName,
    durationInSeconds = _ref.durationInSeconds;
  var timerRef = useRef(null);
  var _useABTest = useABTest(),
    pageExperimentConfig = _useABTest.pageExperimentConfig,
    apiKey = _useABTest.apiKey;
  useEffect(function () {
    var durationInMilliseconds;
    if (typeof durationInSeconds === 'string') {
      var parsedDuration = parseFloat(durationInSeconds);
      if (isNaN(parsedDuration)) {
        console.error('Invalid durationInSeconds value:', durationInSeconds);
        return;
      }
      durationInMilliseconds = parsedDuration * 1000;
    } else {
      durationInMilliseconds = durationInSeconds * 1000;
    }
    timerRef.current = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return sendConversionData({
              apiKey: apiKey,
              pageExperimentConfig: pageExperimentConfig,
              affectedExperiments: affectedExperiments,
              conversionName: conversionName,
              conversionType: 'timed',
              durationInSeconds: durationInSeconds
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })), durationInMilliseconds);
    return function () {
      clearTimeout(timerRef.current);
    };
  }, []);
  return __jsx("div", null, children);
};
export default ConversionTimed;