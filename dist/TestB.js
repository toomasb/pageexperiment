'use client';

import { useABTest } from './PageExperimentContextClient';
var TestB = function TestB(_ref) {
  var children = _ref.children,
    experimentName = _ref.experimentName;
  var _useABTest = useABTest(),
    pageExperimentConfig = _useABTest.pageExperimentConfig,
    apiKey = _useABTest.apiKey;
  var isVariantB = pageExperimentConfig["experiment_variants"][experimentName] === 'B';
  return isVariantB ? /*#__PURE__*/React.createElement(React.Fragment, null, children) : null;
};
export default TestB;