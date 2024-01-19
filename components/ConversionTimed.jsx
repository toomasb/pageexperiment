// ConversionTimed.js
'use client';

import React, { useEffect, useRef } from 'react';
import { useABTest } from './PageExperimentContextClient';
import { sendConversionData } from './utils/sendConversionData';

const ConversionTimed = ({ children, affectedExperiments, conversionName, durationInSeconds }) => {
    const timerRef = useRef(null);
    const { pageExperimentConfig, apiKey } = useABTest();

    useEffect(() => {

        let durationInMilliseconds;


         if (typeof durationInSeconds === 'string') {
            const parsedDuration = parseFloat(durationInSeconds);
            if (isNaN(parsedDuration)) {
                console.error('Invalid durationInSeconds value:', durationInSeconds);
                return;
            }
            durationInMilliseconds = parsedDuration * 1000;
        } else {
            durationInMilliseconds = durationInSeconds * 1000;
        }

        timerRef.current = setTimeout(async () => {
            await sendConversionData({
                apiKey,
                pageExperimentConfig,
                affectedExperiments,
                conversionName,
                conversionType: 'timed',
                durationInSeconds: durationInSeconds
            });
        }, durationInMilliseconds);

        return () => {
            clearTimeout(timerRef.current);
        };
    }, []);

    return (<div>{children}</div>);
};

export default ConversionTimed;
