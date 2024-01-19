"use strict";
'use client';

// We can set server components as children of client components, we just can't use them directly in the client component file?
// see https://stackoverflow.com/questions/76954194/wrapping-the-entire-application-with-a-use-client-marked-provider-in-next-js-1
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useABTest = exports.PageExperimentProvider = void 0;
var _react = require("react");
var ABTestReactContext = /*#__PURE__*/(0, _react.createContext)();
var PageExperimentProvider = exports.PageExperimentProvider = function PageExperimentProvider(_ref) {
  var children = _ref.children,
    pageExperimentConfig = _ref.pageExperimentConfig,
    apiKey = _ref.apiKey;
  return /*#__PURE__*/React.createElement(ABTestReactContext.Provider, {
    value: {
      pageExperimentConfig: pageExperimentConfig,
      apiKey: apiKey
    }
  }, children);
};
var useABTest = exports.useABTest = function useABTest() {
  return (0, _react.useContext)(ABTestReactContext);
};