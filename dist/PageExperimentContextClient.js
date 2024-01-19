"use strict";
'use client';

// We can set server components as children of client components, we just can't use them directly in the client component file?
// see https://stackoverflow.com/questions/76954194/wrapping-the-entire-application-with-a-use-client-marked-provider-in-next-js-1
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useABTest = exports.PageExperimentProvider = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var __jsx = _react["default"].createElement;
var ABTestReactContext = /*#__PURE__*/(0, _react.createContext)();
var PageExperimentProvider = exports.PageExperimentProvider = function PageExperimentProvider(_ref) {
  var children = _ref.children,
    pageExperimentConfig = _ref.pageExperimentConfig,
    apiKey = _ref.apiKey;
  return __jsx(ABTestReactContext.Provider, {
    value: {
      pageExperimentConfig: pageExperimentConfig,
      apiKey: apiKey
    }
  }, children);
};
var useABTest = exports.useABTest = function useABTest() {
  return (0, _react.useContext)(ABTestReactContext);
};