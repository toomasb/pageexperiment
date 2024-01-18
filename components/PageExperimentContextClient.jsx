'use client'

// We can set server components as children of client components, we just can't use them directly in the client component file?
// see https://stackoverflow.com/questions/76954194/wrapping-the-entire-application-with-a-use-client-marked-provider-in-next-js-1

import { createContext, useContext } from 'react';



const ABTestReactContext = createContext();

export const PageExperimentProvider = ({ children, pageExperimentConfig, apiKey }) => {

  return (
    <ABTestReactContext.Provider value={{ pageExperimentConfig, apiKey }}>
      {children}
    </ABTestReactContext.Provider>
  );
};

export const useABTest = () => useContext(ABTestReactContext);