"use strict";
// ConversionTimed.js
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireWildcard(require("react"));
var _PageExperimentContextClient = require("./PageExperimentContextClient");
var _sendConversionData = require("./utils/sendConversionData");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var __jsx = _react["default"].createElement;
var ConversionTimed = function ConversionTimed(_ref) {
  var children = _ref.children,
    affectedExperiments = _ref.affectedExperiments,
    conversionName = _ref.conversionName,
    durationInSeconds = _ref.durationInSeconds;
  var timerRef = (0, _react.useRef)(null);
  var _useABTest = (0, _PageExperimentContextClient.useABTest)(),
    pageExperimentConfig = _useABTest.pageExperimentConfig,
    apiKey = _useABTest.apiKey;
  (0, _react.useEffect)(function () {
    var durationInMilliseconds;
    if (typeof durationInSeconds === 'string') {
      var parsedDuration = parseFloat(durationInSeconds);
      if (isNaN(parsedDuration)) {
        console.error('Invalid durationInSeconds value:', durationInSeconds);
        return;
      }
      durationInMilliseconds = parsedDuration * 1000;
    } else {
      durationInMilliseconds = durationInSeconds * 1000;
    }
    timerRef.current = setTimeout( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _sendConversionData.sendConversionData)({
              apiKey: apiKey,
              pageExperimentConfig: pageExperimentConfig,
              affectedExperiments: affectedExperiments,
              conversionName: conversionName,
              conversionType: 'timed',
              durationInSeconds: durationInSeconds
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })), durationInMilliseconds);
    return function () {
      clearTimeout(timerRef.current);
    };
  }, []);
  return __jsx("div", null, children);
};
var _default = exports["default"] = ConversionTimed;