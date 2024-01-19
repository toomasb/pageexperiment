// ConversionTimed.js
'use client';

var __jsx = React.createElement;
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
    timerRef.current = setTimeout(function () {
      sendConversionData({
        apiKey: apiKey,
        pageExperimentConfig: pageExperimentConfig,
        affectedExperiments: affectedExperiments,
        conversionName: conversionName,
        conversionType: 'timed',
        durationInSeconds: durationInSeconds
      });
    }, durationInMilliseconds);
    return function () {
      clearTimeout(timerRef.current);
    };
  }, []);
  return __jsx("div", null, children);
};
export default ConversionTimed;