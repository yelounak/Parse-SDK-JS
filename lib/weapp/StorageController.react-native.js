"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));
/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @private
 */


var StorageController = {
  async: 1,
  getItemAsync: function (path
  /*: string*/
  )
  /*: Promise*/
  {
    return new _promise.default(function (resolve, reject) {
      _CoreManager.default.getAsyncStorage().getItem(path, function (err, value) {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  },
  setItemAsync: function (path
  /*: string*/
  , value
  /*: string*/
  )
  /*: Promise*/
  {
    return new _promise.default(function (resolve, reject) {
      _CoreManager.default.getAsyncStorage().setItem(path, value, function (err, value) {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  },
  removeItemAsync: function (path
  /*: string*/
  )
  /*: Promise*/
  {
    return new _promise.default(function (resolve, reject) {
      _CoreManager.default.getAsyncStorage().removeItem(path, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  },
  getAllKeysAsync: function ()
  /*: Promise*/
  {
    return new _promise.default(function (resolve, reject) {
      _CoreManager.default.getAsyncStorage().getAllKeys(function (err, keys) {
        if (err) {
          reject(err);
        } else {
          resolve(keys);
        }
      });
    });
  },
  multiGet: function (keys
  /*: Array<string>*/
  )
  /*: Promise<Array<Array<string>>>*/
  {
    return new _promise.default(function (resolve, reject) {
      _CoreManager.default.getAsyncStorage().multiGet(keys, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  multiRemove: function (keys
  /*: Array<string>*/
  )
  /*: Promise*/
  {
    return new _promise.default(function (resolve, reject) {
      _CoreManager.default.getAsyncStorage().multiRemove(keys, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(keys);
        }
      });
    });
  },
  clear: function () {
    return _CoreManager.default.getAsyncStorage().clear();
  }
};
module.exports = StorageController;