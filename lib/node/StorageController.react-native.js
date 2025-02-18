"use strict";

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
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


const StorageController = {
  async: 1,

  getItemAsync(path
  /*: string*/
  )
  /*: Promise*/
  {
    return new Promise((resolve, reject) => {
      _CoreManager.default.getAsyncStorage().getItem(path, (err, value) => {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  },

  setItemAsync(path
  /*: string*/
  , value
  /*: string*/
  )
  /*: Promise*/
  {
    return new Promise((resolve, reject) => {
      _CoreManager.default.getAsyncStorage().setItem(path, value, (err, value) => {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  },

  removeItemAsync(path
  /*: string*/
  )
  /*: Promise*/
  {
    return new Promise((resolve, reject) => {
      _CoreManager.default.getAsyncStorage().removeItem(path, err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  },

  getAllKeysAsync()
  /*: Promise*/
  {
    return new Promise((resolve, reject) => {
      _CoreManager.default.getAsyncStorage().getAllKeys((err, keys) => {
        if (err) {
          reject(err);
        } else {
          resolve(keys);
        }
      });
    });
  },

  multiGet(keys
  /*: Array<string>*/
  )
  /*: Promise<Array<Array<string>>>*/
  {
    return new Promise((resolve, reject) => {
      _CoreManager.default.getAsyncStorage().multiGet(keys, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  multiRemove(keys
  /*: Array<string>*/
  )
  /*: Promise*/
  {
    return new Promise((resolve, reject) => {
      _CoreManager.default.getAsyncStorage().multiRemove(keys, err => {
        if (err) {
          reject(err);
        } else {
          resolve(keys);
        }
      });
    });
  },

  clear() {
    return _CoreManager.default.getAsyncStorage().clear();
  }

};
module.exports = StorageController;