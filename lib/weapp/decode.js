"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = decode;

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

var _ParseFile = _interopRequireDefault(require("./ParseFile"));

var _ParseGeoPoint = _interopRequireDefault(require("./ParseGeoPoint"));

var _ParsePolygon = _interopRequireDefault(require("./ParsePolygon"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseOp = require("./ParseOp");

var _ParseRelation = _interopRequireDefault(require("./ParseRelation"));
/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
// eslint-disable-line no-unused-vars


function decode(value
/*: any*/
)
/*: any*/
{
  if (value === null || (0, _typeof2.default)(value) !== 'object' || value instanceof Date) {
    return value;
  }

  if ((0, _isArray.default)(value)) {
    var dup = [];
    (0, _forEach.default)(value).call(value, function (v, i) {
      dup[i] = decode(v);
    });
    return dup;
  }

  if (typeof value.__op === 'string') {
    return (0, _ParseOp.opFromJSON)(value);
  }

  if (value.__type === 'Pointer' && value.className) {
    return _ParseObject.default.fromJSON(value);
  }

  if (value.__type === 'Object' && value.className) {
    return _ParseObject.default.fromJSON(value);
  }

  if (value.__type === 'Relation') {
    // The parent and key fields will be populated by the parent
    var relation = new _ParseRelation.default(null, null);
    relation.targetClassName = value.className;
    return relation;
  }

  if (value.__type === 'Date') {
    return new Date(value.iso);
  }

  if (value.__type === 'File') {
    return _ParseFile.default.fromJSON(value);
  }

  if (value.__type === 'GeoPoint') {
    return new _ParseGeoPoint.default({
      latitude: value.latitude,
      longitude: value.longitude
    });
  }

  if (value.__type === 'Polygon') {
    return new _ParsePolygon.default(value.coordinates);
  }

  var copy = {};

  for (var k in value) {
    copy[k] = decode(value[k]);
  }

  return copy;
}