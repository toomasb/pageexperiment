"use strict";
'use server';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _headers = require("next/headers");
var _PageExperimentContextClient = require("./PageExperimentContextClient");
var __jsx = _react["default"].createElement;
var PageExperimentContext = function PageExperimentContext(_ref) {
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
  return __jsx(_PageExperimentContextClient.PageExperimentProvider, {
    pageExperimentConfig: pageExperimentConfig,
    apiKey: apiKey
  }, children);
};
var _default = exports["default"] = PageExperimentContext;