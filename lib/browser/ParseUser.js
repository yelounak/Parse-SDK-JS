"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _reverseInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reverse");

var _Promise2 = require("@babel/runtime-corejs3/core-js-stable/promise");

var _Object$setPrototypeOf = require("@babel/runtime-corejs3/core-js-stable/object/set-prototype-of");

var _typeof3 = require("@babel/runtime-corejs3/helpers/typeof");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getPrototypeOf = require("@babel/runtime-corejs3/core-js-stable/object/get-prototype-of");

var _Object$create = require("@babel/runtime-corejs3/core-js-stable/object/create");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _isRevocableSession = _interopRequireDefault(require("./isRevocableSession"));

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _ParseObject2 = _interopRequireDefault(require("./ParseObject"));

var _ParseSession = _interopRequireDefault(require("./ParseSession"));

var _Storage = _interopRequireDefault(require("./Storage"));

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof _Symbol ? _Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return _Object$defineProperty2(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = _Object$create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);

    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = _Object$getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    var _context7;

    _forEachInstanceProperty(_context7 = ["next", "throw", "return"]).call(_context7, function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof3(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], _forEachInstanceProperty(tryLocsList).call(tryLocsList, pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return _Object$setPrototypeOf ? _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = _Object$create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = _Promise2);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return _reverseInstanceProperty(keys).call(keys), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      var _context8;

      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, _forEachInstanceProperty(_context8 = this.tryEntries).call(_context8, resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+_sliceInstanceProperty(name).call(name, 1)) && (this[name] = undefined);
      }
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function () {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = _Reflect$construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var CURRENT_USER_KEY = 'currentUser';
var canUseCurrentUser = !_CoreManager.default.get('IS_NODE');
var currentUserCacheMatchesDisk = false;
var currentUserCache = null;
var authProviders = {};
/**
 * <p>A Parse.User object is a local representation of a user persisted to the
 * Parse cloud. This class is a subclass of a Parse.Object, and retains the
 * same functionality of a Parse.Object, but also extends it with various
 * user specific methods, like authentication, signing up, and validation of
 * uniqueness.</p>
 *
 * @alias Parse.User
 * @augments Parse.Object
 */

var ParseUser = /*#__PURE__*/function (_ParseObject) {
  (0, _inherits2.default)(ParseUser, _ParseObject);

  var _super = _createSuper(ParseUser);
  /**
   * @param {object} attributes The initial set of data to store in the user.
   */


  function ParseUser(attributes
  /*: ?AttributeMap*/
  ) {
    var _this;

    (0, _classCallCheck2.default)(this, ParseUser);
    _this = _super.call(this, '_User');

    if (attributes && (0, _typeof2.default)(attributes) === 'object') {
      if (!_this.set(attributes || {})) {
        throw new Error("Can't create an invalid Parse User");
      }
    }

    return _this;
  }
  /**
   * Request a revocable session token to replace the older style of token.
   *
   * @param {object} options
   * @returns {Promise} A promise that is resolved when the replacement
   *   token has been fetched.
   */


  (0, _createClass2.default)(ParseUser, [{
    key: "_upgradeToRevocableSession",
    value: function (options
    /*: RequestOptions*/
    )
    /*: Promise<void>*/
    {
      options = options || {};
      var upgradeOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        upgradeOptions.useMasterKey = options.useMasterKey;
      }

      var controller = _CoreManager.default.getUserController();

      return controller.upgradeToRevocableSession(this, upgradeOptions);
    }
    /**
     * Parse allows you to link your users with {@link https://docs.parseplatform.org/parse-server/guide/#oauth-and-3rd-party-authentication 3rd party authentication}, enabling
     * your users to sign up or log into your application using their existing identities.
     * Since 2.9.0
     *
     * @see {@link https://docs.parseplatform.org/js/guide/#linking-users Linking Users}
     * @param {string | AuthProvider} provider Name of auth provider or {@link https://parseplatform.org/Parse-SDK-JS/api/master/AuthProvider.html AuthProvider}
     * @param {object} options
     * <ul>
     *   <li>If provider is string, options is {@link http://docs.parseplatform.org/parse-server/guide/#supported-3rd-party-authentications authData}
     *   <li>If provider is AuthProvider, options is saveOpts
     * </ul>
     * @param {object} saveOpts useMasterKey / sessionToken
     * @returns {Promise} A promise that is fulfilled with the user is linked
     */

  }, {
    key: "linkWith",
    value: function (provider
    /*: any*/
    , options
    /*: { authData?: AuthData }*/
    )
    /*: Promise<ParseUser>*/
    {
      var _this2 = this;

      var saveOpts
      /*:: ?: FullOptions*/
      = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      saveOpts.sessionToken = saveOpts.sessionToken || this.getSessionToken() || '';
      var authType;

      if (typeof provider === 'string') {
        authType = provider;

        if (authProviders[provider]) {
          provider = authProviders[provider];
        } else {
          var authProvider = {
            restoreAuthentication: function () {
              return true;
            },
            getAuthType: function () {
              return authType;
            }
          };
          authProviders[authProvider.getAuthType()] = authProvider;
          provider = authProvider;
        }
      } else {
        authType = provider.getAuthType();
      }

      if (options && options.hasOwnProperty('authData')) {
        var authData = this.get('authData') || {};

        if ((0, _typeof2.default)(authData) !== 'object') {
          throw new Error('Invalid type: authData field should be an object');
        }

        authData[authType] = options.authData;

        var controller = _CoreManager.default.getUserController();

        return controller.linkWith(this, authData, saveOpts);
      } else {
        return new _promise.default(function (resolve, reject) {
          provider.authenticate({
            success: function (provider, result) {
              var opts = {};
              opts.authData = result;

              _this2.linkWith(provider, opts, saveOpts).then(function () {
                resolve(_this2);
              }, function (error) {
                reject(error);
              });
            },
            error: function (provider, _error) {
              reject(_error);
            }
          });
        });
      }
    }
    /**
     * @param provider
     * @param options
     * @param saveOpts
     * @deprecated since 2.9.0 see {@link https://parseplatform.org/Parse-SDK-JS/api/master/Parse.User.html#linkWith linkWith}
     * @returns {Promise}
     */

  }, {
    key: "_linkWith",
    value: function (provider
    /*: any*/
    , options
    /*: { authData?: AuthData }*/
    )
    /*: Promise<ParseUser>*/
    {
      var saveOpts
      /*:: ?: FullOptions*/
      = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.linkWith(provider, options, saveOpts);
    }
    /**
     * Synchronizes auth data for a provider (e.g. puts the access token in the
     * right place to be used by the Facebook SDK).
     *
     * @param provider
     */

  }, {
    key: "_synchronizeAuthData",
    value: function (provider
    /*: string*/
    ) {
      if (!this.isCurrent() || !provider) {
        return;
      }

      var authType;

      if (typeof provider === 'string') {
        authType = provider;
        provider = authProviders[authType];
      } else {
        authType = provider.getAuthType();
      }

      var authData = this.get('authData');

      if (!provider || !authData || (0, _typeof2.default)(authData) !== 'object') {
        return;
      }

      var success = provider.restoreAuthentication(authData[authType]);

      if (!success) {
        this._unlinkFrom(provider);
      }
    }
    /**
     * Synchronizes authData for all providers.
     */

  }, {
    key: "_synchronizeAllAuthData",
    value: function () {
      var authData = this.get('authData');

      if ((0, _typeof2.default)(authData) !== 'object') {
        return;
      }

      for (var _key in authData) {
        this._synchronizeAuthData(_key);
      }
    }
    /**
     * Removes null values from authData (which exist temporarily for unlinking)
     */

  }, {
    key: "_cleanupAuthData",
    value: function () {
      if (!this.isCurrent()) {
        return;
      }

      var authData = this.get('authData');

      if ((0, _typeof2.default)(authData) !== 'object') {
        return;
      }

      for (var _key2 in authData) {
        if (!authData[_key2]) {
          delete authData[_key2];
        }
      }
    }
    /**
     * Unlinks a user from a service.
     *
     * @param {string | AuthProvider} provider Name of auth provider or {@link https://parseplatform.org/Parse-SDK-JS/api/master/AuthProvider.html AuthProvider}
     * @param {object} options MasterKey / SessionToken
     * @returns {Promise} A promise that is fulfilled when the unlinking
     *     finishes.
     */

  }, {
    key: "_unlinkFrom",
    value: function (provider
    /*: any*/
    , options
    /*:: ?: FullOptions*/
    )
    /*: Promise<ParseUser>*/
    {
      var _this3 = this;

      return this.linkWith(provider, {
        authData: null
      }, options).then(function () {
        _this3._synchronizeAuthData(provider);

        return _promise.default.resolve(_this3);
      });
    }
    /**
     * Checks whether a user is linked to a service.
     *
     * @param {object} provider service to link to
     * @returns {boolean} true if link was successful
     */

  }, {
    key: "_isLinked",
    value: function (provider
    /*: any*/
    )
    /*: boolean*/
    {
      var authType;

      if (typeof provider === 'string') {
        authType = provider;
      } else {
        authType = provider.getAuthType();
      }

      var authData = this.get('authData') || {};

      if ((0, _typeof2.default)(authData) !== 'object') {
        return false;
      }

      return !!authData[authType];
    }
    /**
     * Deauthenticates all providers.
     */

  }, {
    key: "_logOutWithAll",
    value: function () {
      var authData = this.get('authData');

      if ((0, _typeof2.default)(authData) !== 'object') {
        return;
      }

      for (var _key3 in authData) {
        this._logOutWith(_key3);
      }
    }
    /**
     * Deauthenticates a single provider (e.g. removing access tokens from the
     * Facebook SDK).
     *
     * @param {object} provider service to logout of
     */

  }, {
    key: "_logOutWith",
    value: function (provider
    /*: any*/
    ) {
      if (!this.isCurrent()) {
        return;
      }

      if (typeof provider === 'string') {
        provider = authProviders[provider];
      }

      if (provider && provider.deauthenticate) {
        provider.deauthenticate();
      }
    }
    /**
     * Class instance method used to maintain specific keys when a fetch occurs.
     * Used to ensure that the session token is not lost.
     *
     * @returns {object} sessionToken
     */

  }, {
    key: "_preserveFieldsOnFetch",
    value: function ()
    /*: AttributeMap*/
    {
      return {
        sessionToken: this.get('sessionToken')
      };
    }
    /**
     * Returns true if <code>current</code> would return this user.
     *
     * @returns {boolean} true if user is cached on disk
     */

  }, {
    key: "isCurrent",
    value: function ()
    /*: boolean*/
    {
      var current = ParseUser.current();
      return !!current && current.id === this.id;
    }
    /**
     * Returns true if <code>current</code> would return this user.
     *
     * @returns {Promise<boolean>} true if user is cached on disk
     */

  }, {
    key: "isCurrentAsync",
    value: function () {
      var _isCurrentAsync = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var current;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return ParseUser.currentAsync();

              case 2:
                current = _context.sent;
                return _context.abrupt("return", !!current && current.id === this.id);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function isCurrentAsync() {
        return _isCurrentAsync.apply(this, arguments);
      }

      return isCurrentAsync;
    }()
    /**
     * Returns get("username").
     *
     * @returns {string}
     */

  }, {
    key: "getUsername",
    value: function getUsername()
    /*: ?string*/
    {
      var username = this.get('username');

      if (username == null || typeof username === 'string') {
        return username;
      }

      return '';
    }
    /**
     * Calls set("username", username, options) and returns the result.
     *
     * @param {string} username
     */

  }, {
    key: "setUsername",
    value: function setUsername(username
    /*: string*/
    ) {
      // Strip anonymity
      var authData = this.get('authData');

      if (authData && (0, _typeof2.default)(authData) === 'object' && authData.hasOwnProperty('anonymous')) {
        // We need to set anonymous to null instead of deleting it in order to remove it from Parse.
        authData.anonymous = null;
      }

      this.set('username', username);
    }
    /**
     * Calls set("password", password, options) and returns the result.
     *
     * @param {string} password User's Password
     */

  }, {
    key: "setPassword",
    value: function setPassword(password
    /*: string*/
    ) {
      this.set('password', password);
    }
    /**
     * Returns get("email").
     *
     * @returns {string} User's Email
     */

  }, {
    key: "getEmail",
    value: function getEmail()
    /*: ?string*/
    {
      var email = this.get('email');

      if (email == null || typeof email === 'string') {
        return email;
      }

      return '';
    }
    /**
     * Calls set("email", email) and returns the result.
     *
     * @param {string} email
     * @returns {boolean}
     */

  }, {
    key: "setEmail",
    value: function setEmail(email
    /*: string*/
    ) {
      return this.set('email', email);
    }
    /**
     * Returns the session token for this user, if the user has been logged in,
     * or if it is the result of a query with the master key. Otherwise, returns
     * undefined.
     *
     * @returns {string} the session token, or undefined
     */

  }, {
    key: "getSessionToken",
    value: function getSessionToken()
    /*: ?string*/
    {
      var token = this.get('sessionToken');

      if (token == null || typeof token === 'string') {
        return token;
      }

      return '';
    }
    /**
     * Checks whether this user is the current user and has been authenticated.
     *
     * @returns {boolean} whether this user is the current user and is logged in.
     */

  }, {
    key: "authenticated",
    value: function authenticated()
    /*: boolean*/
    {
      var current = ParseUser.current();
      return !!this.get('sessionToken') && !!current && current.id === this.id;
    }
    /**
     * Signs up a new user. You should call this instead of save for
     * new Parse.Users. This will create a new Parse.User on the server, and
     * also persist the session on disk so that you can access the user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling signUp.</p>
     *
     * @param {object} attrs Extra fields to set on the new user, or null.
     * @param {object} options
     * @returns {Promise} A promise that is fulfilled when the signup
     *     finishes.
     */

  }, {
    key: "signUp",
    value: function signUp(attrs
    /*: AttributeMap*/
    , options
    /*:: ?: FullOptions*/
    )
    /*: Promise<ParseUser>*/
    {
      options = options || {};
      var signupOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        signupOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('installationId')) {
        signupOptions.installationId = options.installationId;
      }

      if (options.hasOwnProperty('context') && Object.prototype.toString.call(options.context) === '[object Object]') {
        signupOptions.context = options.context;
      }

      var controller = _CoreManager.default.getUserController();

      return controller.signUp(this, attrs, signupOptions);
    }
    /**
     * Logs in a Parse.User. On success, this saves the session to disk,
     * so you can retrieve the currently logged in user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling logIn.</p>
     *
     * @param {object} options
     * @returns {Promise} A promise that is fulfilled with the user when
     *     the login is complete.
     */

  }, {
    key: "logIn",
    value: function logIn(options
    /*:: ?: FullOptions*/
    )
    /*: Promise<ParseUser>*/
    {
      options = options || {};
      var loginOptions = {
        usePost: true
      };

      if (options.hasOwnProperty('useMasterKey')) {
        loginOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('installationId')) {
        loginOptions.installationId = options.installationId;
      }

      if (options.hasOwnProperty('usePost')) {
        loginOptions.usePost = options.usePost;
      }

      var controller = _CoreManager.default.getUserController();

      return controller.logIn(this, loginOptions);
    }
    /**
     * Wrap the default save behavior with functionality to save to local
     * storage if this is current user.
     *
     * @param {...any} args
     * @returns {Promise}
     */

  }, {
    key: "save",
    value: function () {
      var _save = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _len,
            args,
            _key4,
            current,
            _args2 = arguments;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len = _args2.length, args = new Array(_len), _key4 = 0; _key4 < _len; _key4++) {
                  args[_key4] = _args2[_key4];
                }

                _context2.next = 3;
                return (0, _get2.default)((0, _getPrototypeOf2.default)(ParseUser.prototype), "save", this).apply(this, args);

              case 3:
                _context2.next = 5;
                return this.isCurrentAsync();

              case 5:
                current = _context2.sent;

                if (!current) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", _CoreManager.default.getUserController().updateUserOnDisk(this));

              case 8:
                return _context2.abrupt("return", this);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function save() {
        return _save.apply(this, arguments);
      }

      return save;
    }()
    /**
     * Wrap the default destroy behavior with functionality that logs out
     * the current user when it is destroyed
     *
     * @param {...any} args
     * @returns {Parse.User}
     */

  }, {
    key: "destroy",
    value: function () {
      var _destroy = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _len2,
            args,
            _key5,
            current,
            _args3 = arguments;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                for (_len2 = _args3.length, args = new Array(_len2), _key5 = 0; _key5 < _len2; _key5++) {
                  args[_key5] = _args3[_key5];
                }

                _context3.next = 3;
                return (0, _get2.default)((0, _getPrototypeOf2.default)(ParseUser.prototype), "destroy", this).apply(this, args);

              case 3:
                _context3.next = 5;
                return this.isCurrentAsync();

              case 5:
                current = _context3.sent;

                if (!current) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", _CoreManager.default.getUserController().removeUserFromDisk());

              case 8:
                return _context3.abrupt("return", this);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function destroy() {
        return _destroy.apply(this, arguments);
      }

      return destroy;
    }()
    /**
     * Wrap the default fetch behavior with functionality to save to local
     * storage if this is current user.
     *
     * @param {...any} args
     * @returns {Parse.User}
     */

  }, {
    key: "fetch",
    value: function () {
      var _fetch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _len3,
            args,
            _key6,
            current,
            _args4 = arguments;

        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                for (_len3 = _args4.length, args = new Array(_len3), _key6 = 0; _key6 < _len3; _key6++) {
                  args[_key6] = _args4[_key6];
                }

                _context4.next = 3;
                return (0, _get2.default)((0, _getPrototypeOf2.default)(ParseUser.prototype), "fetch", this).apply(this, args);

              case 3:
                _context4.next = 5;
                return this.isCurrentAsync();

              case 5:
                current = _context4.sent;

                if (!current) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", _CoreManager.default.getUserController().updateUserOnDisk(this));

              case 8:
                return _context4.abrupt("return", this);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function fetch() {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }()
    /**
     * Wrap the default fetchWithInclude behavior with functionality to save to local
     * storage if this is current user.
     *
     * @param {...any} args
     * @returns {Parse.User}
     */

  }, {
    key: "fetchWithInclude",
    value: function () {
      var _fetchWithInclude = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _len4,
            args,
            _key7,
            current,
            _args5 = arguments;

        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                for (_len4 = _args5.length, args = new Array(_len4), _key7 = 0; _key7 < _len4; _key7++) {
                  args[_key7] = _args5[_key7];
                }

                _context5.next = 3;
                return (0, _get2.default)((0, _getPrototypeOf2.default)(ParseUser.prototype), "fetchWithInclude", this).apply(this, args);

              case 3:
                _context5.next = 5;
                return this.isCurrentAsync();

              case 5:
                current = _context5.sent;

                if (!current) {
                  _context5.next = 8;
                  break;
                }

                return _context5.abrupt("return", _CoreManager.default.getUserController().updateUserOnDisk(this));

              case 8:
                return _context5.abrupt("return", this);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchWithInclude() {
        return _fetchWithInclude.apply(this, arguments);
      }

      return fetchWithInclude;
    }()
    /**
     * Verify whether a given password is the password of the current user.
     *
     * @param {string} password A password to be verified
     * @param {object} options
     * @returns {Promise} A promise that is fulfilled with a user
     *  when the password is correct.
     */

  }, {
    key: "verifyPassword",
    value: function verifyPassword(password
    /*: string*/
    , options
    /*:: ?: RequestOptions*/
    )
    /*: Promise<ParseUser>*/
    {
      var username = this.getUsername() || '';
      return ParseUser.verifyPassword(username, password, options);
    }
  }], [{
    key: "readOnlyAttributes",
    value: function readOnlyAttributes() {
      return ['sessionToken'];
    }
    /**
     * Adds functionality to the existing Parse.User class.
     *
     * @param {object} protoProps A set of properties to add to the prototype
     * @param {object} classProps A set of static properties to add to the class
     * @static
     * @returns {Parse.User} The newly extended Parse.User class
     */

  }, {
    key: "extend",
    value: function extend(protoProps
    /*: { [prop: string]: any }*/
    , classProps
    /*: { [prop: string]: any }*/
    ) {
      if (protoProps) {
        for (var _prop in protoProps) {
          if (_prop !== 'className') {
            (0, _defineProperty.default)(ParseUser.prototype, _prop, {
              value: protoProps[_prop],
              enumerable: false,
              writable: true,
              configurable: true
            });
          }
        }
      }

      if (classProps) {
        for (var _prop2 in classProps) {
          if (_prop2 !== 'className') {
            (0, _defineProperty.default)(ParseUser, _prop2, {
              value: classProps[_prop2],
              enumerable: false,
              writable: true,
              configurable: true
            });
          }
        }
      }

      return ParseUser;
    }
    /**
     * Retrieves the currently logged in ParseUser with a valid session,
     * either from memory or localStorage, if necessary.
     *
     * @static
     * @returns {Parse.Object} The currently logged in Parse.User.
     */

  }, {
    key: "current",
    value: function current()
    /*: ?ParseUser*/
    {
      if (!canUseCurrentUser) {
        return null;
      }

      var controller = _CoreManager.default.getUserController();

      return controller.currentUser();
    }
    /**
     * Retrieves the currently logged in ParseUser from asynchronous Storage.
     *
     * @static
     * @returns {Promise} A Promise that is resolved with the currently
     *   logged in Parse User
     */

  }, {
    key: "currentAsync",
    value: function currentAsync()
    /*: Promise<?ParseUser>*/
    {
      if (!canUseCurrentUser) {
        return _promise.default.resolve(null);
      }

      var controller = _CoreManager.default.getUserController();

      return controller.currentUserAsync();
    }
    /**
     * Signs up a new user with a username (or email) and password.
     * This will create a new Parse.User on the server, and also persist the
     * session in localStorage so that you can access the user using
     * {@link #current}.
     *
     * @param {string} username The username (or email) to sign up with.
     * @param {string} password The password to sign up with.
     * @param {object} attrs Extra fields to set on the new user.
     * @param {object} options
     * @static
     * @returns {Promise} A promise that is fulfilled with the user when
     *     the signup completes.
     */

  }, {
    key: "signUp",
    value: function signUp(username
    /*: string*/
    , password
    /*: string*/
    , attrs
    /*: AttributeMap*/
    , options
    /*:: ?: FullOptions*/
    ) {
      attrs = attrs || {};
      attrs.username = username;
      attrs.password = password;
      var user = new this(attrs);
      return user.signUp({}, options);
    }
    /**
     * Logs in a user with a username (or email) and password. On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * @param {string} username The username (or email) to log in with.
     * @param {string} password The password to log in with.
     * @param {object} options
     * @static
     * @returns {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     */

  }, {
    key: "logIn",
    value: function logIn(username
    /*: string*/
    , password
    /*: string*/
    , options
    /*:: ?: FullOptions*/
    ) {
      if (typeof username !== 'string') {
        return _promise.default.reject(new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'Username must be a string.'));
      } else if (typeof password !== 'string') {
        return _promise.default.reject(new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'Password must be a string.'));
      }

      var user = new this();

      user._finishFetch({
        username: username,
        password: password
      });

      return user.logIn(options);
    }
    /**
     * Logs in a user with a session token. On success, this saves the session
     * to disk, so you can retrieve the currently logged in user using
     * <code>current</code>.
     *
     * @param {string} sessionToken The sessionToken to log in with.
     * @param {object} options
     * @static
     * @returns {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     */

  }, {
    key: "become",
    value: function become(sessionToken
    /*: string*/
    , options
    /*:: ?: RequestOptions*/
    ) {
      if (!canUseCurrentUser) {
        throw new Error('It is not memory-safe to become a user in a server environment');
      }

      options = options || {};
      var becomeOptions
      /*: RequestOptions*/
      = {
        sessionToken: sessionToken
      };

      if (options.hasOwnProperty('useMasterKey')) {
        becomeOptions.useMasterKey = options.useMasterKey;
      }

      var controller = _CoreManager.default.getUserController();

      var user = new this();
      return controller.become(user, becomeOptions);
    }
    /**
     * Retrieves a user with a session token.
     *
     * @param {string} sessionToken The sessionToken to get user with.
     * @param {object} options
     * @static
     * @returns {Promise} A promise that is fulfilled with the user is fetched.
     */

  }, {
    key: "me",
    value: function me(sessionToken
    /*: string*/
    ) {
      var options
      /*:: ?: RequestOptions*/
      = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var controller = _CoreManager.default.getUserController();

      var meOptions
      /*: RequestOptions*/
      = {
        sessionToken: sessionToken
      };

      if (options.useMasterKey) {
        meOptions.useMasterKey = options.useMasterKey;
      }

      var user = new this();
      return controller.me(user, meOptions);
    }
    /**
     * Logs in a user with a session token. On success, this saves the session
     * to disk, so you can retrieve the currently logged in user using
     * <code>current</code>. If there is no session token the user will not logged in.
     *
     * @param {object} userJSON The JSON map of the User's data
     * @static
     * @returns {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     */

  }, {
    key: "hydrate",
    value: function hydrate(userJSON
    /*: AttributeMap*/
    ) {
      var controller = _CoreManager.default.getUserController();

      var user = new this();
      return controller.hydrate(user, userJSON);
    }
    /**
     * Static version of {@link https://parseplatform.org/Parse-SDK-JS/api/master/Parse.User.html#linkWith linkWith}
     *
     * @param provider
     * @param options
     * @param saveOpts
     * @static
     * @returns {Promise}
     */

  }, {
    key: "logInWith",
    value: function logInWith(provider
    /*: any*/
    , options
    /*: { authData?: AuthData }*/
    , saveOpts
    /*:: ?: FullOptions*/
    )
    /*: Promise<ParseUser>*/
    {
      var user = new this();
      return user.linkWith(provider, options, saveOpts);
    }
    /**
     * Logs out the currently logged in user session. This will remove the
     * session from disk, log out of linked services, and future calls to
     * <code>current</code> will return <code>null</code>.
     *
     * @param {object} options
     * @static
     * @returns {Promise} A promise that is resolved when the session is
     *   destroyed on the server.
     */

  }, {
    key: "logOut",
    value: function logOut() {
      var options
      /*: RequestOptions*/
      = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var controller = _CoreManager.default.getUserController();

      return controller.logOut(options);
    }
    /**
     * Requests a password reset email to be sent to the specified email address
     * associated with the user account. This email allows the user to securely
     * reset their password on the Parse site.
     *
     * @param {string} email The email address associated with the user that
     *     forgot their password.
     * @param {object} options
     * @static
     * @returns {Promise}
     */

  }, {
    key: "requestPasswordReset",
    value: function requestPasswordReset(email
    /*: string*/
    , options
    /*:: ?: RequestOptions*/
    ) {
      options = options || {};
      var requestOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        requestOptions.useMasterKey = options.useMasterKey;
      }

      var controller = _CoreManager.default.getUserController();

      return controller.requestPasswordReset(email, requestOptions);
    }
    /**
     * Request an email verification.
     *
     * @param {string} email The email address associated with the user that
     *     needs to verify their email.
     * @param {object} options
     * @static
     * @returns {Promise}
     */

  }, {
    key: "requestEmailVerification",
    value: function requestEmailVerification(email
    /*: string*/
    , options
    /*:: ?: RequestOptions*/
    ) {
      options = options || {};
      var requestOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        requestOptions.useMasterKey = options.useMasterKey;
      }

      var controller = _CoreManager.default.getUserController();

      return controller.requestEmailVerification(email, requestOptions);
    }
    /**
     * Verify whether a given password is the password of the current user.
     *
     * @param {string} username  A username to be used for identificaiton
     * @param {string} password A password to be verified
     * @param {object} options
     * @static
     * @returns {Promise} A promise that is fulfilled with a user
     *  when the password is correct.
     */

  }, {
    key: "verifyPassword",
    value: function verifyPassword(username
    /*: string*/
    , password
    /*: string*/
    , options
    /*:: ?: RequestOptions*/
    ) {
      if (typeof username !== 'string') {
        return _promise.default.reject(new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'Username must be a string.'));
      }

      if (typeof password !== 'string') {
        return _promise.default.reject(new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'Password must be a string.'));
      }

      options = options || {};
      var verificationOption = {};

      if (options.hasOwnProperty('useMasterKey')) {
        verificationOption.useMasterKey = options.useMasterKey;
      }

      var controller = _CoreManager.default.getUserController();

      return controller.verifyPassword(username, password, verificationOption);
    }
    /**
     * Allow someone to define a custom User class without className
     * being rewritten to _User. The default behavior is to rewrite
     * User to _User for legacy reasons. This allows developers to
     * override that behavior.
     *
     * @param {boolean} isAllowed Whether or not to allow custom User class
     * @static
     */

  }, {
    key: "allowCustomUserClass",
    value: function allowCustomUserClass(isAllowed
    /*: boolean*/
    ) {
      _CoreManager.default.set('PERFORM_USER_REWRITE', !isAllowed);
    }
    /**
     * Allows a legacy application to start using revocable sessions. If the
     * current session token is not revocable, a request will be made for a new,
     * revocable session.
     * It is not necessary to call this method from cloud code unless you are
     * handling user signup or login from the server side. In a cloud code call,
     * this function will not attempt to upgrade the current token.
     *
     * @param {object} options
     * @static
     * @returns {Promise} A promise that is resolved when the process has
     *   completed. If a replacement session token is requested, the promise
     *   will be resolved after a new token has been fetched.
     */

  }, {
    key: "enableRevocableSession",
    value: function enableRevocableSession(options
    /*:: ?: RequestOptions*/
    ) {
      options = options || {};

      _CoreManager.default.set('FORCE_REVOCABLE_SESSION', true);

      if (canUseCurrentUser) {
        var current = ParseUser.current();

        if (current) {
          return current._upgradeToRevocableSession(options);
        }
      }

      return _promise.default.resolve();
    }
    /**
     * Enables the use of become or the current user in a server
     * environment. These features are disabled by default, since they depend on
     * global objects that are not memory-safe for most servers.
     *
     * @static
     */

  }, {
    key: "enableUnsafeCurrentUser",
    value: function enableUnsafeCurrentUser() {
      canUseCurrentUser = true;
    }
    /**
     * Disables the use of become or the current user in any environment.
     * These features are disabled on servers by default, since they depend on
     * global objects that are not memory-safe for most servers.
     *
     * @static
     */

  }, {
    key: "disableUnsafeCurrentUser",
    value: function disableUnsafeCurrentUser() {
      canUseCurrentUser = false;
    }
    /**
     * When registering users with {@link https://parseplatform.org/Parse-SDK-JS/api/master/Parse.User.html#linkWith linkWith} a basic auth provider
     * is automatically created for you.
     *
     * For advanced authentication, you can register an Auth provider to
     * implement custom authentication, deauthentication.
     *
     * @param provider
     * @see {@link https://parseplatform.org/Parse-SDK-JS/api/master/AuthProvider.html AuthProvider}
     * @see {@link https://docs.parseplatform.org/js/guide/#custom-authentication-module Custom Authentication Module}
     * @static
     */

  }, {
    key: "_registerAuthenticationProvider",
    value: function _registerAuthenticationProvider(provider
    /*: any*/
    ) {
      authProviders[provider.getAuthType()] = provider; // Synchronize the current user with the auth provider.

      ParseUser.currentAsync().then(function (current) {
        if (current) {
          current._synchronizeAuthData(provider.getAuthType());
        }
      });
    }
    /**
     * @param provider
     * @param options
     * @param saveOpts
     * @deprecated since 2.9.0 see {@link https://parseplatform.org/Parse-SDK-JS/api/master/Parse.User.html#logInWith logInWith}
     * @static
     * @returns {Promise}
     */

  }, {
    key: "_logInWith",
    value: function _logInWith(provider
    /*: any*/
    , options
    /*: { authData?: AuthData }*/
    , saveOpts
    /*:: ?: FullOptions*/
    ) {
      var user = new this();
      return user.linkWith(provider, options, saveOpts);
    }
  }, {
    key: "_clearCache",
    value: function _clearCache() {
      currentUserCache = null;
      currentUserCacheMatchesDisk = false;
    }
  }, {
    key: "_setCurrentUserCache",
    value: function _setCurrentUserCache(user
    /*: ParseUser*/
    ) {
      currentUserCache = user;
    }
  }]);
  return ParseUser;
}(_ParseObject2.default);

