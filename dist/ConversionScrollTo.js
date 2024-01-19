// ConversionScrollTo.js
'use client';

var __jsx = React.createElement;
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
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          sendConversionData({
            apiKey: apiKey,
            pageExperimentConfig: pageExperimentConfig,
            affectedExperiments: affectedExperiments,
            conversionName: conversionName,
            conversionType: "scrollTo",
            durationInSeconds: null
          });
          observer.unobserve(ref.current);
        }
      });
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