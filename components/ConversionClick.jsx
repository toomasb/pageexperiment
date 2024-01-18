// ConversionClick.js
'use client';

import React from 'react';
import { useABTest } from './PageExperimentContextClient';
import { sendConversionData } from '../utils/sendConversionData';


const ConversionClick = ({ children, onClick, affectedExperiments, conversionName }) => {
    const { pageExperimentConfig, apiKey } = useABTest();

    const handleClick = async (e) => {

        e.stopPropagation();

        onClick && onClick(e, experimentData);

        await sendConversionData({
            apiKey,
            pageExperimentConfig,
            affectedExperiments,
            conversionName,
            conversionType: 'click',
            durationInSeconds: null
        });
    };

    return (<div onClick={handleClick}>{children}</div>);

});

export default ConversionClick;

