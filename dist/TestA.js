"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _PageExperimentContextClient = require("./PageExperimentContextClient");
var __jsx = _react["default"].createElement;
var TestA = function TestA(_ref) {
  var children = _ref.children,
    experimentName = _ref.experimentName;
  var _useABTest = (0, _PageExperimentContextClient.useABTest)(),
    pageExperimentConfig = _useABTest.pageExperimentConfig,
    apiKey = _useABTest.apiKey;
  var isVariantA = pageExperimentConfig["experiment_variants"][experimentName] === 'A' || !pageExperimentConfig["experiment_variants"][experimentName];
  return isVariantA ? __jsx("div", null, children) : null;
};
var _default = exports["default"] = TestA;