"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _server = require("next/server");
var _uuid = require("uuid");
function PageExperimentMiddleware(req, experiments) {
  var _req$cookies$get;
  console.log(experiments);
  var response = _server.NextResponse.next();
  var visitor_guid = (_req$cookies$get = req.cookies.get('pageExperiment_visitor_guid')) === null || _req$cookies$get === void 0 ? void 0 : _req$cookies$get.value;
  if (!visitor_guid) {
    visitor_guid = (0, _uuid.v4)();
    response.cookies.set('pageExperiment_visitor_guid', visitor_guid, {
      path: '/',
      httpOnly: true
    });
  }
  var experimentVariants = {};
  experiments.forEach(function (experiment) {
    var _req$cookies$get2;
    var variant = (_req$cookies$get2 = req.cookies.get("pageExperiment_abTestVariant_".concat(experiment))) === null || _req$cookies$get2 === void 0 ? void 0 : _req$cookies$get2.value;
    if (!variant) {
      variant = Math.random() < 0.5 ? 'A' : 'B';
      response.cookies.set("pageExperiment_abTestVariant_".concat(experiment), variant, {
        path: '/',
        httpOnly: true
      });
    }
    experimentVariants[experiment] = variant;
  });
  response.headers.set('X-PageExperiment-Config', JSON.stringify({
    "visitor_guid": visitor_guid,
    "experiment_variants": experimentVariants
  }));
  return response;
}
var _default = exports["default"] = PageExperimentMiddleware;