_ParseObject2.default.registerSubclass('_User', ParseUser);

var DefaultController = {
  updateUserOnDisk: function updateUserOnDisk(user) {
    var path = _Storage.default.generatePath(CURRENT_USER_KEY);

    var json = user.toJSON();
    delete json.password;
    json.className = '_User';
    var userData = (0, _stringify.default)(json);

    if (_CoreManager.default.get('ENCRYPTED_USER')) {
      var crypto = _CoreManager.default.getCryptoController();

      userData = crypto.encrypt(json, _CoreManager.default.get('ENCRYPTED_KEY'));
    }

    return _Storage.default.setItemAsync(path, userData).then(function () {
      return user;
    });
  },
  removeUserFromDisk: function removeUserFromDisk() {
    var path = _Storage.default.generatePath(CURRENT_USER_KEY);

    currentUserCacheMatchesDisk = true;
    currentUserCache = null;
    return _Storage.default.removeItemAsync(path);
  },
  setCurrentUser: function setCurrentUser(user) {
    currentUserCache = user;

    user._cleanupAuthData();

    user._synchronizeAllAuthData();

    return DefaultController.updateUserOnDisk(user);
  },
  currentUser: function currentUser()
  /*: ?ParseUser*/
  {
    if (currentUserCache) {
      return currentUserCache;
    }

    if (currentUserCacheMatchesDisk) {
      return null;
    }

    if (_Storage.default.async()) {
      throw new Error('Cannot call currentUser() when using a platform with an async ' + 'storage system. Call currentUserAsync() instead.');
    }

    var path = _Storage.default.generatePath(CURRENT_USER_KEY);

    var userData = _Storage.default.getItem(path);

    currentUserCacheMatchesDisk = true;

    if (!userData) {
      currentUserCache = null;
      return null;
    }

    if (_CoreManager.default.get('ENCRYPTED_USER')) {
      var crypto = _CoreManager.default.getCryptoController();

      userData = crypto.decrypt(userData, _CoreManager.default.get('ENCRYPTED_KEY'));
    }

    userData = JSON.parse(userData);

    if (!userData.className) {
      userData.className = '_User';
    }

    if (userData._id) {
      if (userData.objectId !== userData._id) {
        userData.objectId = userData._id;
      }

      delete userData._id;
    }

    if (userData._sessionToken) {
      userData.sessionToken = userData._sessionToken;
      delete userData._sessionToken;
    }

    var current = _ParseObject2.default.fromJSON(userData);

    currentUserCache = current;

    current._synchronizeAllAuthData();

    return current;
  },
  currentUserAsync: function currentUserAsync()
  /*: Promise<?ParseUser>*/
  {
    if (currentUserCache) {
      return _promise.default.resolve(currentUserCache);
    }

    if (currentUserCacheMatchesDisk) {
      return _promise.default.resolve(null);
    }

    var path = _Storage.default.generatePath(CURRENT_USER_KEY);

    return _Storage.default.getItemAsync(path).then(function (userData) {
      currentUserCacheMatchesDisk = true;

      if (!userData) {
        currentUserCache = null;
        return _promise.default.resolve(null);
      }

      if (_CoreManager.default.get('ENCRYPTED_USER')) {
        var crypto = _CoreManager.default.getCryptoController();

        userData = crypto.decrypt(userData.toString(), _CoreManager.default.get('ENCRYPTED_KEY'));
      }

      userData = JSON.parse(userData);

      if (!userData.className) {
        userData.className = '_User';
      }

      if (userData._id) {
        if (userData.objectId !== userData._id) {
          userData.objectId = userData._id;
        }

        delete userData._id;
      }

      if (userData._sessionToken) {
        userData.sessionToken = userData._sessionToken;
        delete userData._sessionToken;
      }

      var current = _ParseObject2.default.fromJSON(userData);

      currentUserCache = current;

      current._synchronizeAllAuthData();

      return _promise.default.resolve(current);
    });
  },
  signUp: function signUp(user
  /*: ParseUser*/
  , attrs
  /*: AttributeMap*/
  , options
  /*: RequestOptions*/
  )
  /*: Promise<ParseUser>*/
  {
    var username = attrs && attrs.username || user.get('username');
    var password = attrs && attrs.password || user.get('password');

    if (!username || !username.length) {
      return _promise.default.reject(new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'Cannot sign up user with an empty username.'));
    }

    if (!password || !password.length) {
      return _promise.default.reject(new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'Cannot sign up user with an empty password.'));
    }

    return user.save(attrs, options).then(function () {
      // Clear the password field
      user._finishFetch({
        password: undefined
      });

      if (canUseCurrentUser) {
        return DefaultController.setCurrentUser(user);
      }

      return user;
    });
  },
  logIn: function logIn(user
  /*: ParseUser*/
  , options
  /*: RequestOptions*/
  )
  /*: Promise<ParseUser>*/
  {
    var RESTController = _CoreManager.default.getRESTController();

    var stateController = _CoreManager.default.getObjectStateController();

    var auth = {
      username: user.get('username'),
      password: user.get('password')
    };
    return RESTController.request(options.usePost ? 'POST' : 'GET', 'login', auth, options).then(function (response) {
      user._migrateId(response.objectId);

      user._setExisted(true);

      stateController.setPendingOp(user._getStateIdentifier(), 'username', undefined);
      stateController.setPendingOp(user._getStateIdentifier(), 'password', undefined);
      response.password = undefined;

      user._finishFetch(response);

      if (!canUseCurrentUser) {
        // We can't set the current user, so just return the one we logged in
        return _promise.default.resolve(user);
      }

      return DefaultController.setCurrentUser(user);
    });
  },
  become: function become(user
  /*: ParseUser*/
  , options
  /*: RequestOptions*/
  )
  /*: Promise<ParseUser>*/
  {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', 'users/me', {}, options).then(function (response) {
      user._finishFetch(response);

      user._setExisted(true);

      return DefaultController.setCurrentUser(user);
    });
  },
  hydrate: function hydrate(user
  /*: ParseUser*/
  , userJSON
  /*: AttributeMap*/
  )
  /*: Promise<ParseUser>*/
  {
    user._finishFetch(userJSON);

    user._setExisted(true);

    if (userJSON.sessionToken && canUseCurrentUser) {
      return DefaultController.setCurrentUser(user);
    } else {
      return _promise.default.resolve(user);
    }
  },
  me: function me(user
  /*: ParseUser*/
  , options
  /*: RequestOptions*/
  )
  /*: Promise<ParseUser>*/
  {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', 'users/me', {}, options).then(function (response) {
      user._finishFetch(response);

      user._setExisted(true);

      return user;
    });
  },
  logOut: function logOut(options
  /*: RequestOptions*/
  )
  /*: Promise<ParseUser>*/
  {
    var RESTController = _CoreManager.default.getRESTController();

    if (options.sessionToken) {
      return RESTController.request('POST', 'logout', {}, options);
    }

    return DefaultController.currentUserAsync().then(function (currentUser) {
      var path = _Storage.default.generatePath(CURRENT_USER_KEY);

      var promise = _Storage.default.removeItemAsync(path);

      if (currentUser !== null) {
        var currentSession = currentUser.getSessionToken();

        if (currentSession && (0, _isRevocableSession.default)(currentSession)) {
          promise = promise.then(function () {
            return RESTController.request('POST', 'logout', {}, {
              sessionToken: currentSession
            });
          });
        }

        currentUser._logOutWithAll();

        currentUser._finishFetch({
          sessionToken: undefined
        });
      }

      currentUserCacheMatchesDisk = true;
      currentUserCache = null;
      return promise;
    });
  },
  requestPasswordReset: function requestPasswordReset(email
  /*: string*/
  , options
  /*: RequestOptions*/
  ) {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('POST', 'requestPasswordReset', {
      email: email
    }, options);
  },
  upgradeToRevocableSession: function upgradeToRevocableSession(user
  /*: ParseUser*/
  , options
  /*: RequestOptions*/
  ) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var token, RESTController, result, session, current;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              token = user.getSessionToken();

              if (token) {
                _context6.next = 3;
                break;
              }

              return _context6.abrupt("return", _promise.default.reject(new _ParseError.default(_ParseError.default.SESSION_MISSING, 'Cannot upgrade a user with no session token')));

            case 3:
              options.sessionToken = token;
              RESTController = _CoreManager.default.getRESTController();
              _context6.next = 7;
              return RESTController.request('POST', 'upgradeToRevocableSession', {}, options);

            case 7:
              result = _context6.sent;
              session = new _ParseSession.default();

              session._finishFetch(result);

              user._finishFetch({
                sessionToken: session.getSessionToken()
              });

              _context6.next = 13;
              return user.isCurrentAsync();

            case 13:
              current = _context6.sent;

              if (!current) {
                _context6.next = 16;
                break;
              }

              return _context6.abrupt("return", DefaultController.setCurrentUser(user));

            case 16:
              return _context6.abrupt("return", _promise.default.resolve(user));

            case 17:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  },
  linkWith: function linkWith(user
  /*: ParseUser*/
  , authData
  /*: AuthData*/
  , options
  /*: FullOptions*/
  ) {
    return user.save({
      authData: authData
    }, options).then(function () {
      if (canUseCurrentUser) {
        return DefaultController.setCurrentUser(user);
      }

      return user;
    });
  },
  verifyPassword: function verifyPassword(username
  /*: string*/
  , password
  /*: string*/
  , options
  /*: RequestOptions*/
  ) {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', 'verifyPassword', {
      username: username,
      password: password
    }, options);
  },
  requestEmailVerification: function requestEmailVerification(email
  /*: string*/
  , options
  /*: RequestOptions*/
  ) {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('POST', 'verificationEmailRequest', {
      email: email
    }, options);
  }
};

_CoreManager.default.setUserController(DefaultController);

var _default = ParseUser;
exports.default = _default;