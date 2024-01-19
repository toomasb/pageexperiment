'use client';

import React from "react";
var __jsx = React.createElement;
import { useABTest } from './PageExperimentContextClient';
var TestB = function TestB(_ref) {
  var children = _ref.children,
    experimentName = _ref.experimentName;
  var _useABTest = useABTest(),
    pageExperimentConfig = _useABTest.pageExperimentConfig,
    apiKey = _useABTest.apiKey;
  var isVariantB = pageExperimentConfig["experiment_variants"][experimentName] === 'B';
  return isVariantB ? __jsx(React.Fragment, null, children) : null;
};
export default TestB;