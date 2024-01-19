'use client';

// We can set server components as children of client components, we just can't use them directly in the client component file?
// see https://stackoverflow.com/questions/76954194/wrapping-the-entire-application-with-a-use-client-marked-provider-in-next-js-1
import { createContext, useContext } from 'react';
var ABTestReactContext = /*#__PURE__*/createContext();
export var PageExperimentProvider = function PageExperimentProvider(_ref) {
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
export var useABTest = function useABTest() {
  return useContext(ABTestReactContext);
};