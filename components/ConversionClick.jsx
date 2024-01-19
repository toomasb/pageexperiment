// ConversionClick.js
'use client';

import React from 'react';
import { useABTest } from './PageExperimentContextClient';
import { sendConversionData } from './utils/sendConversionData';

const ConversionClick = ({ children, onClick, affectedExperiments, conversionName }) => {
    const { pageExperimentConfig, apiKey } = useABTest();

    const handleClick = (e, childOnClick) => {
        e.stopPropagation();

        if (childOnClick) {
            childOnClick(e);
        }

        sendConversionData({
            apiKey,
            pageExperimentConfig,
            affectedExperiments,
            conversionName,
            conversionType: 'click',
            durationInSeconds: null
        });
    };

    // Cloning the child element and injecting the new onClick handler
    const childrenWithProps = React.Children.map(children, child => {
        return React.cloneElement(child, { 
            onClick: (e) => handleClick(e, child.props.onClick) 
        });
    });

    return <>{childrenWithProps}</>;
};

export default ConversionClick;

