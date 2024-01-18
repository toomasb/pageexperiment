'use client';

import { useABTest } from './PageExperimentContextClient';

const TestB = ({ children, experimentName }) => {
    const { pageExperimentConfig, apiKey } = useABTest();

    const isVariantB = pageExperimentConfig["experiment_variants"][experimentName] === 'B';

    return isVariantB ? <div>{children}</div> : null;
};

export default TestB;
