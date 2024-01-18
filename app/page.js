'use client';

// Example in any page or component
import TestA from '../components/TestA';
import TestB from '../components/TestB';
import ConversionClick from '../components/ConversionClick';
import ConversionScrollTo from '@/components/ConversionScrollTo';
import ConversionTimed from '@/components/ConversionTimed';

const HomePage = () => {
  return (
    <>
      <TestA experimentName="experiment1">
        <p>This is content for Variant A</p>
      </TestA>
      <TestB experimentName="experiment1">
        <p>This is content for Variant B</p>
      </TestB>
      <ConversionClick affectedExperiments={['experiment1']} conversionName="Buy Button clicked!">
        <button onClick={() => console.log('Conversion!')}> Click Me</button>
      </ConversionClick>
      <ConversionTimed affectedExperiments={['experiment1']} conversionName="Visitor stayed for 10s!" durationInSeconds="10">
      </ConversionTimed>
      <div style={{ height: '3000px' }}>
      </div>
      <ConversionScrollTo affectedExperiments={['experiment1']} conversionName="blah">test</ConversionScrollTo>
    </>
  );
};

export default HomePage;
