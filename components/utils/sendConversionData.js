// utils/sendConversionData.js

export const sendConversionData = async ({ apiKey, pageExperimentConfig, affectedExperiments, conversionName, conversionType, durationInSeconds }) => {
    const experimentData = affectedExperiments.map(experiment => ({
        name: experiment,
        variant: pageExperimentConfig["experiment_variants"][experiment] || 'A'
    }));

    try {
        const response = await fetch('https://www.pageexperiment.com/api/tracking/v0', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                visitorGuid: pageExperimentConfig["visitor_guid"],
                experiments: experimentData,
                conversionName: conversionName,
                conversionType: conversionType,
                durationInSeconds: durationInSeconds
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error sending conversion data:', error);
    }
};
