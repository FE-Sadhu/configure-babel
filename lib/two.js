"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _flat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/flat"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _weakMap = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/weak-map"));

var _context;

(0, _flat["default"])(_context = []).call(_context, 3);

_promise["default"].resolve().then(function (res) {
  return res;
});

var wk = new _weakMap["default"]();

var Point = /*#__PURE__*/function () {
  function Point(x, y) {
    (0, _classCallCheck2["default"])(this, Point);
    this.x = x;
    this.y = y;
  }

  (0, _createClass2["default"])(Point, [{
    key: "getX",
    value: function getX() {
      return this.x;
    }
  }]);
  return Point;
}();

var cp = new ColorPoint(25, 8);