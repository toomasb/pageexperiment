// ConversionClick.js
'use client';

var __jsx = React.createElement;
import React from 'react';
import { useABTest } from './PageExperimentContextClient';
import { sendConversionData } from './utils/sendConversionData';
var ConversionClick = function ConversionClick(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    affectedExperiments = _ref.affectedExperiments,
    conversionName = _ref.conversionName;
  var _useABTest = useABTest(),
    pageExperimentConfig = _useABTest.pageExperimentConfig,
    apiKey = _useABTest.apiKey;
  var handleClick = function handleClick(e, childOnClick) {
    e.stopPropagation();
    if (childOnClick) {
      childOnClick(e);
    }
    sendConversionData({
      apiKey: apiKey,
      pageExperimentConfig: pageExperimentConfig,
      affectedExperiments: affectedExperiments,
      conversionName: conversionName,
      conversionType: 'click',
      durationInSeconds: null
    });
  };

  // Cloning the child element and injecting the new onClick handler
  var childrenWithProps = React.Children.map(children, function (child) {
    return /*#__PURE__*/React.cloneElement(child, {
      onClick: function onClick(e) {
        return handleClick(e, child.props.onClick);
      }
    });
  });
  return __jsx(React.Fragment, null, childrenWithProps);
};
export default ConversionClick;