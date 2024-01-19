import React from "react";
var __jsx = React.createElement;
import { headers } from 'next/headers';
import { PageExperimentProvider } from './PageExperimentContextClient';
export var PageExperimentContext = function PageExperimentContext(_ref) {
  var children = _ref.children,
    apiKey = _ref.apiKey;
  var headersList = headers();
  var pageExperimentConfigJson = headersList.get('X-PageExperiment-Config');
  var pageExperimentConfig = {};
  try {
    pageExperimentConfig = JSON.parse(pageExperimentConfigJson);
  } catch (e) {
    console.error('Error parsing A/B test config:', e);
  }
  return __jsx(PageExperimentProvider, {
    pageExperimentConfig: pageExperimentConfig,
    apiKey: apiKey
  }, children);
};