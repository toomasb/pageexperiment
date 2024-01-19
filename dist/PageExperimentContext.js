"use strict";
'use server';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageExperimentContext = void 0;
var _headers = require("next/headers");
var _PageExperimentContextClient = require("./PageExperimentContextClient");
var PageExperimentContext = exports.PageExperimentContext = function PageExperimentContext(_ref) {
  var children = _ref.children,
    apiKey = _ref.apiKey;
  var headersList = (0, _headers.headers)();
  var pageExperimentConfigJson = headersList.get('X-PageExperiment-Config');
  var pageExperimentConfig = {};
  try {
    pageExperimentConfig = JSON.parse(pageExperimentConfigJson);
  } catch (e) {
    console.error('Error parsing A/B test config:', e);
  }
  return /*#__PURE__*/React.createElement(_PageExperimentContextClient.PageExperimentProvider, {
    pageExperimentConfig: pageExperimentConfig,
    apiKey: apiKey
  }, children);
};