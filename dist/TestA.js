'use client';

import React from "react";
var __jsx = React.createElement;
import { useABTest } from './PageExperimentContextClient';
var TestA = function TestA(_ref) {
  var children = _ref.children,
    experimentName = _ref.experimentName;
  var _useABTest = useABTest(),
    pageExperimentConfig = _useABTest.pageExperimentConfig,
    apiKey = _useABTest.apiKey;
  var isVariantA = pageExperimentConfig["experiment_variants"][experimentName] === 'A' || !pageExperimentConfig["experiment_variants"][experimentName];
  return isVariantA ? __jsx(React.Fragment, null, children) : null;
};
export default TestA;