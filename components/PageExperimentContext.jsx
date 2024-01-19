'use server';

import { headers } from 'next/headers';
import { PageExperimentProvider } from './PageExperimentContextClient';

const PageExperimentContext = ({ children, apiKey }) => {

  const headersList = headers();
  const pageExperimentConfigJson = headersList.get('X-PageExperiment-Config');
  let pageExperimentConfig = {};

  try {
    pageExperimentConfig = JSON.parse(pageExperimentConfigJson);
  } catch (e) {
    console.error('Error parsing A/B test config:', e);
  }

  return (
    <PageExperimentProvider pageExperimentConfig={pageExperimentConfig} apiKey={apiKey}>
      {children}
    </PageExperimentProvider>
  );
};

export default PageExperimentContext;
