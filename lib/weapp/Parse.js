"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _typeof = require("@babel/runtime-corejs3/helpers/typeof");

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _decode = _interopRequireDefault(require("./decode"));

var _encode = _interopRequireDefault(require("./encode"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _CryptoController = _interopRequireDefault(require("./CryptoController"));

var _EventuallyQueue = _interopRequireDefault(require("./EventuallyQueue"));

var _InstallationController = _interopRequireDefault(require("./InstallationController"));

var ParseOp = _interopRequireWildcard(require("./ParseOp"));

var _RESTController = _interopRequireDefault(require("./RESTController"));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof _WeakMap !== "function") return null;
  var cacheBabelInterop = new _WeakMap();
  var cacheNodeInterop = new _WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Contains all Parse API classes and functions.
 *
 * @static
 * @global
 * @class
 * @hideconstructor
 */


var buildInstance = function () {
  var parseInstance = {
    /**
     * Call this method first to set up your authentication tokens for Parse.
     *
     * @param {string} applicationId Your Parse Application ID.
     * @param {string} [javaScriptKey] Your Parse JavaScript Key (Not needed for parse-server)
     * @param {string} [masterKey] Your Parse Master Key. (Node.js only!)
     * @static
     */
    initialize: function (applicationId
    /*: string*/
    , javaScriptKey
    /*: string*/
    ) {
      parseInstance._initialize(applicationId, javaScriptKey);
    },
    _initialize: function (applicationId
    /*: string*/
    , javaScriptKey
    /*: string*/
    , masterKey
    /*: string*/
    ) {
      _CoreManager.default.set('APPLICATION_ID', applicationId);

      _CoreManager.default.set('JAVASCRIPT_KEY', javaScriptKey);

      _CoreManager.default.set('MASTER_KEY', masterKey);

      _CoreManager.default.set('USE_MASTER_KEY', false);
    },

    /**
     * Call this method to set your AsyncStorage engine
     * Starting Parse@1.11, the ParseSDK do not provide a React AsyncStorage as the ReactNative module
     * is not provided at a stable path and changes over versions.
     *
     * @param {AsyncStorage} storage a react native async storage.
     * @static
     */
    setAsyncStorage: function (storage
    /*: any*/
    ) {
      _CoreManager.default.setAsyncStorage(storage);
    },

    /**
     * Call this method to set your LocalDatastoreStorage engine
     * If using React-Native use {@link parseInstance.setAsyncStorage Parse.setAsyncStorage()}
     *
     * @param {LocalDatastoreController} controller a data storage.
     * @static
     */
    setLocalDatastoreController: function (controller
    /*: any*/
    ) {
      _CoreManager.default.setLocalDatastoreController(controller);
    },

    /**
     * Returns information regarding the current server's health
     *
     * @returns {Promise}
     * @static
     */
    getServerHealth: function () {
      return _CoreManager.default.getRESTController().request('GET', 'health');
    },

    /**
     * @member {string} Parse.applicationId
     * @static
     */
    set applicationId(value) {
      _CoreManager.default.set('APPLICATION_ID', value);
    },

    get applicationId() {
      return _CoreManager.default.get('APPLICATION_ID');
    },

    /**
     * @member {string} Parse.javaScriptKey
     * @static
     */
    set javaScriptKey(value) {
      _CoreManager.default.set('JAVASCRIPT_KEY', value);
    },

    get javaScriptKey() {
      return _CoreManager.default.get('JAVASCRIPT_KEY');
    },

    /**
     * @member {string} Parse.masterKey
     * @static
     */
    set masterKey(value) {
      _CoreManager.default.set('MASTER_KEY', value);
    },

    get masterKey() {
      return _CoreManager.default.get('MASTER_KEY');
    },

    /**
     * @member {string} Parse.serverURL
     * @static
     */
    set serverURL(value) {
      _CoreManager.default.set('SERVER_URL', value);
    },

    get serverURL() {
      return _CoreManager.default.get('SERVER_URL');
    },

    /**
     * @member {string} Parse.serverAuthToken
     * @static
     */
    set serverAuthToken(value) {
      _CoreManager.default.set('SERVER_AUTH_TOKEN', value);
    },

    get serverAuthToken() {
      return _CoreManager.default.get('SERVER_AUTH_TOKEN');
    },

    /**
     * @member {string} Parse.serverAuthType
     * @static
     */
    set serverAuthType(value) {
      _CoreManager.default.set('SERVER_AUTH_TYPE', value);
    },

    get serverAuthType() {
      return _CoreManager.default.get('SERVER_AUTH_TYPE');
    },

    /**
     * @member {string} Parse.liveQueryServerURL
     * @static
     */
    set liveQueryServerURL(value) {
      _CoreManager.default.set('LIVEQUERY_SERVER_URL', value);
    },

    get liveQueryServerURL() {
      return _CoreManager.default.get('LIVEQUERY_SERVER_URL');
    },

    /**
     * @member {string} Parse.encryptedUser
     * @static
     */
    set encryptedUser(value) {
      _CoreManager.default.set('ENCRYPTED_USER', value);
    },

    get encryptedUser() {
      return _CoreManager.default.get('ENCRYPTED_USER');
    },

    /**
     * @member {string} Parse.secret
     * @static
     */
    set secret(value) {
      _CoreManager.default.set('ENCRYPTED_KEY', value);
    },

    get secret() {
      return _CoreManager.default.get('ENCRYPTED_KEY');
    },

    /**
     * @member {boolean} Parse.idempotency
     * @static
     */
    set idempotency(value) {
      _CoreManager.default.set('IDEMPOTENCY', value);
    },

    get idempotency() {
      return _CoreManager.default.get('IDEMPOTENCY');
    },

    /**
     * @member {boolean} Parse.allowCustomObjectId
     * @static
     */
    set allowCustomObjectId(value) {
      _CoreManager.default.set('ALLOW_CUSTOM_OBJECT_ID', value);
    },

    get allowCustomObjectId() {
      return _CoreManager.default.get('ALLOW_CUSTOM_OBJECT_ID');
    }

  };
  parseInstance.ACL = require('./ParseACL').default;
  parseInstance.Analytics = require('./Analytics');
  parseInstance.AnonymousUtils = require('./AnonymousUtils').default;
  parseInstance.Cloud = require('./Cloud');
  parseInstance.CLP = require('./ParseCLP').default;
  parseInstance.CoreManager = require('./CoreManager');
  parseInstance.Config = require('./ParseConfig').default;
  parseInstance.Error = require('./ParseError').default;
  parseInstance.EventuallyQueue = _EventuallyQueue.default;
  parseInstance.FacebookUtils = require('./FacebookUtils').default;
  parseInstance.File = require('./ParseFile').default;
  parseInstance.GeoPoint = require('./ParseGeoPoint').default;
  parseInstance.Polygon = require('./ParsePolygon').default;
  parseInstance.Installation = require('./ParseInstallation').default;
  parseInstance.LocalDatastore = require('./LocalDatastore');
  parseInstance.Object = require('./ParseObject').default;
  parseInstance.Op = {
    Set: ParseOp.SetOp,
    Unset: ParseOp.UnsetOp,
    Increment: ParseOp.IncrementOp,
    Add: ParseOp.AddOp,
    Remove: ParseOp.RemoveOp,
    AddUnique: ParseOp.AddUniqueOp,
    Relation: ParseOp.RelationOp
  };
  parseInstance.Push = require('./Push');
  parseInstance.Query = require('./ParseQuery').default;
  parseInstance.Relation = require('./ParseRelation').default;
  parseInstance.Role = require('./ParseRole').default;
  parseInstance.Schema = require('./ParseSchema').default;
  parseInstance.Session = require('./ParseSession').default;
  parseInstance.Storage = require('./Storage');
  parseInstance.User = require('./ParseUser').default;
  parseInstance.LiveQuery = require('./ParseLiveQuery').default;
  parseInstance.LiveQueryClient = require('./LiveQueryClient').default;

  parseInstance._request = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _CoreManager.default.getRESTController().request.apply(null, args);
  };

  parseInstance._ajax = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _CoreManager.default.getRESTController().ajax.apply(null, args);
  }; // We attempt to match the signatures of the legacy versions of these methods


  parseInstance._decode = function (_, value) {
    return (0, _decode.default)(value);
  };

  parseInstance._encode = function (value, _, disallowObjects) {
    return (0, _encode.default)(value, disallowObjects);
  };

  parseInstance._getInstallationId = function () {
    return _CoreManager.default.getInstallationController().currentInstallationId();
  };
  /**
   * Enable pinning in your application.
   * This must be called after `Parse.initialize` in your application.
   *
   * @param [polling] Allow pinging the server /health endpoint. Default true
   * @param [ms] Milliseconds to ping the server. Default 2000ms
   * @static
   */


  parseInstance.enableLocalDatastore = function () {
    var polling = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var ms
    /*: number*/
    = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

    if (!parseInstance.applicationId) {
      console.log("'enableLocalDataStore' must be called after 'initialize'");
      return;
    }

    if (!parseInstance.LocalDatastore.isEnabled) {
      parseInstance.LocalDatastore.isEnabled = true;

      if (polling) {
        _EventuallyQueue.default.poll(ms);
      }
    }
  };
  /**
   * Flag that indicates whether Local Datastore is enabled.
   *
   * @static
   * @returns {boolean}
   */


  parseInstance.isLocalDatastoreEnabled = function () {
    return parseInstance.LocalDatastore.isEnabled;
  };
  /**
   * Gets all contents from Local Datastore
   *
   * <pre>
   * await Parse.dumpLocalDatastore();
   * </pre>
   *
   * @static
   * @returns {object}
   */


  parseInstance.dumpLocalDatastore = function () {
    if (!parseInstance.LocalDatastore.isEnabled) {
      console.log('Parse.enableLocalDatastore() must be called first'); // eslint-disable-line no-console

      return _promise.default.resolve({});
    } else {
      return parseInstance.LocalDatastore._getAllContents();
    }
  };
  /**
   * Enable the current user encryption.
   * This must be called before login any user.
   *
   * @static
   */


  parseInstance.enableEncryptedUser = function () {
    parseInstance.encryptedUser = true;
  };
  /**
   * Flag that indicates whether Encrypted User is enabled.
   *
   * @static
   * @returns {boolean}
   */


  parseInstance.isEncryptedUserEnabled = function () {
    return parseInstance.encryptedUser;
  };

  _CoreManager.default.setCryptoController(_CryptoController.default);

  _CoreManager.default.setInstallationController(_InstallationController.default);

  _CoreManager.default.setRESTController(_RESTController.default);

  // For legacy requires, of the form `var Parse = require('parse').Parse`
  parseInstance.Parse = parseInstance;
  return parseInstance;
};

module.exports = buildInstance;