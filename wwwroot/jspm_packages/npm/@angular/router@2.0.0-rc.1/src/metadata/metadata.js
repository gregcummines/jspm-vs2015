/* */ 
"use strict";
var lang_1 = require('../facade/lang');
var RouteMetadata = (function() {
  function RouteMetadata() {}
  Object.defineProperty(RouteMetadata.prototype, "path", {
    get: function() {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RouteMetadata.prototype, "component", {
    get: function() {},
    enumerable: true,
    configurable: true
  });
  return RouteMetadata;
}());
exports.RouteMetadata = RouteMetadata;
var Route = (function() {
  function Route(_a) {
    var _b = _a === void 0 ? {} : _a,
        path = _b.path,
        component = _b.component;
    this.path = path;
    this.component = component;
  }
  Route.prototype.toString = function() {
    return "@Route(" + this.path + ", " + lang_1.stringify(this.component) + ")";
  };
  return Route;
}());
exports.Route = Route;
var RoutesMetadata = (function() {
  function RoutesMetadata(routes) {
    this.routes = routes;
  }
  RoutesMetadata.prototype.toString = function() {
    return "@Routes(" + this.routes + ")";
  };
  return RoutesMetadata;
}());
exports.RoutesMetadata = RoutesMetadata;
