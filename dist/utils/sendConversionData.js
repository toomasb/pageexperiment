// utils/sendConversionData.js

export var sendConversionData = function sendConversionData(_ref) {
  var apiKey = _ref.apiKey,
    pageExperimentConfig = _ref.pageExperimentConfig,
    affectedExperiments = _ref.affectedExperiments,
    conversionName = _ref.conversionName,
    conversionType = _ref.conversionType,
    durationInSeconds = _ref.durationInSeconds;
  var experimentData = affectedExperiments.map(function (experiment) {
    return {
      name: experiment,
      variant: pageExperimentConfig["experiment_variants"][experiment] || 'A'
    };
  });
  try {
    var response = fetch('https://www.pageexperiment.com/api/tracking/v0', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer ".concat(apiKey)
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