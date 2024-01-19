"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _PageExperimentContextClient = require("./PageExperimentContextClient");
var TestA = function TestA(_ref) {
  var children = _ref.children,
    experimentName = _ref.experimentName;
  var _useABTest = (0, _PageExperimentContextClient.useABTest)(),
    pageExperimentConfig = _useABTest.pageExperimentConfig,
    apiKey = _useABTest.apiKey;
  var isVariantA = pageExperimentConfig["experiment_variants"][experimentName] === 'A' || !pageExperimentConfig["experiment_variants"][experimentName];
  return isVariantA ? /*#__PURE__*/React.createElement("div", null, children) : null;
};
var _default = exports["default"] = TestA;