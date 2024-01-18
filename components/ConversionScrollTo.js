// ConversionScrollTo.js
'use client';

import React, { useEffect, useRef } from 'react';
import { useABTest } from './PageExperimentContextClient';
import { sendConversionData } from '../utils/sendConversionData';

const ConversionScrollTo = ({ children, affectedExperiments, conversionName }) => {
    const ref = useRef(null);
    const { pageExperimentConfig, apiKey } = useABTest();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(async entry => {
                if (entry.isIntersecting) {
                    await sendConversionData({
                        apiKey,
                        pageExperimentConfig,
                        affectedExperiments,
                        conversionName,
                        conversionType: "scrollTo",
                        durationInSeconds: null
                    });

                    observer.unobserve(ref.current);
                }
            });
        }, { threshold: 1.0 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return <div ref={ref}>{children}</div>;
};

export default ConversionScrollTo;
