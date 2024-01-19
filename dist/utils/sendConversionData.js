import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
// utils/sendConversionData.js

export var sendConversionData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var apiKey, pageExperimentConfig, affectedExperiments, conversionName, conversionType, durationInSeconds, experimentData, response;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          apiKey = _ref.apiKey, pageExperimentConfig = _ref.pageExperimentConfig, affectedExperiments = _ref.affectedExperiments, conversionName = _ref.conversionName, conversionType = _ref.conversionType, durationInSeconds = _ref.durationInSeconds;
          experimentData = affectedExperiments.map(function (experiment) {
            return {
              name: experiment,
              variant: pageExperimentConfig["experiment_variants"][experiment] || 'A'
            };
          });
          _context.prev = 2;
          _context.next = 5;
          return fetch('https://www.pageexperiment.com/api/tracking/v0', {
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
        case 5:
          response = _context.sent;
          if (response.ok) {
            _context.next = 8;
            break;
          }
          throw new Error('Network response was not ok');
        case 8:
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](2);
          console.error('Error sending conversion data:', _context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 10]]);
  }));
  return function sendConversionData(_x) {
    return _ref2.apply(this, arguments);
  };
}();