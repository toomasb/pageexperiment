import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
export function PageExperimentMiddleware(req, experiments) {
  var _req$cookies$get;
  // function uuidv4() {
  //     return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
  //       (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  //     );
  // }

  var response = NextResponse.next();
  var visitor_guid = (_req$cookies$get = req.cookies.get('pageExperiment_visitor_guid')) === null || _req$cookies$get === void 0 ? void 0 : _req$cookies$get.value;
  if (!visitor_guid) {
    visitor_guid = uuidv4();
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