'use client';

import { useABTest } from './PageExperimentContextClient';

const TestA = ({ children, experimentName }) => {
    const { pageExperimentConfig, apiKey } = useABTest();

    const isVariantA = pageExperimentConfig["experiment_variants"][experimentName] === 'A' || !pageExperimentConfig["experiment_variants"][experimentName];

    return (isVariantA ? <div>{children}</div> : null);
};

export default TestA;
